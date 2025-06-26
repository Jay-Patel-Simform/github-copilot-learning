import React, { useState, useCallback, useRef } from 'react';
import {
  Button,
  Card,
  Space,
  Switch,
  Slider,
  Select,
  Typography,
  message,
  Tag,
  Divider,
} from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  ReloadOutlined,
  DownloadOutlined,
  HeartOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import {
  MasonryGrid,
  useMasonryGrid,
  type MasonryGridItem,
  type MasonryGridRef,
} from '../components/common/MasonryGrid';
import './masonry-grid.css';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// Pinterest-style sample data generator
const generateSampleItems = (count: number): MasonryGridItem[] => {
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

  const sampleTitles = [
    'Beautiful Mountain Landscape',
    'Modern Architecture Design',
    'Cozy Interior Inspiration',
    'Nature Photography',
    'Urban Street Art',
    'Minimalist Home Decor',
    'Travel Destinations',
    'Food Photography',
    'Fashion Inspiration',
    'DIY Craft Ideas',
    'Garden Design',
    'Abstract Art',
    'Vintage Style',
    'Workspace Setup',
    'Outdoor Adventures',
  ];

  const sampleCategories = [
    'Nature',
    'Architecture',
    'Interior',
    'Travel',
    'Food',
    'Fashion',
    'Art',
    'DIY',
    'Photography',
    'Design',
  ];

  return Array.from({ length: count }, (_, index) => {
    const randomHeight = Math.floor(Math.random() * 300) + 200; // 200-500px height
    const imageIndex = index % sampleImages.length;
    const titleIndex = index % sampleTitles.length;
    const categoryIndex = Math.floor(Math.random() * sampleCategories.length);

    return {
      id: `item-${index + 1}`,
      content: (
        <div className="pinterest-card">
          <div className="pinterest-card__image-container">
            <img
              src={sampleImages[imageIndex]}
              alt={sampleTitles[titleIndex]}
              className="pinterest-card__image"
              style={{ height: randomHeight }}
              loading="lazy"
            />
            <div className="pinterest-card__overlay">
              <div className="pinterest-card__overlay-actions">
                <Button type="primary" size="small" className="pinterest-save-btn">
                  Save
                </Button>
              </div>
              <div className="pinterest-card__overlay-info">
                <Button
                  type="text"
                  size="small"
                  icon={<HeartOutlined />}
                  className="pinterest-action-btn"
                />
                <Button
                  type="text"
                  size="small"
                  icon={<EyeOutlined />}
                  className="pinterest-action-btn"
                />
              </div>
            </div>
          </div>
          <div className="pinterest-card__content">
            <Text strong className="pinterest-card__title">
              {sampleTitles[titleIndex]}
            </Text>
            <Tag className="pinterest-card__category">{sampleCategories[categoryIndex]}</Tag>
          </div>
        </div>
      ),
      metadata: {
        title: sampleTitles[titleIndex],
        category: sampleCategories[categoryIndex],
        likes: Math.floor(Math.random() * 1000),
        views: Math.floor(Math.random() * 10000),
      },
    };
  });
};

