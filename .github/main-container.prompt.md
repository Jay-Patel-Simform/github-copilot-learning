Implement responsive container layouts using the following specifications:

## Container Requirements
- Desktop (≥1200px): Max-width of 1128px with centered content
- Tablet (≥768px): Max-width of 680px with centered content  
- Mobile (<375px): Max-width of 340px with centered content

## Implementation Details
1. Create a shared container component/class that:
   - Maintains consistent horizontal padding across breakpoints
   - Centers content within the viewport using auto margins
   - Adapts fluidly between specified breakpoints
   - Uses relative units where possible for better scaling

2. Integration Guidelines
   - Remove existing padding from Header and HeroSection components
   - Apply the container component/class to maintain consistent spacing
   - Ensure smooth transitions between breakpoints
   - Test responsiveness across target device sizes

## Technical Notes
- Use modern CSS practices (CSS Grid/Flexbox)
- Implement breakpoints using industry-standard media queries
- Follow mobile-first approach for CSS implementation
- Match provided Figma design specifications exactly
- Validate layout behavior on actual devices
- We are using Tailwind CSS for styling, so leverage its utility classes for responsive design.

Include automated tests to verify container behavior across breakpoints.