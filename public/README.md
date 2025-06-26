# Promise Fabricators & Welding Website

A modern, responsive website for Promise Fabricators & Welding, showcasing their metalwork services and portfolio.

## Features

- Clean, modern design with industrial aesthetics
- Mobile-first responsive layout
- Pure HTML5 and CSS3 implementation (no JavaScript)
- Optimized for performance and SEO
- CSS-only filtering system for the project gallery
- Contact form with service selection
- WhatsApp integration for quick communication

## Pages

1. **Home Page**
   - Hero section with call-to-action
   - Featured services overview
   - Client testimonial preview
   - Contact banner

2. **Services Page**
   - Detailed service descriptions
   - Service-specific galleries
   - Call-to-action sections

3. **Gallery Page**
   - CSS-only category filtering
   - Responsive image grid
   - Image hover effects
   - Project descriptions

4. **Testimonials Page**
   - Client feedback cards
   - Project-specific testimonials
   - Location information

5. **Contact Page**
   - Contact form
   - Business hours
   - Multiple contact methods
   - Google Maps integration

## Technical Details

### CSS Architecture
- CSS Custom Properties (variables) for consistent theming
- Mobile-first media queries
- Flexbox and Grid layouts
- BEM-inspired class naming
- Modular CSS files for each page

### Performance Optimizations
- Lazy loading for images
- Optimized font loading
- Minified CSS
- Responsive images

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers

## Setup Instructions

1. Clone the repository
2. Replace placeholder images in the `assets/images` directory
3. Update contact information and Google Maps embed code
4. Update WhatsApp number in contact buttons
5. Deploy to your web hosting service

## Customization

### Colors
The color scheme can be modified in `css/style.css` by updating the CSS variables:
```css
:root {
    --color-primary: #2c5282;    /* Steel blue */
    --color-secondary: #4a5568;  /* Dark gray */
    --color-accent: #718096;     /* Metallic gray */
    /* ... other color variables ... */
}
```

### Images
- Replace hero images in each section
- Update gallery images with your project photos
- Maintain the same image dimensions for consistency

### Content
- Update text content in HTML files
- Modify service descriptions
- Add or remove testimonials
- Update contact information

## File Structure

```
promise-fabricators/
├── index.html
├── services.html
├── gallery.html
├── testimonials.html
├── contact.html
├── css/
│   ├── style.css
│   ├── home.css
│   ├── services.css
│   ├── gallery.css
│   ├── testimonials.css
│   └── contact.css
└── assets/
    └── images/
        ├── hero-bg.jpg
        ├── services-hero.jpg
        ├── gallery/
        └── icons/
```

## Credits

- Fonts: [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat)
- Icons: [Your Icon Source]
- Images: [Your Image Sources]

## License

[Your License]

## Contact

For support or inquiries, please contact:
- Email: [Your Email]
- Phone: [Your Phone] 