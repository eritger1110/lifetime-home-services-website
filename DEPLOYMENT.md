# Deployment Guide - Lifetime Home Services Website

This guide will help you set up complete ownership of your website with GitHub and Netlify.

## 🎯 Overview

You'll have complete control over:
- **Source Code**: Stored in your GitHub account
- **Hosting**: Managed through your Netlify account  
- **Domain**: Connected to your existing domain
- **Updates**: Easy to make or delegate to developers

## 📋 Prerequisites

1. **GitHub Account**: Create at https://github.com (free)
2. **Netlify Account**: Create at https://netlify.com (free tier available)
3. **Your Domain**: Access to DNS settings for your current domain

## 🚀 Step-by-Step Setup

### STEP 1: Create GitHub Repository

1. **Log into GitHub**
   - Go to https://github.com
   - Sign in to your account

2. **Create New Repository**
   - Click "New" or "+" → "New repository"
   - Repository name: `lifetime-home-services-website`
   - Description: "Professional website for Lifetime Home Services"
   - Set to **Public** (or Private if you prefer)
   - ✅ Check "Add a README file"
   - Click "Create repository"

3. **Upload Website Files**
   - Click "uploading an existing file"
   - Upload all files from your website project
   - Or use GitHub Desktop for easier management

### STEP 2: Set Up Netlify Hosting

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with your email or GitHub account

2. **Connect GitHub Repository**
   - Click "New site from Git"
   - Choose "GitHub"
   - Authorize Netlify to access your repositories
   - Select your `lifetime-home-services-website` repository

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy Site**
   - Click "Deploy site"
   - Wait for deployment to complete
   - You'll get a random URL like `amazing-site-123456.netlify.app`

### STEP 3: Connect Your Custom Domain

1. **In Netlify Dashboard**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `lifetimehomeservices.com`)

2. **Update DNS Settings**
   - In your domain registrar (GoDaddy, Namecheap, etc.)
   - Update DNS records as shown in Netlify
   - Usually involves changing A records or CNAME

3. **Enable HTTPS**
   - Netlify will automatically provision SSL certificate
   - Your site will be secure with https://

## 🔄 Making Updates

### Option 1: GitHub Web Interface (Easiest)
1. Go to your GitHub repository
2. Navigate to the file you want to edit
3. Click the pencil icon to edit
4. Make your changes
5. Scroll down and click "Commit changes"
6. Netlify automatically deploys the update

### Option 2: Local Development
1. Clone repository to your computer
2. Make changes locally
3. Test with `npm run dev`
4. Push changes to GitHub
5. Netlify automatically deploys

### Option 3: Delegate to Developer
1. Add developer as collaborator on GitHub
2. They can make changes and push updates
3. You maintain ownership and control

## 👥 Managing Access

### Adding Developers
**GitHub Repository:**
- Settings → Manage access → Invite a collaborator
- Give them "Write" access to make changes

**Netlify Site:**
- Site settings → Team management
- Add team members with appropriate permissions

### Removing Access
- Simply remove them from GitHub repository
- Remove from Netlify team if added there

## 🛠 Common Tasks

### Updating Content
**Most content is in**: `src/App.jsx`
- Service descriptions
- Contact information
- Testimonials
- Coverage areas

### Updating Images
**Images are in**: `src/assets/`
- Replace existing images with same filename
- Or add new images and update references in code

### Updating Styles
**Styling is in**: `src/App.css`
- Colors and branding
- Layout adjustments
- Mobile responsiveness

### Adding New Pages
1. Add new component in `src/App.jsx`
2. Update navigation menus
3. Test locally before deploying

## 🔧 Technical Details

### Build Process
```bash
npm install    # Install dependencies
npm run build  # Create production build
```

### Local Development
```bash
npm run dev    # Start development server
# Open http://localhost:3000
```

### File Structure
```
src/
├── App.jsx      # Main application (most content here)
├── App.css      # All styling
├── main.jsx     # Application entry point
└── assets/      # Images and files
```

## 🆘 Troubleshooting

### Build Fails
1. Check for syntax errors in code
2. Ensure all images are properly imported
3. Check Netlify build logs for specific errors

### Site Not Updating
1. Check if changes were committed to GitHub
2. Check Netlify deploy status
3. Clear browser cache

### Domain Issues
1. Verify DNS settings with your registrar
2. Allow 24-48 hours for DNS propagation
3. Check Netlify domain settings

## 📞 Support Resources

### Documentation
- **GitHub**: https://docs.github.com
- **Netlify**: https://docs.netlify.com
- **React**: https://react.dev

### Getting Help
1. Check GitHub repository issues
2. Netlify support documentation
3. Contact your developer for code changes

## 🔐 Ownership Checklist

✅ **GitHub Account**: You own the source code
✅ **Netlify Account**: You control the hosting
✅ **Domain Settings**: You manage DNS
✅ **Access Control**: You decide who can make changes
✅ **Backup**: Code is safely stored in GitHub
✅ **Updates**: Multiple ways to make changes
✅ **Handoff Ready**: Easy to transfer to new developers

## 💡 Pro Tips

1. **Regular Backups**: GitHub automatically backs up your code
2. **Testing**: Always test changes locally first
3. **Documentation**: Keep this guide handy for reference
4. **Access Management**: Regularly review who has access
5. **Domain Renewal**: Keep your domain registration current

---

**You now have complete ownership and control of your website!**

Any developer can work with this setup, and you can easily change hosting providers or developers while maintaining full control of your website and domain.

