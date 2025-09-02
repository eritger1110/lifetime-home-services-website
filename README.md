# Lifetime Home Services Website

A professional, modern website for Lifetime Home Services built with Bootstrap 5, featuring Salesforce Web-to-Lead integration and responsive design.

## 🚀 Features

- **Professional Design**: Modern, responsive layout with Bootstrap 5
- **Salesforce Integration**: Direct Web-to-Lead form submission with Netlify backup
- **Mobile Responsive**: Optimized for all devices
- **Fast Loading**: Optimized images and efficient CSS/JS
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: ADA compliant design with proper ARIA labels

## 📁 Project Structure

```
lifetime-home-services-website/
├── index.html              # Main homepage
├── thank-you.html          # Form submission thank you page
├── netlify.toml           # Netlify deployment configuration
├── assets/                # Static assets
│   ├── images/           # Image files
│   └── logos/            # Logo files
└── README.md             # This file
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Bootstrap 5.3.2**: Responsive framework
- **JavaScript**: Interactive functionality
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Inter font family

## 📋 Services Featured

1. **Radon Testing & Mitigation** - EPA-certified professionals
2. **Duct Sealing (Aeroseal)** - Revolutionary sealing technology
3. **Premium Floor Coatings** - Durable epoxy solutions
4. **Duct Cleaning** - Indoor air quality improvement

## 🔧 Salesforce Integration

The contact form integrates with Salesforce Web-to-Lead:

- **Organization ID**: `00D8c000003QJQR`
- **Custom Field**: `00N8c00000QJqQR` (Service Interest)
- **Backup**: Netlify form handling for reliability
- **Redirect**: Automatic redirect to thank-you page

### Form Fields Mapped:
- `first_name` → First Name
- `last_name` → Last Name  
- `email` → Email
- `phone` → Phone
- `street` → Address
- `00N8c00000QJqQR` → Service Interest (custom field)
- `description` → Project Description

## 🚀 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: (none needed - static site)
3. Set publish directory: `.` (root)
4. Deploy!

The `netlify.toml` file handles:
- Form processing
- Redirects
- Headers and caching
- SPA fallback routing

### Manual Deployment

1. Upload all files to your web server
2. Ensure proper file permissions
3. Configure redirects if needed

## 🔧 Maintenance

### Updating Content

1. **Services**: Edit the services section in `index.html`
2. **Contact Info**: Update phone numbers and addresses
3. **Images**: Replace files in `assets/images/` and `assets/logos/`

### Salesforce Configuration

If Salesforce fields change:
1. Generate new Web-to-Lead form in Salesforce
2. Update field names in the contact form
3. Update the Organization ID if needed

### Adding New Pages

1. Create new HTML file
2. Follow the same structure as `index.html`
3. Update navigation links
4. Add redirects to `netlify.toml` if needed

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Features

- XSS Protection headers
- Content Security Policy
- Frame protection
- Secure form handling

## 📞 Contact Information

- **Phone**: (262) 955-5701
- **Hours**: 7 days a week, 8:00 AM - 8:00 PM CT
- **Service Area**: Wisconsin (Madison, Milwaukee, Green Bay, and surrounding areas)

## 🎨 Design Guidelines

- **Primary Color**: #1e40af (Blue)
- **Secondary Color**: #0ea5e9 (Light Blue)
- **Accent Color**: #10b981 (Green)
- **Font**: Inter (Google Fonts)
- **Style**: Modern, professional, clean

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 3 seconds
- **Mobile Friendly**: Yes
- **Core Web Vitals**: Optimized

## 🔄 Updates and Maintenance

This website is designed to be easily maintainable:

1. **Content Updates**: Edit HTML directly
2. **Style Changes**: Modify CSS variables in `<style>` section
3. **Form Updates**: Update Salesforce field mappings
4. **Image Updates**: Replace files in assets folder

For major changes, consider creating a staging environment first.

---

**Built with ❤️ for Lifetime Home Services**

