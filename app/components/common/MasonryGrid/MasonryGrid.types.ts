import type { ReactNode, CSSProperties } from 'react';

export interface MasonryGridItem {
  /**
   * Unique identifier for the grid item
   */
  id: string;

  /**
   * Content to render inside the grid item
   */
  content: ReactNode;

  /**
   * Optional custom height (if not provided, auto-height is used)
   */
  height?: number | string;

  /**
   * Custom CSS classes for the item
   */
  className?: string;

  /**
   * Custom inline styles for the item
   */
  style?: CSSProperties;

  /**
   * Additional data attributes
   */
  data?: Record<string, unknown>;

  /**
   * Whether the item should have a loading state
   */
  loading?: boolean;

  /**
   * Image source URL if the item contains an image
   */
  imageSrc?: string;

  /**
   * Image alt text for accessibility
   */
  imageAlt?: string;

  /**
   * Priority for loading (higher numbers load first)
   */
  priority?: number;

  /**
   * Additional metadata for the item
   */
  metadata?: {
    title?: string;
    category?: string;
    likes?: number;
    views?: number;
    [key: string]: any;
  };
}

export interface MasonryGridBreakpoints {
  /**
   * Number of columns for different screen sizes
   */
  xs?: number; // < 576px
  sm?: number; // >= 576px
  md?: number; // >= 768px
  lg?: number; // >= 992px
  xl?: number; // >= 1200px
  xxl?: number; // >= 1400px
}

export interface MasonryGridProps {
  /**
   * Array of items to display in the grid
   */
  items: MasonryGridItem[];

  /**
   * Column configuration for different breakpoints
   */
  columns?: MasonryGridBreakpoints;

  /**
   * Gap between grid items (in px)
   */
  gap?: number;

  /**
   * Container class name
   */
  className?: string;

  /**
   * Container inline styles
   */
  style?: CSSProperties;

  /**
   * Loading state for the entire grid
   */
  loading?: boolean;

  /**
   * Loading component to show while items are loading
   */
  loadingComponent?: ReactNode;

  /**
   * Error component to show when items fail to load
   */
  errorComponent?: ReactNode;

  /**
   * Whether to enable virtual scrolling for performance
   */
  virtualScrolling?: boolean;

  /**
   * Viewport height for virtual scrolling
   */
  viewportHeight?: number;

  /**
   * Animation duration for layout changes (in ms)
   */
  animationDuration?: number;

  /**
   * Whether to use CSS Grid fallback
   */
  useCSSGridFallback?: boolean;

  /**
   * Custom render function for items
   */
  renderItem?: (item: MasonryGridItem, index: number) => ReactNode;

  /**
   * Callback when an item is clicked
   */
  onItemClick?: (item: MasonryGridItem, index: number) => void;

  /**
   * Callback when layout is recalculated
   */
  onLayoutChange?: (layout: LayoutInfo[]) => void;

  /**
   * Callback when an image loads
   */
  onImageLoad?: (item: MasonryGridItem, index: number) => void;

  /**
   * Callback when an image fails to load
   */
  onImageError?: (item: MasonryGridItem, index: number, error: Error) => void;

  /**
   * Test ID for testing
   */
  testId?: string;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;

  /**
   * Role for accessibility
   */
  role?: string;
}

export interface LayoutInfo {
  /**
   * Item ID
   */
  id: string;

  /**
   * X position in pixels
   */
  x: number;

  /**
   * Y position in pixels
   */
  y: number;

  /**
   * Width in pixels
   */
  width: number;

  /**
   * Height in pixels
   */
  height: number;

  /**
   * Column index
   */
  column: number;
}

export interface MasonryGridRef {
  /**
   * Recalculate the layout
   */
  recalculateLayout: () => void;

  /**
   * Add new items to the grid
   */
  addItems: (items: MasonryGridItem[]) => void;

  /**
   * Remove items from the grid
   */
  removeItems: (itemIds: string[]) => void;

  /**
   * Update specific items
   */
  updateItems: (items: Partial<MasonryGridItem> & { id: string }[]) => void;

  /**
   * Scroll to a specific item
   */
  scrollToItem: (itemId: string) => void;

  /**
   * Get current layout information
   */
  getLayout: () => LayoutInfo[];

  /**
   * Get container dimensions
   */
  getContainerDimensions: () => { width: number; height: number };
}

export interface MasonryGridContextValue {
  gap: number;
  columns: number;
  animationDuration: number;
  onItemClick?: (item: MasonryGridItem, index: number) => void;
  onImageLoad?: (item: MasonryGridItem, index: number) => void;
  onImageError?: (item: MasonryGridItem, index: number, error: Error) => void;
}
