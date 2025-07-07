import { Button } from '~/components/ui/button';

import { LanguageSelector } from '~/components/Header';

interface ActionButtonsProps {
  className?: string;
  variant?: 'mobile' | 'tablet' | 'desktop';
}

export const ActionButtons = ({
  className = '',
  variant = 'mobile',
}: ActionButtonsProps) => {
  const isTablet = variant === 'tablet';
  const isMobile = variant === 'mobile';

  return (
    <div className={`flex items-center gap-3  ${className}`}>
      <LanguageSelector
        size={variant === 'desktop' ? 'sm' : 'md'}
        className={isMobile ? 'w-full' : ''}
      />
      <Button
        variant="filled"
        size="sm"
        className={`transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] ${isMobile ? 'w-full' : ''} ${isTablet ? 'px-6 py-2.5' : ''}`}
      >
        Get Started
      </Button>
    </div>
  );
};
