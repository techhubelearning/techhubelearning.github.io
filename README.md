# Sravani V - Premium Portfolio Website

## 📌 Overview

A modern, responsive portfolio website built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. This portfolio showcases professional skills, experience, projects, and teaching impact with a beautiful dark theme, smooth animations, and glassmorphism design.

## 🎯 Features

✨ **Modern Design**
- Dark mode by default with blue, cyan, and purple gradients
- Glassmorphism UI components
- Fully responsive and mobile-friendly
- Professional and clean interface

🎬 **Animations & Interactions**
- Smooth fade, slide, and scale animations with Framer Motion
- Floating profile image
- Typing effect on hero section
- Animated counters and progress bars
- Scroll reveal animations
- Custom cursor glow effects
- Particle background animation

📱 **Responsive Sections**
1. **Navbar** - Sticky navigation with dark/light mode toggle and mobile menu
2. **Hero** - Professional introduction with typing animation
3. **About** - Summary and highlights
4. **Experience** - Timeline layout with industry experience and mentoring
5. **Skills** - Categorized skills with proficiency levels
6. **Projects** - Featured project showcase with GitHub and demo links
7. **Teaching** - Statistics, subjects taught, and teaching methodology
8. **Certifications** - Professional certifications and achievements
9. **Contact** - Contact form and social media links
10. **Footer** - Social icons, quick links, and copyright

⚙️ **Technical Features**
- React Router for smooth navigation
- Reusable component architecture
- Clean, well-commented code
- SEO-friendly meta tags
- Performance optimized with Vite
- 404 error page
- Scroll progress indicator

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: React Icons, Lucide React
- **Utilities**: React CountUp, React Intersection Observer

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/techhubelearning/techhubelearning.github.io.git
   cd techhubelearning.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (Optional)**
   - Update `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` in `src/data/constants.js`
   - Get these from [EmailJS](https://www.emailjs.com/)

4. **Add profile assets**
   - Place your profile photo at `public/profile.jpg`
   - Add resume at `public/resume.pdf`
   - Add favicon at `public/favicon.ico`

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This creates an optimized build in the `dist/` directory

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📤 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     base: '/techhubelearning.github.io/',
     // ... other config
   })
   ```

2. **Build and deploy**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages in repository settings**
   - Go to Settings → Pages
   - Select `gh-pages` branch as source

### Deploy to Vercel

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Import project in Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project" and import your GitHub repository
   - Vercel will automatically detect Vite and configure it
   - Click "Deploy"

3. **Set environment variables (if needed)**
   - Go to Settings → Environment Variables
   - Add any sensitive configurations

### Deploy to Netlify

1. **Connect GitHub repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Netlify will automatically build and deploy on every push

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   └── ParticleBackground.jsx
├── data/               # Data and constants
│   ├── portfolio.js    # Portfolio content
│   └── constants.js    # App constants
├── pages/              # Page components
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Teaching.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles

public/
├── profile.jpg         # Profile photo
├── resume.pdf          # Resume file
└── favicon.ico         # Favicon
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolio.js` to customize:
- Profile information
- Experience details
- Projects and skills
- Teaching statistics
- Certifications

### Modify Styling

- **Colors**: Update gradients in `tailwind.config.js` and CSS classes
- **Fonts**: Modify Tailwind theme in `tailwind.config.js`
- **Animations**: Adjust Framer Motion variants in components

### Add New Sections

1. Create a new component in `src/pages/`
2. Import and add it to `App.jsx`
3. Add navigation link in `src/data/constants.js`

## 🔍 SEO Optimization

- Meta tags configured in `index.html`
- Semantic HTML structure
- Open Graph tags for social sharing
- Mobile viewport settings
- Fast loading with Vite optimization

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Build Issues
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Ensure images are in the `public/` directory
- Use relative paths starting with `/`
- Check file names match exactly (case-sensitive)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: techhubelearning@gmail.com
- **Phone**: +91 8971940473
- **GitHub**: [techhubelearning](https://github.com/techhubelearning)
- **LinkedIn**: [Sravani V](https://www.linkedin.com/in/shravani-v-70b403192)

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- Tailwind CSS for beautiful styling
- Vite for fast development experience
- React for powerful UI components

---

**Made with ❤️ by Sravani V**
