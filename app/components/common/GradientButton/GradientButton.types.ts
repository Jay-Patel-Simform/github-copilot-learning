import type { ButtonProps } from 'antd';

export type ButtonStatus = 'primary' | 'success' | 'error' | 'warning' | 'info';

export interface GradientButtonProps extends Omit<ButtonProps, 'type'> {
  /**
   * The status variant for the gradient button
   * @default 'primary'
   */
  status?: ButtonStatus;
  
  /**
   * Additional className to be applied to the button
   */
  className?: string;
}
