import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

// Loading spinner component
const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('animate-spin', className)}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      className="opacity-25"
    />
    <path
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      fill="currentColor"
    />
  </svg>
);

const buttonVariants = cva(
  // Base styles matching SaasAble design system exactly from Figma
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-sm leading-[20px] tracking-[0.1px] transition-all duration-200 focus:outline-none focus-visible:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Filled button (Primary) - matches Figma Style=Filled
        filled:
          'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xs active:bg-primary/80 focus-visible:bg-primary/90 focus-visible:shadow-xs disabled:bg-neutral-12 disabled:text-neutral-40 disabled:opacity-[0.38] dark:disabled:bg-neutral-12 dark:disabled:text-neutral-40',
        // Outlined button - matches Figma Style=Outlined
        outlined:
          'border border-primary bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12 focus-visible:bg-primary/12 disabled:border-neutral-12 disabled:text-neutral-40 disabled:opacity-[0.38] dark:border-primary dark:hover:bg-primary/8 dark:disabled:border-neutral-24 dark:disabled:text-neutral-40',
        // Text button - matches Figma Style=Text
        text: 'bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12 focus-visible:bg-primary/12 disabled:text-neutral-40 disabled:opacity-[0.38] dark:hover:bg-primary/8 dark:disabled:text-neutral-40',
        // Elevated button - matches Figma Style=Elevated
        elevated:
          'bg-surface text-primary shadow-xs hover:shadow-lg hover:bg-primary/8 active:bg-primary/12 focus-visible:bg-primary/12 disabled:bg-neutral-12 disabled:text-neutral-40 disabled:opacity-[0.38] disabled:shadow-none dark:bg-neutral-10 dark:hover:bg-primary/8 dark:disabled:bg-neutral-12 dark:disabled:text-neutral-40',
        // Destructive variant
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 active:bg-destructive/80 focus-visible:bg-destructive/90 disabled:bg-neutral-12 disabled:text-neutral-40 disabled:opacity-[0.38] dark:disabled:bg-neutral-12 dark:disabled:text-neutral-40',
      },
      size: {
        sm: 'h-8 px-3 gap-2 text-xs font-medium [&_svg]:size-4',
        md: 'h-10 gap-2 text-sm font-semibold [&_svg]:size-[18px]',
        lg: 'h-12 gap-2 text-base font-semibold [&_svg]:size-5',
      },
      iconPosition: {
        left: '',
        right: 'flex-row-reverse',
        only: 'px-0 aspect-square',
      },
    },
    compoundVariants: [
      // Default padding for all buttons
      {
        size: 'sm',
        className: 'px-3',
      },
      {
        size: 'md',
        className: 'px-6',
      },
      {
        size: 'lg',
        className: 'px-8',
      },
      // Icon-only size adjustments
      {
        iconPosition: 'only',
        size: 'sm',
        className: 'w-8 px-0',
      },
      {
        iconPosition: 'only',
        size: 'md',
        className: 'w-10 px-0',
      },
      {
        iconPosition: 'only',
        size: 'lg',
        className: 'w-12 px-0',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      size: 'md',
      iconPosition: 'left',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<any>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      iconPosition,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    // Determine icon position based on props
    const resolvedIconPosition = React.useMemo(() => {
      if (!children && (leftIcon || rightIcon)) return 'only';
      if (rightIcon && !leftIcon) return 'right';
      return iconPosition ?? 'left';
    }, [leftIcon, rightIcon, children, iconPosition]);

    // Determine which icon to show
    const displayIcon = React.useMemo(() => {
      if (loading) return <Spinner />;
      if (resolvedIconPosition === 'right') return rightIcon;
      return leftIcon;
    }, [loading, leftIcon, rightIcon, resolvedIconPosition]);

    // Generate dynamic classes based on actual icon presence
    const dynamicClasses = React.useMemo(() => {
      if (!children) return '';

      const paddingMap = { sm: '2.5', md: '4', lg: '6' };
      const paddingValue = paddingMap[size ?? 'md'];

      if (leftIcon && !rightIcon) return `pl-${paddingValue}`;
      if (rightIcon && !leftIcon) return `pr-${paddingValue}`;

      return '';
    }, [leftIcon, rightIcon, children, size]);

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            iconPosition: resolvedIconPosition,
            className,
          }),
          dynamicClasses,
        )}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {displayIcon && (
          <span className="flex items-center justify-center">
            {displayIcon}
          </span>
        )}
        {children && <span className="flex-1">{children}</span>}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants, Spinner };
