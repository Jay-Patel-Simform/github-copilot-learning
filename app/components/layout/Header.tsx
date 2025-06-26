import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
  ApartmentOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router';
import './Header.css';

const { Header } = Layout;

export const AppHeader: React.FC<Readonly<{}>> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if we're in mobile view
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIsMobile();

    // Add window resize listener
    window.addEventListener('resize', checkIsMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Check for dark mode
  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(
        document.body.getAttribute('data-theme') === 'dark' ||
          window.matchMedia('(prefers-color-scheme: dark)').matches,
      );
    };

    checkDarkMode();

    // Watch for changes in theme
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  // Function to create menu items with appropriate class names based on mobile/desktop
  const getMenuItems = (isMobileView: boolean) => {
    const linkClass = isMobileView ? 'mobile-menu-link menu-link' : 'desktop-menu-link menu-link';

    return [
      {
        key: '1',
        icon: <HomeOutlined />,
        label: (
          <Link to="/" className={linkClass}>
            <span>Home</span>
          </Link>
        ),
      },
      {
        key: '2',
        icon: <AppstoreOutlined />,
        label: (
          <Link to="/buttons" className={linkClass}>
            <span>Components</span>
          </Link>
        ),
      },
      {
        key: '3',
        icon: <ThunderboltOutlined />,
        label: (
          <Link to="/animations" className={linkClass}>
            <span>Animations</span>
          </Link>
        ),
      },
      {
        key: '4',
        icon: <BorderOutlined />,
        label: (
          <Link to="/masonry-grid" className={linkClass}>
            <span>Masonry Grid</span>
          </Link>
        ),
      },
      {
        key: '5',
        icon: <ApartmentOutlined />,
        label: (
          <Link to="/stepper" className={linkClass}>
            <span>Stepper</span>
          </Link>
        ),
      },
      {
        key: '6',
        icon: <UserOutlined />,
        label: (
          <Link to="/profile" className={linkClass}>
            <span>Profile</span>
          </Link>
        ),
      },
    ];
  };

  return (
    <Header className="app-header">
      <div className="app-header-content">
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
            className="header-collapse-button"
          />
        )}
        <div className="app-logo">Ant Design Demo</div>
      </div>

      {isMobile ? (
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          styles={{
            body: { padding: 0 },
            header: { borderBottom: '1px solid #f0f0f0' },
            content: { boxShadow: 'none' },
            wrapper: { fontSize: '16px' },
          }}
          width={250}
          className="mobile-menu-drawer"
        >
          <Menu
            mode="vertical"
            defaultSelectedKeys={['1']}
            items={getMenuItems(true)}
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: '100%' }}
            theme={isDarkMode ? 'dark' : 'light'}
            className="mobile-drawer-menu"
          />
        </Drawer>
      ) : (
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={getMenuItems(false)}
          className="desktop-menu"
          theme={isDarkMode ? 'dark' : 'light'}
        />
      )}
    </Header>
  );
};
