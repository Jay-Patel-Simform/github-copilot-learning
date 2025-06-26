import type { ReactNode } from 'react';

export interface AlertDialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface AlertDialogProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface AlertDialogTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export interface AlertDialogContentProps {
  children: ReactNode;
  className?: string;
}

export interface AlertDialogHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface AlertDialogTitleProps {
  children: ReactNode;
  className?: string;
}

export interface AlertDialogDescriptionProps {
  children: ReactNode;
  className?: string;
}

export interface AlertDialogFooterProps {
  children: ReactNode;
  className?: string;
}

export interface AlertDialogActionProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface AlertDialogCancelProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}
