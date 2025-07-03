Create a new Button component or update the existing one at `app/components/ui/button.tsx` following the design specifications from the provided Figma file. The implementation should:


- Match all button variants and states from the Figma design (https://www.figma.com/design/SOOB5xE3Jk0qq6bNYahL55/SaasAble-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=3647-93184&t=3ZyonLy20KD6E1bv-4)
- Include hover, focus, active, and disabled states
- Maintain the following button types:
  - Filled
  - Outlined
  - Text
  - Elevated

- Use color tokens and typography styles defined in `app/app.css`
- Support size variants (sm, md, lg)
- Implement proper spacing and padding according to the design system
- Ensure accessibility features (ARIA attributes, keyboard navigation)
- Include loading states with spinners where applicable
- Support left and right icons/elements
- Maintain responsive behavior across screen sizes
- You will find box-shadow from the figma design if you not able find box-shadow in the `app/app.css` file, you can add it in the `app/app.css` file.

The component should be fully typed with TypeScript and integrate with existing project styles and theme configuration.
- Do not fix linting errors or warnings in the existing codebase.