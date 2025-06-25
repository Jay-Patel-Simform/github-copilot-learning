// Create a custom Ant Design Button with gradient backgrounds for different statuses
import React from 'react';
import { Button as AntdButton } from 'antd';
import type { GradientButtonProps } from './GradientButton.types';
import './GradientButton.css';

export const GradientButton: React.FC<Readonly<GradientButtonProps>> = ({
  status = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <AntdButton
      {...props}
      className={`gradient-button gradient-button-${status} ${className ?? ''}`}
    >
      {children}
    </AntdButton>
  );
};
