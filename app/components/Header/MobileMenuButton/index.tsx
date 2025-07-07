import { MenuIcon } from '~/components/icons';

interface MobileMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const MobileMenuButton = ({
  onClick,
  isOpen,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-foreground hover:bg-primary/8 rounded-xs transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <MenuIcon isOpen={isOpen} />
    </button>
  );
};
