import { useState, useCallback } from 'react';

import { MenuIcon } from '~/components/icons';

import {
  ActionButtons,
  Logo,
  MobileMenuButton,
  NavigationMenu,
} from '~/components/Header';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="w-full bg-white" role="banner">
      {/* Mobile Layout (320px - 767px) */}
      <div className="md:hidden">
        <div className="px-4 py-2">
          <div className="bg-neutral-95 rounded-xs px-3 py-1">
            <div className="flex items-center justify-between">
              <Logo />
              <MobileMenuButton
                onClick={toggleMobileMenu}
                isOpen={isMobileMenuOpen}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div id="mobile-navigation" className="px-4 pb-4 bg-white shadow-md">
            <div className="bg-neutral-95 rounded-xs p-4 space-y-2">
              <NavigationMenu isMobile />
              <div className="pt-4 space-y-2">
                <ActionButtons variant="mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (768px - 1023px) */}
      <div className="hidden md:block lg:hidden">
        <div className="px-8 py-4">
          <div className="bg-neutral-95 rounded-sm px-4 py-3">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center gap-2">
                <ActionButtons variant="tablet" />
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
        <div className="max-[1150px]:px-[20px] max-[1280px]:px-[70px]  xl:px-[156px] py-4">
          <div className="bg-neutral-95 rounded-md px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <Logo />
              </div>

              {/* Desktop Navigation Menu */}
              <NavigationMenu className="flex items-center gap-2 flex-1 justify-center" />

              {/* Desktop Action Buttons */}
              <ActionButtons variant="desktop" className="flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
