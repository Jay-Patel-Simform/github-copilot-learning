import type { ButtonStatus } from './GradientButton.types';
import type { CSSProperties } from 'react';

interface GradientStyles {
  backgroundImage: string;
  color: string;
  border: string;
}

// Gradient style definitions for different status types
const gradientStyles: Record<ButtonStatus, GradientStyles> = {
  primary: {
    backgroundImage: 'linear-gradient(to right, #1677ff, #69b1ff)',
    color: '#ffffff',
    border: 'none'
  },
  success: {
    backgroundImage: 'linear-gradient(to right, #52c41a, #95de64)',
    color: '#ffffff',
    border: 'none'
  },
  error: {
    backgroundImage: 'linear-gradient(to right, #ff4d4f, #ff7875)',
    color: '#ffffff',
    border: 'none'
  },
  warning: {
    backgroundImage: 'linear-gradient(to right, #faad14, #ffd666)',
    color: '#ffffff',
    border: 'none'
  },
  info: {
    backgroundImage: 'linear-gradient(to right, #13c2c2, #5cdbd3)',
    color: '#ffffff',
    border: 'none'
  }
};

// Hover styles to make the gradients slightly darker
const hoverGradients: Record<ButtonStatus, string> = {
  primary: 'linear-gradient(to right, #0958d9, #4096ff)',
  success: 'linear-gradient(to right, #389e0d, #7cb305)',
  error: 'linear-gradient(to right, #d9363e, #ff7875)',
  warning: 'linear-gradient(to right, #d88b0f, #ffc53d)',
  info: 'linear-gradient(to right, #08979c, #36cfc9)'
};

// Utility function to get the gradient style for a specific status
export const getGradientStyle = (status: ButtonStatus): CSSProperties => {
  return {
    ...gradientStyles[status],
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 0 rgba(0, 0, 0, 0.045)',
    fontWeight: 500
  };
};

// Insert this CSS into your global stylesheet or create a separate CSS file
export const gradientButtonCss = `
  .gradient-button {
    position: relative;
    overflow: hidden;
  }
  
  .gradient-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  .gradient-button:hover::before {
    opacity: 1;
  }
  
  .gradient-button-primary::before {
    background: ${hoverGradients.primary};
  }
  
  .gradient-button-success::before {
    background: ${hoverGradients.success};
  }
  
  .gradient-button-error::before {
    background: ${hoverGradients.error};
  }
  
  .gradient-button-warning::before {
    background: ${hoverGradients.warning};
  }
  
  .gradient-button-info::before {
    background: ${hoverGradients.info};
  }
  
  .gradient-button:active {
    transform: translateY(1px);
  }
  
  .gradient-button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    background-image: none;
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.25);
    border: 1px solid #d9d9d9;
  }
`;
