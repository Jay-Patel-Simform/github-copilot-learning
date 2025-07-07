import { DownArrowIcon } from '~/components/icons';

// Types
interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface NavigationMenuProps {
  className?: string;
  isMobile?: boolean;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Overview', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resource', href: '/resources', hasDropdown: true },
  { label: 'Help', href: '/help' },
];

export const NavigationMenu = ({
  className = '',
  isMobile = false,
}: NavigationMenuProps) => (
  <nav
    className={className}
    role="navigation"
    aria-label={isMobile ? 'Mobile navigation' : 'Main navigation'}
  >
    {NAVIGATION_ITEMS.map((item, index) => (
      <a
        key={item.label}
        href={item.href}
        className={`flex items-center ${isMobile ? 'justify-between py-3 px-4' : 'gap-1.5 px-6 py-3'} text-sm font-medium text-foreground hover:bg-primary/8 focus:bg-primary/8 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xs transition-all duration-200 ${isMobile ? 'min-h-[44px]' : ''}`}
        role="menuitem"
        style={isMobile ? { animationDelay: `${index * 50}ms` } : undefined}
      >
        {item.label}
        {item.hasDropdown && <DownArrowIcon />}
      </a>
    ))}
  </nav>
);
