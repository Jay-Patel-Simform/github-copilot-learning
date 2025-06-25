import React from 'react';
import { ConfigProvider, theme } from 'antd';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Readonly<ThemeProviderProps>> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
