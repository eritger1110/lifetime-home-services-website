# Developer Handoff Guide

## 🎯 Quick Start for New Developers

This website is built with **React + Vite** and hosted on **Netlify**. Here's everything you need to know to start working on it immediately.

## ⚡ Immediate Setup

```bash
# 1. Clone the repository
git clone [repository-url]
cd lifetime-launch-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

## 📁 Key Files to Know

### `src/App.jsx` - Main Application File
**This is where 90% of content lives:**
- All page components
- Service information
- Contact details
- Navigation structure
- Content text

### `src/App.css` - All Styling
**Complete styling for the entire site:**
- Colors and branding
- Layout and responsive design
- Component-specific styles
- Mobile optimizations

### `src/assets/` - Images and Media
**All website images:**
- Service photos
- Logo files
- Background images
- Icons and graphics

## 🎨 Design System

### Colors
```css
Primary Blue: #1e40af
Secondary Teal: #10b981
Background: #f8fafc
Text: #1f2937
```

### Typography
- Headers: Bold, professional
- Body: Clean, readable
- Mobile: Responsive sizing

### Layout
- Desktop: Multi-column layouts
- Mobile: Single-column, stacked
- Navigation: Dropdown menus

## 🔧 Common Development Tasks

### Adding New Content
1. **Service Information**: Edit service objects in `App.jsx`
2. **Contact Info**: Update phone numbers and addresses
3. **Testimonials**: Add to testimonials array
4. **Coverage Areas**: Modify state-specific content

### Styling Changes
1. **Colors**: Update CSS variables in `App.css`
2. **Layout**: Modify component-specific styles
3. **Mobile**: Use media queries for responsive design
4. **Animations**: CSS transitions and transforms

### Adding New Images
```javascript
// 1. Add image to src/assets/
// 2. Import in App.jsx
import newImage from './assets/new-image.jpg';

// 3. Use in component
<img src={newImage} alt="Description" />
```

## 🚀 Deployment Process

### Automatic Deployment
- **Push to GitHub** → **Netlify automatically deploys**
- No manual deployment needed
- Build process: `npm run build`
- Deploy time: ~2-3 minutes

### Testing Before Deploy
```bash
# Test locally
npm run dev

# Build and test production version
npm run build
npm run preview
```

## 📱 Responsive Design

### Breakpoints
```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Key Responsive Features
- Mobile navigation (hamburger menu)
- Stacked layouts on mobile
- Touch-friendly buttons
- Optimized images

## 🎯 Business Context

### Services Offered
1. **FREE Radon Testing** (WI, MN, CO)
2. **Radon Mitigation** (All States)
3. **Concrete Coatings** (WI Only)
4. **HVAC & AeroSeal** (WI & IL)
5. **Handyman Services** (WI Only)
6. **Electrical Services** (WI Only)

### Contact Information
- **Primary**: (262) 955-5701
- **Toll-free**: (833) 941-6888
- **Service Areas**: WI, IL, MN, CO

### Brand Guidelines
- Professional, trustworthy tone
- Focus on quality and reliability
- EPA certification emphasis
- Family-owned business values

## 🔍 Code Structure

### Component Organization
```javascript
// Main App component contains:
- Header/Navigation
- Homepage content
- Service pages
- State-specific pages
- Footer
- Contact modals
```

### State Management
- No complex state management
- Simple React hooks for modals
- Form handling with controlled components

### Routing
- Hash-based routing (`#radon`, `#concrete`, etc.)
- Smooth scrolling navigation
- Mobile-friendly navigation

## 🛠 Development Tools

### Required
- **Node.js** (v16+)
- **npm** or **yarn**
- **Git**
- **Code editor** (VS Code recommended)

### Helpful Extensions (VS Code)
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier - Code formatter
- GitLens

## 🐛 Common Issues & Solutions

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Image Issues
- Ensure images are in `src/assets/`
- Check import paths are correct
- Optimize large images for web

### Styling Issues
- Check CSS syntax
- Verify class names match
- Test responsive breakpoints

### Deployment Issues
- Check Netlify build logs
- Verify build command: `npm run build`
- Ensure all dependencies are in package.json

## 📋 Pre-Launch Checklist

### Content Review
- [ ] All service information accurate
- [ ] Contact details updated
- [ ] Coverage areas correct
- [ ] Testimonials current

### Technical Review
- [ ] All pages load correctly
- [ ] Mobile responsive design works
- [ ] Forms submit properly
- [ ] Images optimized and loading
- [ ] SEO meta tags in place

### Performance
- [ ] Fast loading times
- [ ] Optimized images
- [ ] Clean code structure
- [ ] No console errors

## 🤝 Handoff Process

### What You're Getting
1. **Complete source code** in GitHub
2. **Live website** on Netlify
3. **Full documentation** (this guide + README)
4. **Deployment access** (if needed)

### What You Need to Know
1. **React fundamentals** (components, JSX, CSS)
2. **Git/GitHub** for version control
3. **Basic command line** for development
4. **Netlify dashboard** for deployment management

### Support Resources
1. **Documentation**: README.md and this file
2. **Code comments**: Throughout App.jsx
3. **React docs**: https://react.dev
4. **Netlify docs**: https://docs.netlify.com

---

**Ready to start developing! The codebase is clean, well-documented, and ready for your contributions.**

