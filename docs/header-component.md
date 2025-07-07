# Responsive Header Navigation Component

A fully responsive header navigation bar built according to the SaasAble design system specifications from Figma.

## Features

### Responsive Design
- **Mobile (320px - 767px)**: Collapsible hamburger menu with full-width dropdown
- **Tablet (768px - 1023px)**: Semi-expanded navigation with main actions visible
- **Desktop (1024px+)**: Full horizontal navigation with all menu items visible

### Accessibility
- WCAG 2.1 AA compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- Touch-friendly tap targets (min 44px on mobile)
- Screen reader friendly

### Interactive Elements
- Smooth hover/focus states with subtle scaling effects
- Active state indicators with underline animations (desktop)
- Animated mobile menu dropdown with staggered item animations
- Proper focus management and outline styles

### Technical Implementation
- Mobile-first responsive approach
- CSS Grid/Flexbox for layout
- Smooth transitions and animations
- Semantic HTML elements (`<nav>`, `<header>`)
- TypeScript for type safety

## Usage

```tsx
import Header from '~/components/header';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        {/* Your page content */}
      </main>
    </>
  );
}
```

## Customization

The header uses the SaasAble design system tokens from `app.css`:

- Colors: `--color-primary`, `--color-neutral-95`, etc.
- Spacing: `--spacing-*` variables
- Typography: Font families and responsive sizing
- Border radius: `--radius-*` variables

To modify navigation items, update the `navigationItems` array in the component:

```tsx
const navigationItems = [
  { label: 'Overview', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resource', href: '/resources', hasDropdown: true },
  { label: 'Help', href: '/help' },
];
```

## Breakpoints

- Mobile: `md:hidden` (< 768px)
- Tablet: `hidden md:block lg:hidden` (768px - 1023px)
- Desktop: `hidden lg:block` (≥ 1024px)

## Performance

- Optimized animations using CSS transforms
- Minimal layout shifts during loading
- Efficient hover/focus states
- No external dependencies beyond existing design system
