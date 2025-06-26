import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,
  createContext,
  useContext,
} from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import type {
  MasonryGridProps,
  MasonryGridItem,
  MasonryGridRef,
  LayoutInfo,
  MasonryGridContextValue,
  MasonryGridBreakpoints,
} from './MasonryGrid.types';
import './MasonryGrid.css';

// Context for sharing grid state
const MasonryGridContext = createContext<MasonryGridContextValue | null>(null);

const useMasonryGridContext = () => {
  const context = useContext(MasonryGridContext);
  if (!context) {
    throw new Error('useMasonryGridContext must be used within a MasonryGrid component');
  }
  return context;
};

// Hook for detecting browser support
const useBrowserSupport = () => {
  const [supportsCSSMasonry, setSupportsCSSMasonry] = useState(false);
  const [supportsResizeObserver, setSupportsResizeObserver] = useState(false);
  const [supportsIntersectionObserver, setSupportsIntersectionObserver] = useState(false);

  useEffect(() => {
    // Check for CSS Masonry support
    if (CSS.supports && CSS.supports('grid-template-rows', 'masonry')) {
      setSupportsCSSMasonry(true);
    }

    // Check for ResizeObserver support
    if (typeof ResizeObserver !== 'undefined') {
      setSupportsResizeObserver(true);
    }

    // Check for IntersectionObserver support
    if (typeof IntersectionObserver !== 'undefined') {
      setSupportsIntersectionObserver(true);
    }
  }, []);

  return {
    supportsCSSMasonry,
    supportsResizeObserver,
    supportsIntersectionObserver,
  };
};

// Hook for responsive columns
const useResponsiveColumns = (breakpoints: MasonryGridBreakpoints = {}) => {
  const [columns, setColumns] = useState(1);

  const defaultBreakpoints: Required<MasonryGridBreakpoints> = {
    xs: breakpoints.xs ?? 1,
    sm: breakpoints.sm ?? 2,
    md: breakpoints.md ?? 3,
    lg: breakpoints.lg ?? 4,
    xl: breakpoints.xl ?? 5,
    xxl: breakpoints.xxl ?? 6,
  };

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;

      if (width >= 1400) {
        setColumns(defaultBreakpoints.xxl);
      } else if (width >= 1200) {
        setColumns(defaultBreakpoints.xl);
      } else if (width >= 992) {
        setColumns(defaultBreakpoints.lg);
      } else if (width >= 768) {
        setColumns(defaultBreakpoints.md);
      } else if (width >= 576) {
        setColumns(defaultBreakpoints.sm);
      } else {
        setColumns(defaultBreakpoints.xs);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);

    return () => window.removeEventListener('resize', updateColumns);
  }, [defaultBreakpoints]);

  return columns;
};

// Layout calculation utility
const calculateLayout = (
  items: MasonryGridItem[],
  containerWidth: number,
  columns: number,
  gap: number,
): LayoutInfo[] => {
  const columnWidth = (containerWidth - gap * (columns - 1)) / columns;
  const columnHeights = new Array(columns).fill(0);
  const layout: LayoutInfo[] = [];

  items.forEach((item, index) => {
    // Find the shortest column
    const shortestColumnIndex = columnHeights.reduce(
      (minIndex, height, currentIndex) =>
        height < columnHeights[minIndex] ? currentIndex : minIndex,
      0,
    );

    const x = shortestColumnIndex * (columnWidth + gap);
    const y = columnHeights[shortestColumnIndex];

    // For layout calculation, we need the item's actual height
    // This will be updated when the item is rendered
    const itemHeight = typeof item.height === 'number' ? item.height : 200; // Default height

    layout.push({
      id: item.id,
      x,
      y,
      width: columnWidth,
      height: itemHeight,
      column: shortestColumnIndex,
    });

    columnHeights[shortestColumnIndex] += itemHeight + gap;
  });

  return layout;
};

