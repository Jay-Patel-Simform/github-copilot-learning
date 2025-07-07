import React, { useState } from 'react';
import { Button } from '~/components/ui/button';

// Menu Icon component for hamburger menu
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200"
  >
    <path
      d={isOpen ? 'M18 6L6 18M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Down arrow icon for dropdowns
const DownArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Logo component matching Figma design
const Logo = () => (
  <div className="flex items-center gap-1.5 p-1">
    <div className="relative w-[19.59px] h-[21.27px] md:w-[22.21px] md:h-[24.11px] lg:w-[23.95px] lg:h-[26px]">
      {/* SaasAble logo mark */}
      <div className="absolute inset-0 bg-primary rounded-sm" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 md:w-[6.8px] md:h-[7.26px] lg:w-[7.33px] lg:h-[7.83px] bg-blue-600 rounded-full" />
    </div>
    <span className="font-bold text-primary text-[19.6px] md:text-[22.3px] lg:text-2xl leading-tight tracking-tight">
      SaasAble
    </span>
  </div>
);

// Navigation menu items
const navigationItems = [
  { label: 'Overview', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resource', href: '/resources', hasDropdown: true },
  { label: 'Help', href: '/help' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white" role="banner">
      {/* Mobile Layout (320px - 767px) */}
      <div className="md:hidden">
        <div className="px-4 py-2">
          <div className="bg-neutral-95 rounded-xs px-3 py-1">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-foreground hover:bg-primary/8 rounded-xs transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <MenuIcon isOpen={isMobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            id="mobile-navigation"
            className="px-4 pb-4 bg-white shadow-md"
            aria-label="Mobile navigation"
          >
            <div className="bg-neutral-95 rounded-xs p-4 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between py-3 px-4 text-sm font-medium text-foreground hover:bg-primary/8 focus:bg-primary/8 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xs transition-all duration-200 min-h-[44px]"
                  role="menuitem"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                  {item.hasDropdown && <DownArrowIcon />}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outlined"
                  size="sm"
                  className="w-full justify-center transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02]"
                >
                  ENG <DownArrowIcon />
                </Button>
                <Button
                  variant="filled"
                  size="sm"
                  className="w-full transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02]"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Tablet Layout (768px - 1023px) */}
      <div className="hidden md:block lg:hidden">
        <div className="px-8 py-4">
          <div className="bg-neutral-95 rounded-sm px-4 py-3">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center gap-2">
                <Button
                  variant="outlined"
                  size="sm"
                  className="h-10 px-5 transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02]"
                >
                  ENG <DownArrowIcon />
                </Button>
                <Button
                  variant="filled"
                  size="sm"
                  className="h-10 px-4 transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] hover:shadow-lg"
                >
                  Get Started
                </Button>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-foreground hover:bg-primary/8 rounded-xs transition-colors duration-200 ml-2"
                  aria-label="Open menu"
                  aria-expanded="false"
                >
                  <MenuIcon isOpen={false} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (1024px+) */}
      <div className="hidden lg:block">
        <div className="px-[156px] py-4">
          <div className="bg-neutral-95 rounded-md px-6 py-4">
            <div className="flex items-center">
              <Logo />

              {/* Desktop Navigation Menu */}
              <nav
                className="flex-1 flex justify-end items-center gap-2 pr-16"
                role="navigation"
                aria-label="Main navigation"
              >
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-1.5 px-6 py-3 text-sm font-medium text-foreground hover:bg-primary/8 focus:bg-primary/8 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xs transition-all duration-200 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full hover:after:left-0"
                    role="menuitem"
                  >
                    {item.label}
                    {item.hasDropdown && <DownArrowIcon />}
                  </a>
                ))}
              </nav>

              {/* Desktop Action Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outlined"
                  size="sm"
                  className="h-auto transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02]"
                >
                  ENG <DownArrowIcon />
                </Button>
                <Button
                  variant="filled"
                  size="sm"
                  className="transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] hover:shadow-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
