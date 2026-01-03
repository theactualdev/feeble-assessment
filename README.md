# Feeble Assessment

A responsive landing page for Coup, an iMessage automation tool, featuring smooth animations and modern UI.

## Tech Stack

- **React 19.2.0** - UI library for building component-based interfaces
- **TypeScript 5.9.3** - Type-safe JavaScript for better development experience
- **Vite (Rolldown)** - Fast build tool and development server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework for rapid styling
- **ESLint** - Code linting and quality enforcement

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Implementation Notes

### Animations

- **Rise Animation**: Elements (clouds, birds) animate upward from below the viewport with fade-in effects using CSS keyframes
- **Diagonal Flight**: Birds fly diagonally across the screen with acceleration (ease-in timing) and automatic speed ramping via keyframe positioning
- **Fake Birds**: Overlay birds with linear timing create depth by fading out partway through the rise animation

### Responsive Design

- **Desktop (≥1024px)**: Full navigation menu with all links visible in navbar
- **Tablet/Mobile (<1024px)**: Hamburger menu with animated icon (transforms to X when open) and dropdown navigation

### CSS Architecture

- Custom keyframe animations defined in `index.css`
- Tailwind's arbitrary value syntax for custom animations: `animate-[keyframe-name_duration_easing_fill-mode]`
- Color palette and typography defined in Tailwind theme configuration using CSS custom properties

### Assumptions

- The project targets modern browsers with CSS animation and flexbox support
- SVG assets are provided and optimized for web use
- Mobile-first approach with progressive enhancement for larger screens
- Open Sans font is loaded via system or external CDN (not included in bundle)
- Animation performance is acceptable on mid-range devices

### Key Features

- Fully responsive layout from mobile (320px) to desktop (3840px+)
- Accessible hamburger menu with ARIA labels
- Smooth CSS animations with configurable easing curves
- Component-based architecture for maintainability
- TypeScript for type safety and better IDE support

## Project Structure

```
src/
├── assets/          # SVG images and icons
├── components/      # React components (Navbar, etc.)
├── App.tsx          # Main application component
├── App.css          # Component-specific styles
├── index.css        # Global styles and animations
└── main.tsx         # Application entry point
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