// Individual grid item component
const MasonryGridItem: React.FC<{
  item: MasonryGridItem;
  index: number;
  layout?: LayoutInfo;
  isJSLayout: boolean;
}> = ({ item, index, layout, isJSLayout }) => {
  const context = useMasonryGridContext();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [itemHeight, setItemHeight] = useState<number>(0);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    context.onImageLoad?.(item, index);
  }, [item, index, context]);

  const handleImageError = useCallback(
    (error: Error) => {
      setImageError(true);
      context.onImageError?.(item, index, error);
    },
    [item, index, context],
  );

  const handleClick = useCallback(() => {
    context.onItemClick?.(item, index);
  }, [item, index, context]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  // Measure item height for JS layout
  useEffect(() => {
    if (isJSLayout && itemRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setItemHeight(entry.contentRect.height);
        }
      });

      resizeObserver.observe(itemRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [isJSLayout]);

  const itemClassName = [
    'masonry-grid__item',
    item.loading && 'masonry-grid__item--loading',
    imageError && 'masonry-grid__item--error',
    item.className,
  ]
    .filter(Boolean)
    .join(' ');

  const itemStyle: React.CSSProperties = {
    ...item.style,
    ...(isJSLayout &&
      layout && {
        transform: `translate3d(${layout.x}px, ${layout.y}px, 0)`,
        width: layout.width,
        ...(item.height && { height: item.height }),
      }),
  };

  return (
    <div
      ref={itemRef}
      className={itemClassName}
      style={itemStyle}
      onClick={context.onItemClick ? handleClick : undefined}
      onKeyDown={context.onItemClick ? handleKeyDown : undefined}
      role={context.onItemClick ? 'button' : undefined}
      tabIndex={context.onItemClick ? 0 : undefined}
      aria-label={item.imageAlt || `Grid item ${index + 1}`}
      data-testid={`masonry-item-${item.id}`}
    >
      <div className="masonry-grid__item-content">
        {item.imageSrc && !imageError && (
          <img
            src={item.imageSrc}
            alt={item.imageAlt || ''}
            className={`masonry-grid__image ${
              imageLoaded ? 'masonry-grid__image--loaded' : 'masonry-grid__image--loading'
            }`}
            onLoad={handleImageLoad}
            onError={(e) => handleImageError(new Error(`Failed to load image: ${item.imageSrc}`))}
            loading={item.priority ? 'eager' : 'lazy'}
          />
        )}
        {imageError ? (
          <div className="masonry-grid__error-content">
            <ExclamationCircleOutlined className="masonry-grid__error-icon" />
            <p className="masonry-grid__error-message">Failed to load content</p>
          </div>
        ) : (
          item.content
        )}
      </div>
    </div>
  );
};

