import React, { createContext, useContext, useState, cloneElement, isValidElement } from 'react';
import { Modal } from 'antd';
import type {
  AlertDialogContextValue,
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogFooterProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
} from './AlertDialog.types';
import './AlertDialog.css';

// Context for sharing state between compound components
const AlertDialogContext = createContext<AlertDialogContextValue | null>(null);

// Hook to use the AlertDialog context
const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error('AlertDialog compound components must be used within AlertDialog');
  }
  return context;
};

// Main AlertDialog component (Root)
const AlertDialogRoot: React.FC<Readonly<AlertDialogProps>> = ({
  children,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
    if (!isControlled) {
      setUncontrolledOpen(newOpen);
    }
  };

  return (
    <AlertDialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// Trigger component
const AlertDialogTrigger: React.FC<Readonly<AlertDialogTriggerProps>> = ({
  children,
  asChild = false,
}) => {
  const { onOpenChange } = useAlertDialog();

  const handleClick = () => {
    onOpenChange(true);
  };

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      onClick: handleClick,
    });
  }

  return (
    <button onClick={handleClick} className="alert-dialog-trigger">
      {children}
    </button>
  );
};

// Content component (Modal wrapper)
const AlertDialogContent: React.FC<Readonly<AlertDialogContentProps>> = ({
  children,
  className = '',
}) => {
  const { open, onOpenChange } = useAlertDialog();

  return (
    <Modal
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      centered
      destroyOnHidden
      className={`alert-dialog-content ${className}`}
      styles={{
        body: { padding: 0 },
        content: { padding: 0 },
      }}
      closeIcon={null}
      maskClosable={false}
    >
      <div className="alert-dialog-inner">{children}</div>
    </Modal>
  );
};

// Header component
const AlertDialogHeader: React.FC<Readonly<AlertDialogHeaderProps>> = ({
  children,
  className = '',
}) => {
  return <div className={`alert-dialog-header ${className}`}>{children}</div>;
};

// Title component
const AlertDialogTitle: React.FC<Readonly<AlertDialogTitleProps>> = ({
  children,
  className = '',
}) => {
  return <h2 className={`alert-dialog-title ${className}`}>{children}</h2>;
};

// Description component
const AlertDialogDescription: React.FC<Readonly<AlertDialogDescriptionProps>> = ({
  children,
  className = '',
}) => {
  return <p className={`alert-dialog-description ${className}`}>{children}</p>;
};

// Footer component
const AlertDialogFooter: React.FC<Readonly<AlertDialogFooterProps>> = ({
  children,
  className = '',
}) => {
  return <div className={`alert-dialog-footer ${className}`}>{children}</div>;
};

// Action button component
const AlertDialogAction: React.FC<Readonly<AlertDialogActionProps>> = ({
  children,
  onClick,
  className = '',
}) => {
  const { onOpenChange } = useAlertDialog();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    onOpenChange(false);
  };

  return (
    <button className={`alert-dialog-action ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

// Cancel button component
const AlertDialogCancel: React.FC<Readonly<AlertDialogCancelProps>> = ({
  children,
  onClick,
  className = '',
}) => {
  const { onOpenChange } = useAlertDialog();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    onOpenChange(false);
  };

  return (
    <button className={`alert-dialog-cancel ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

// Create the compound component with namespace pattern
const AlertDialog = AlertDialogRoot as typeof AlertDialogRoot & {
  Root: typeof AlertDialogRoot;
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Header: typeof AlertDialogHeader;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Footer: typeof AlertDialogFooter;
  Action: typeof AlertDialogAction;
  Cancel: typeof AlertDialogCancel;
};

// Assign the compound components
AlertDialog.Root = AlertDialogRoot;
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Header = AlertDialogHeader;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Action = AlertDialogAction;
AlertDialog.Cancel = AlertDialogCancel;

// Export only the main component
export { AlertDialog };
