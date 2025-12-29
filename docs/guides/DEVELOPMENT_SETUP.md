# Development Setup Guide

## 🚀 Quick Start Guide for Developers

This guide will help you set up the development environment for Limitless Infotech Solution website.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**
- **Git** (latest version)
- **Code Editor** (VS Code recommended)

### Check Installed Versions

```bash
node --version    # Should be v16+
npm --version     # Should be v8+
git --version     # Any recent version
```

---

## 🛠️ Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the project
git clone <repository-url>

# Navigate to project directory
cd Redesigned
```

### Step 2: Install Dependencies

```bash
# Install all npm packages
npm install

# This will install:
# - React & React DOM
# - React Router DOM
# - Tailwind CSS
# - Framer Motion
# - React Icons
# - Swiper
# - Vite
# - All dev dependencies
```

**Installation time:** ~2-3 minutes (depending on internet speed)

### Step 3: Verify Installation

```bash
# Check if node_modules folder exists
ls node_modules

# Verify package.json
cat package.json
```

---

## 🏃 Running the Development Server

### Start Development Mode

```bash
npm run dev
```

**Expected Output:**

```
VITE v5.0.8  ready in 450 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

### Access the Application

Open your browser and navigate to:

- **Local:** http://localhost:5173
- **Network:** http://192.168.x.x:5173 (if --host flag used)

### Development Server Features

- ⚡ **Hot Module Replacement (HMR)** - Instant updates without refresh
- 🔄 **Auto-reload** - Changes reflect immediately
- 🐛 **Error overlay** - Clear error messages in browser
- 📦 **Fast builds** - Vite's optimized bundling

---

## 🏗️ Building for Production

### Create Production Build

```bash
npm run build
```

**What happens:**

1. Vite compiles and bundles all files
2. Tailwind purges unused CSS
3. Assets are optimized and minified
4. Source maps are generated
5. Output is saved to `dist/` folder

**Expected Output:**

```
vite v5.0.8 building for production...
✓ 1234 modules transformed.
dist/index.html                   0.50 kB
dist/assets/index-abc123.css     45.67 kB │ gzip: 12.34 kB
dist/assets/index-xyz789.js     234.56 kB │ gzip: 78.90 kB
✓ built in 4.56s
```

### Preview Production Build

```bash
npm run preview
```

This serves the `dist/` folder at http://localhost:4173

---

## 📁 Project Structure Overview

```
Redesigned/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components (routes)
│   ├── context/        # React Context (state management)
│   ├── data/           # Static data & content
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   ├── services/       # API services
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── docs/               # Documentation
├── dist/               # Production build (generated)
└── node_modules/       # Dependencies (generated)
```

---

## 🎨 Development Tools

### Recommended VS Code Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - Snippet shortcuts for React
2. **Tailwind CSS IntelliSense**
   - Autocomplete for Tailwind classes
   - Color previews
   - Linting

3. **ESLint**
   - JavaScript linting
   - Code quality checks

4. **Prettier**
   - Code formatting
   - Consistent style

5. **GitLens**
   - Git integration
   - Commit history

6. **Auto Rename Tag**
   - Automatically rename paired HTML/JSX tags

7. **Import Cost**
   - Display package size

### VS Code Settings (Recommended)

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## 🔧 Configuration Files

### vite.config.js

```javascript
// Vite configuration for React
// Handles dev server, build optimization, plugins
```

### tailwind.config.js

```javascript
// Tailwind CSS configuration
// Custom colors, fonts, spacing, animations
```

### postcss.config.js

```javascript
// PostCSS configuration
// Tailwind CSS and Autoprefixer
```

### package.json

```javascript
// Project dependencies and scripts
// npm run dev, build, preview, lint
```

---

## 🌐 Environment Variables

### Create .env File (Optional)

```bash
# Create .env in root directory
touch .env
```

### Example .env

```env
# API Configuration
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here

# Contact Information
VITE_CONTACT_EMAIL=Info@limitlessinfotech.com
VITE_CONTACT_PHONE=+917710909492

# Analytics
VITE_GA_ID=UA-XXXXXXXXX-X

# Feature Flags
VITE_ENABLE_CHATBOT=true
VITE_ENABLE_BLOG=true
```

