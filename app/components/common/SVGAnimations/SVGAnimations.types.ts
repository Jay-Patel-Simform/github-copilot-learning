import type { ReactNode } from 'react';

export interface SVGAnimationDemoProps {
  children?: ReactNode;
}

export interface AnimatedIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export interface DrawingPathProps {
  size?: number;
  color?: string;
  duration?: number;
}

export interface MorphingShapeProps {
  size?: number;
  color?: string;
}

export interface PulseAnimationProps {
  size?: number;
  color?: string;
}