// Main MasonryGrid component
export const MasonryGrid = forwardRef<MasonryGridRef, MasonryGridProps>(
  (
    {
      items,
      columns: columnsProp,
      gap = 16,
      className,
      style,
      loading = false,
      loadingComponent,
      errorComponent,
      virtualScrolling = false,
      viewportHeight = 600,
      animationDuration = 300,
      useCSSGridFallback = true,
      renderItem,
      onItemClick,
      onLayoutChange,
      onImageLoad,
      onImageError,
      testId,
      ariaLabel = 'Masonry grid of items',
      role = 'grid',
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
    const [layout, setLayout] = useState<LayoutInfo[]>([]);
    const [visibleItems, setVisibleItems] = useState<MasonryGridItem[]>(items);

    const { supportsCSSMasonry, supportsResizeObserver } = useBrowserSupport();
    const responsiveColumns = useResponsiveColumns(columnsProp);

    const columns = responsiveColumns;
    const useJSLayout = !supportsCSSMasonry && !useCSSGridFallback;

    // Calculate layout when items or dimensions change
    const calculateAndSetLayout = useCallback(() => {
      if (useJSLayout && containerDimensions.width > 0) {
        const newLayout = calculateLayout(visibleItems, containerDimensions.width, columns, gap);
        setLayout(newLayout);
        onLayoutChange?.(newLayout);
      }
    }, [useJSLayout, containerDimensions.width, visibleItems, columns, gap, onLayoutChange]);

    // Container resize observer
    useEffect(() => {
      if (!containerRef.current || !supportsResizeObserver) return;

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContainerDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, [supportsResizeObserver]);

    // Recalculate layout when dependencies change
    useEffect(() => {
      calculateAndSetLayout();
    }, [calculateAndSetLayout]);

    // Virtual scrolling implementation
    useEffect(() => {
      if (!virtualScrolling) {
        setVisibleItems(items);
        return;
      }

      // Simple virtual scrolling implementation
      // In a real implementation, you'd want more sophisticated viewport detection
      const startIndex = 0;
      const endIndex = Math.min(items.length, 50); // Show first 50 items
      setVisibleItems(items.slice(startIndex, endIndex));
    }, [items, virtualScrolling]);

    // Imperative API
    useImperativeHandle(
      ref,
      () => ({
        recalculateLayout: calculateAndSetLayout,
        addItems: (newItems: MasonryGridItem[]) => {
          setVisibleItems((prev) => [...prev, ...newItems]);
        },
        removeItems: (itemIds: string[]) => {
          setVisibleItems((prev) => prev.filter((item) => !itemIds.includes(item.id)));
        },
        updateItems: (updatedItems: Partial<MasonryGridItem> & { id: string }[]) => {
          setVisibleItems((prev) =>
            prev.map((item) => {
              const update = updatedItems.find((u) => u.id === item.id);
              return update ? { ...item, ...update } : item;
            }),
          );
        },
        scrollToItem: (itemId: string) => {
          const element = containerRef.current?.querySelector(
            `[data-testid="masonry-item-${itemId}"]`,
          );
          element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        },
        getLayout: () => layout,
        getContainerDimensions: () => containerDimensions,
      }),
      [calculateAndSetLayout, layout, containerDimensions],
    );

    // Context value
    const contextValue: MasonryGridContextValue = useMemo(
      () => ({
        gap,
        columns,
        animationDuration,
        ...(onItemClick && { onItemClick }),
        ...(onImageLoad && { onImageLoad }),
        ...(onImageError && { onImageError }),
      }),
      [gap, columns, animationDuration, onItemClick, onImageLoad, onImageError],
    );

    // Container styles
    const containerStyle: React.CSSProperties = {
      '--masonry-gap': `${gap}px`,
      '--masonry-columns': columns.toString(),
      '--masonry-animation-duration': `${animationDuration}ms`,
      ...style,
      ...(useJSLayout &&
        layout.length > 0 && {
          height: Math.max(...layout.map((item) => item.y + item.height)) + gap,
        }),
      ...(virtualScrolling && { height: viewportHeight }),
    } as React.CSSProperties;

    // Container class names
    const containerClassName = [
      'masonry-grid',
      supportsCSSMasonry
        ? 'masonry-grid--css-grid'
        : useCSSGridFallback
          ? 'masonry-grid--fallback'
          : 'masonry-grid--js-layout',
      virtualScrolling && 'masonry-grid--virtual',
      `masonry-grid--columns-${columns}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Error state
    if (items.length === 0 && !loading && errorComponent) {
      return <div className="masonry-grid__error">{errorComponent}</div>;
    }

    // Loading state
    if (loading && loadingComponent) {
      return <div className="masonry-grid__loading">{loadingComponent}</div>;
    }

    // Default loading component
    if (loading) {
      return (
        <div className="masonry-grid__loading">
          <div className="masonry-grid__loading-content">
            <div className="masonry-grid__loading-spinner" />
            <p>Loading items...</p>
          </div>
        </div>
      );
    }

    return (
      <MasonryGridContext.Provider value={contextValue}>
        <div
          ref={containerRef}
          className={containerClassName}
          style={containerStyle}
          role={role}
          aria-label={ariaLabel}
          data-testid={testId}
          {...props}
        >
          {visibleItems.map((item, index) => {
            const itemLayout = layout.find((l) => l.id === item.id);

            if (renderItem) {
              return (
                <div
                  key={item.id}
                  className="masonry-grid__item"
                  style={
                    useJSLayout && itemLayout
                      ? {
                          transform: `translate3d(${itemLayout.x}px, ${itemLayout.y}px, 0)`,
                          width: itemLayout.width,
                          position: 'absolute',
                        }
                      : undefined
                  }
                >
                  {renderItem(item, index)}
                </div>
              );
            }

            return (
              <MasonryGridItem
                key={item.id}
                item={item}
                index={index}
                {...(itemLayout && { layout: itemLayout })}
                isJSLayout={useJSLayout}
              />
            );
          })}
        </div>
      </MasonryGridContext.Provider>
    );
  },
);

MasonryGrid.displayName = 'MasonryGrid';

// Hook for using masonry grid functionality
export const useMasonryGrid = (items: MasonryGridItem[]) => {
  const [gridItems, setGridItems] = useState(items);
  const gridRef = useRef<MasonryGridRef>(null);

  const addItems = useCallback((newItems: MasonryGridItem[]) => {
    setGridItems((prev) => [...prev, ...newItems]);
    gridRef.current?.addItems(newItems);
  }, []);

  const removeItems = useCallback((itemIds: string[]) => {
    setGridItems((prev) => prev.filter((item) => !itemIds.includes(item.id)));
    gridRef.current?.removeItems(itemIds);
  }, []);

  const updateItems = useCallback((updatedItems: Partial<MasonryGridItem> & { id: string }[]) => {
    setGridItems((prev) =>
      prev.map((item) => {
        const update = updatedItems.find((u) => u.id === item.id);
        return update ? { ...item, ...update } : item;
      }),
    );
    gridRef.current?.updateItems(updatedItems);
  }, []);

  const recalculateLayout = useCallback(() => {
    gridRef.current?.recalculateLayout();
  }, []);

  return {
    gridItems,
    gridRef,
    addItems,
    removeItems,
    updateItems,
    recalculateLayout,
  };
};

export { useMasonryGridContext };
