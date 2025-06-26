import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('buttons', 'routes/buttons.tsx'),
  route('animations', 'routes/animations.tsx'),
  route('masonry-grid', 'routes/MasonryGrid/index.tsx'),
] satisfies RouteConfig;