export default function MasonryGridDemo() {
  const [items, setItems] = useState<MasonryGridItem[]>(() => generateSampleItems(30));
  const [loading, setLoading] = useState(false);
  const [virtualScrolling, setVirtualScrolling] = useState(true);
  const [gap, setGap] = useState(4);
  const [animationDuration, setAnimationDuration] = useState(200);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const breakpoints = {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6,
    xxl: 7,
  };

  const { gridItems, gridRef, addItems, removeItems, updateItems, recalculateLayout } =
    useMasonryGrid(items);

  const filteredItems =
    selectedCategory === 'all'
      ? gridItems
      : gridItems.filter((item) => item.metadata?.category === selectedCategory);

  const categories = [
    'all',
    ...Array.from(new Set(gridItems.map((item) => item.metadata?.category).filter(Boolean))),
  ];

  const handleAddItems = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const newItems = generateSampleItems(15);
      setItems((prev) => [...prev, ...newItems]);
      addItems(newItems);
      setLoading(false);
      message.success(`Added ${newItems.length} new items`);
    }, 500);
  }, [addItems]);

  const handleRemoveItems = useCallback(() => {
    if (gridItems.length > 5) {
      const itemsToRemove = gridItems.slice(-5).map((item) => item.id);
      setItems((prev) => prev.slice(0, -5));
      removeItems(itemsToRemove);
      message.success('Removed 5 items');
    } else {
      message.warning('Need at least 5 items');
    }
  }, [gridItems.length, removeItems]);

  const handleRegenerateItems = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const newItems = generateSampleItems(30);
      setItems(newItems);
      setLoading(false);
      message.success('Regenerated all items');
    }, 500);
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    message.info('Scrolled to top');
  }, []);

  const handleScrollToItem = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * gridItems.length);
    message.info(`Would scroll to item ${randomIndex + 1}`);
  }, [gridItems.length]);

  const handleExportLayout = useCallback(() => {
    const layoutInfo = gridRef.current?.getLayout();
    if (layoutInfo) {
      console.log('Layout Info:', layoutInfo);
      message.success('Layout info exported to console');
    }
  }, [gridRef]);

  return (
    <div className="masonry-grid-demo">
      <div className="masonry-grid-demo__header">
        <Title level={2}>Pinterest-Style Masonry Grid</Title>
        <Paragraph>
          A responsive, accessible masonry grid layout inspired by Pinterest. Features dynamic
          loading, virtual scrolling, and smooth animations.
        </Paragraph>
      </div>

      <Card className="masonry-grid-demo__controls">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Space wrap>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddItems}
              loading={loading}
            >
              Add Items
            </Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={handleRemoveItems}
              disabled={gridItems.length <= 5}
            >
              Remove Items
            </Button>
            <Button icon={<ReloadOutlined />} onClick={handleRegenerateItems} loading={loading}>
              Regenerate
            </Button>
            <Button icon={<DownloadOutlined />} onClick={handleExportLayout}>
              Export Layout
            </Button>
          </Space>

          <Divider />

          <Space wrap>
            <div>
              <Text strong>Category Filter:</Text>
              <Select
                value={selectedCategory}
                onChange={setSelectedCategory}
                style={{ width: 120, marginLeft: 8 }}
              >
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category === 'all' ? 'All' : category}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <Text strong>Virtual Scrolling:</Text>
              <Switch
                checked={virtualScrolling}
                onChange={setVirtualScrolling}
                style={{ marginLeft: 8 }}
              />
            </div>
          </Space>

          <Space wrap>
            <div style={{ width: 200 }}>
              <Text strong>Gap: {gap}px</Text>
              <Slider
                min={0}
                max={20}
                value={gap}
                onChange={setGap}
                tooltip={{ formatter: (value) => `${value}px` }}
              />
            </div>

            <div style={{ width: 200 }}>
              <Text strong>Animation: {animationDuration}ms</Text>
              <Slider
                min={0}
                max={500}
                step={50}
                value={animationDuration}
                onChange={setAnimationDuration}
                tooltip={{ formatter: (value) => `${value}ms` }}
              />
            </div>
          </Space>

          <Space wrap>
            <Button size="small" onClick={handleScrollToTop}>
              Scroll to Top
            </Button>
            <Button size="small" onClick={handleScrollToItem} disabled={gridItems.length === 0}>
              Scroll to Random Item
            </Button>
            <Button size="small" onClick={recalculateLayout}>
              Recalculate Layout
            </Button>
          </Space>

          <div>
            <Space>
              <Tag color="blue">Total Items: {gridItems.length}</Tag>
              <Tag color="green">Filtered Items: {filteredItems.length}</Tag>
              <Tag color={loading ? 'orange' : 'default'}>
                Status: {loading ? 'Loading' : 'Ready'}
              </Tag>
            </Space>
          </div>
        </Space>
      </Card>

      <div className="masonry-grid-demo__container">
        <MasonryGrid
          ref={gridRef}
          items={filteredItems}
          columns={breakpoints}
          gap={gap}
          virtualScrolling={virtualScrolling}
          animationDuration={animationDuration}
          className="pinterest-style-grid"
          ariaLabel="Pinterest-style masonry grid"
          onItemClick={(item, index) => {
            message.info(`Clicked item: ${item.metadata?.title || item.id}`);
          }}
          onLayoutChange={(layoutInfo) => {
            console.log('Layout updated:', layoutInfo);
          }}
        />
      </div>
    </div>
  );
}