### Accessing Environment Variables

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
```

**Important:**

- Prefix all variables with `VITE_`
- Add `.env` to `.gitignore`
- Never commit sensitive data

---

## 🎯 Development Workflow

### 1. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Edit files in `src/`
- Test in browser (http://localhost:5173)
- Check console for errors
- Verify responsive design

### 3. Test Your Changes

```bash
# Run development server
npm run dev

# Open in browser and test:
# - Functionality
# - Responsive design
# - Dark mode
# - Forms and validation
# - Links and navigation
```

### 4. Code Quality Check

```bash
# Run linter
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### 5. Build Test

```bash
# Create production build
npm run build

# Preview build
npm run preview

# Test production version
```

### 6. Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature description"

# Push to remote
git push origin feature/your-feature-name
```

---

## 🐛 Troubleshooting

### Common Issues

#### Issue 1: Port Already in Use

**Error:** `Port 5173 is already in use`

**Solution:**

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

#### Issue 2: Module Not Found

**Error:** `Cannot find module 'package-name'`

**Solution:**

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue 3: Tailwind Styles Not Working

**Error:** Styles not applying

**Solution:**

1. Check `tailwind.config.js` content paths
2. Ensure `@tailwind` directives in `index.css`
3. Restart dev server

```bash
# Stop server (Ctrl+C)
npm run dev
```

#### Issue 4: Build Fails

**Error:** Build errors

**Solution:**

```bash
# Clear cache
rm -rf node_modules/.vite
npm run dev
```

#### Issue 5: Git Issues

**Error:** Git conflicts

**Solution:**

```bash
# Stash changes
git stash

# Pull latest
git pull origin main

# Apply stash
git stash pop

# Resolve conflicts manually
```

---

## 📚 Useful Commands

### npm Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm install          # Install dependencies
npm update           # Update dependencies
npm outdated         # Check outdated packages
npm audit            # Security audit
npm audit fix        # Fix security issues
```

### Git Commands

```bash
git status                        # Check status
git branch                        # List branches
git checkout -b branch-name       # Create new branch
git add .                         # Stage all changes
git commit -m "message"           # Commit changes
git push origin branch-name       # Push to remote
git pull origin main              # Pull from main
git merge branch-name             # Merge branch
git log --oneline                 # View commit history
```

### Vite Commands

```bash
npm run dev -- --port 3000        # Custom port
npm run dev -- --host             # Expose to network
npm run dev -- --open             # Auto-open browser
npm run build -- --mode staging   # Custom build mode
```

---

## 🧪 Testing Checklist

Before committing changes, verify:

### Functionality

- [ ] All features work as expected
- [ ] No console errors
- [ ] Forms validate correctly
- [ ] Links navigate properly
- [ ] Buttons trigger correct actions

### Responsive Design

- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1920px+)

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Dark Mode

- [ ] Switches correctly
- [ ] No white flashes
- [ ] All colors readable
- [ ] Images display properly

### Performance

- [ ] Page loads quickly
- [ ] No unnecessary re-renders
- [ ] Images optimized
- [ ] Animations smooth

---

## 🚀 Next Steps

After setup is complete:

1. **Explore the codebase**
   - Review `src/components/`
   - Check `src/pages/`
   - Understand data structure in `src/data/`

2. **Read documentation**
   - PROJECT_DOCUMENTATION.md
   - THEME_GUIDE.md (if available)
   - UI_COMPONENTS.md (if available)

3. **Start developing**
   - Pick a task/feature
   - Create branch
   - Implement changes
   - Test thoroughly
   - Commit and push

4. **Join the team**
   - Ask questions
   - Share knowledge
   - Review code
   - Improve documentation

---

## 📞 Getting Help

### Resources

- **Documentation:** `/docs/` folder
- **Code Comments:** Throughout the codebase
- **README.md:** Project overview

### Contact

- **Email:** Info@limitlessinfotech.com
- **Phone:** +91 77109 09492

### Community

- GitHub Issues: Report bugs
- GitHub Discussions: Ask questions
- Pull Requests: Contribute code

---

## ✅ Setup Complete!

You're now ready to start developing! 🎉

Run this to get started:

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

Happy coding! 💻

---

**Document Version:** 1.0.0  
**Last Updated:** 2024  
**Maintained By:** Development Team
