import { useEffect, useRef, useState, useCallback } from 'react';
import classes from './styles.module.css';

const sampleImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1415604934674-561df9abf539?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=550&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=450&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=650&auto=format&fit=crop&q=60',
];

export default function MasonryGrid() {
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const [imagesLoaded, setImagesLoaded] = useState(new Set<string>());
  const [isComponentMounted, setIsComponentMounted] = useState(false);

  function getMap() {
    return itemsRef.current;
  }

  const applyMasonry = useCallback(() => {
    const gridItems = getMap();
    const rowHeight = 10; // Base row height (matches grid-auto-rows in CSS)
    const gap = 10; // Matches gap in CSS

    gridItems.forEach((item, key) => {
      if (item === null) return;

      // Reset grid row end to ensure recalculation
      item.style.gridRowEnd = 'auto';

      // Get the image inside the item
      const img = item.querySelector('img');
      if (img && imagesLoaded.has(key)) {
        const itemHeight = img.getBoundingClientRect().height;
        if (itemHeight > 0) {
          const rowSpan = Math.ceil((itemHeight + gap) / (rowHeight + gap));
          item.style.gridRowEnd = `span ${rowSpan}`;
        }
      }
    });
  }, [imagesLoaded]);

  function handleImageLoad(imageKey: string) {
    setImagesLoaded((prev) => {
      const newSet = new Set(prev);
      newSet.add(imageKey);
      return newSet;
    });
  }

  // Apply masonry layout when images load
  useEffect(() => {
    if (imagesLoaded.size > 0) {
      window.requestAnimationFrame(() => {
        applyMasonry();
      });
    }
  }, [imagesLoaded, applyMasonry]);

  // Check for already loaded images on mount
  useEffect(() => {
    setIsComponentMounted(true);
    
    // Check if any images are already loaded (cached)
    const checkAlreadyLoadedImages = () => {
      const loadedKeys = new Set<string>();
      
      sampleImages.forEach((imageUrl, idx) => {
        const key = imageUrl + idx;
        const element = itemsRef.current.get(key);
        
        if (element) {
          const img = element.querySelector('img');
          if (img && img.complete && img.naturalHeight > 0) {
            loadedKeys.add(key);
          }
        }
      });
      
      if (loadedKeys.size > 0) {
        setImagesLoaded(loadedKeys);
      }
    };

    // Small delay to ensure refs are set
    const timeoutId = setTimeout(checkAlreadyLoadedImages, 50);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (imagesLoaded.size > 0) {
        applyMasonry();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded, applyMasonry]);

  // Cleanup refs on unmount
  useEffect(() => {
    const itemsRefCurrent = itemsRef.current;
    return () => {
      itemsRefCurrent.clear();
    };
  }, []);

  return (
    <div className={classes['masonry-grid']} ref={gridContainerRef}>
      {sampleImages.map((imageUrl, idx) => (
        <div
          key={imageUrl + idx}
          className={classes['masonry-item']}
          ref={(node) => {
            const map = getMap();
            map.set(imageUrl + idx, node);
          }}
        >
          <img
            alt={`Image ${idx}`}
            src={imageUrl}
            onLoad={() => handleImageLoad(imageUrl + idx)}
            onError={() => handleImageLoad(imageUrl + idx)} // Handle error to avoid blocking
          />
        </div>
      ))}
    </div>
  );
}
