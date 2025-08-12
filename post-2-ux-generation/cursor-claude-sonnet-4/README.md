# MD Notes Landing Page

A professional, modern landing page for MD Notes - The SaaS platform for markdown note-taking.

## Features

- 🎨 **Modern Design**: Clean, professional layout with beautiful typography
- 📱 **Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Loading**: Lightweight and optimized for performance
- 🎭 **Interactive**: Smooth animations and hover effects
- ♿ **Accessible**: Built with accessibility best practices
- 🔧 **Professional**: Ready for production deployment

## Quick Start

### Option 1: Simple HTTP Server
```bash
npm start
```

### Option 2: Live Development Server
```bash
npm run dev
```

### Option 3: Open directly in browser
Simply open `index.html` in your web browser.

## Project Structure

```
mdnotes/
├── index.html          # Main landing page
├── styles.css          # Professional styling
├── script.js           # Interactive functionality
├── package.json        # Project configuration
└── README.md          # This file
```

## Design Highlights

### Hero Section
- Compelling headline with gradient text effect
- Clear value proposition and feature highlights
- Prominent call-to-action button
- Interactive code editor preview

### Visual Elements
- Modern glassmorphism header with backdrop blur
- Animated markdown editor mockup
- Smooth scroll effects and hover interactions
- Professional color scheme with CSS custom properties

### Technical Features
- CSS Grid and Flexbox for modern layouts
- CSS custom properties for consistent theming
- Intersection Observer API for scroll animations
- Keyboard navigation support
- Performance monitoring

## Development

### Validation
```bash
npm run validate
```

### Performance Testing
```bash
npm run lighthouse
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

The landing page uses CSS custom properties for easy theming. Key variables are defined in `:root` in `styles.css`:

```css
:root {
  --primary-color: #3b82f6;
  --text-primary: #1e293b;
  --background: #ffffff;
  /* ... more variables */
}
```

## Deployment

This is a static site that can be deployed to any web server or CDN:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a repository and enable Pages
- **Traditional hosting**: Upload files via FTP

## License

MIT License - feel free to use and modify for your projects.
