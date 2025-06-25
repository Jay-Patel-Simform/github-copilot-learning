# React 19 with Ant Design UI Components

A modern, bulletproof React 19 application featuring custom Ant Design components, with a focus on beautiful gradient UI elements and responsive design.

## Features

- ⚛️ React 19 with modern best practices
- 🦾 TypeScript for type safety
- 🎨 Ant Design v5 for UI components
- 🌈 Custom Gradient Button components
- 📱 Responsive layouts for all device sizes
- � Clean project structure following bulletproof-react patterns
- 🧩 Component-driven architecture
- 🛠️ ESLint and Prettier for code quality
- � Hot Module Replacement (HMR)
- 🧪 Built with performance in mind

## Project Structure

The project follows the bulletproof-react architecture pattern:

```
app/
  ├── app.css                 # Global styles
  ├── root.tsx                # Root component
  ├── routes.ts               # Application routes
  ├── assets/                 # Static assets
  ├── components/             # Reusable components
  │   ├── common/             # Common UI components
  │   │   └── GradientButton/ # Custom gradient button component
  │   └── layout/             # Layout components like Header
  ├── features/               # Feature-based modules
  ├── hooks/                  # Custom React hooks
  ├── lib/                    # Third-party library configurations
  ├── providers/              # Context providers
  │   └── ThemeProvider.tsx   # Ant Design theme provider
  ├── routes/                 # Route-specific components
  ├── services/               # API services and external integrations
  ├── stores/                 # State management
  ├── types/                  # TypeScript type definitions
  └── utils/                  # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Main Components

### Gradient Button

The `GradientButton` component is a custom implementation built on top of Ant Design's Button component, featuring beautiful gradient backgrounds with hover animations.

```tsx
import { GradientButton } from './components/common/GradientButton';

// Usage
<GradientButton status="primary">Primary Button</GradientButton>
<GradientButton status="success">Success Button</GradientButton>
<GradientButton status="error">Error Button</GradientButton>
<GradientButton status="warning">Warning Button</GradientButton>
<GradientButton status="info">Info Button</GradientButton>
```

#### Features

- Five different status variants: primary, success, error, warning, info
- Smooth gradient animation on hover
- Responsive design
- Customizable sizes (small, default, large)
- Support for all Ant Design Button props except `type`
- Dark mode compatibility

### Responsive Header

The application includes a fully responsive header component that adapts to different screen sizes:

- Desktop: Standard horizontal menu
- Tablet: Condensed layout with horizontal menu
- Mobile: Hamburger menu with drawer navigation

## Code Quality and Development

### Code Formatting

Format code with Prettier:

```bash
npm run format
```

Check for formatting issues:

```bash
npm run format:check
```

### Linting

Lint the codebase:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Deployment

The application is built with React Router, which provides server-side rendering capabilities. To deploy:

1. Create a production build: `npm run build`
2. Deploy the build output:
   ```
   ├── package.json
   ├── package-lock.json
   └── build/
       ├── client/    # Static assets
       └── server/    # Server-side code
   ```
3. Start the server: `npm run start`

## Docker Deployment

A Dockerfile is included for containerized deployment:

```bash
# Build the Docker image
docker build -t react-antd-app .

# Run the container
docker run -p 3000:3000 react-antd-app
```

## Styling Approach

This project uses standard CSS files with a component-based approach:

- Component-specific styles are co-located with the component
- Global styles are defined in `app.css`
- No CSS-in-JS or CSS preprocessors are used

---

Built with ❤️ using React 19 and Ant Design.
