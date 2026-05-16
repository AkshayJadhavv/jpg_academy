# JBG Academy of Design — Premium Website

A full-featured, production-ready React + Tailwind CSS website for **JBG Academy of Design**, Baramati.

---

## 🚀 Quick Start

```bash
# 1. Extract the ZIP and enter the project folder
cd jbg-academy

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📁 Project Structure

```
jbg-academy/
├── public/
│   └── videos/
│       ├── jbg-hero.mp4        ← Replace with your hero video
│       └── campus-tour.mp4     ← Replace with your campus video
├── src/
│   ├── components/
│   │   ├── Loader.jsx          ← Animated loading screen
│   │   ├── ScrollProgress.jsx  ← Gold scroll progress bar
│   │   ├── FloatingWhatsApp.jsx← Floating WhatsApp button
│   │   ├── TopBar.jsx          ← Gold contact bar at top
│   │   ├── Navbar.jsx          ← Sticky responsive navbar
│   │   └── Footer.jsx          ← Full footer with links
│   ├── sections/
│   │   ├── Hero.jsx            ← Fullscreen video hero
│   │   ├── About.jsx           ← About section with feature cards
│   │   ├── Campus.jsx          ← Campus video showcase
│   │   ├── Courses.jsx         ← 6 course cards
│   │   ├── Gallery.jsx         ← Filterable gallery + lightbox
│   │   ├── Testimonials.jsx    ← Auto-play testimonial carousel
│   │   └── Contact.jsx         ← Contact form + info + map
│   ├── hooks/
│   │   └── useScrollReveal.js  ← Intersection Observer hook
│   ├── App.jsx                 ← Root app component
│   ├── main.jsx                ← React entry point
│   └── index.css               ← Global styles + Tailwind
├── index.html                  ← HTML with SEO meta tags
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## 🎥 Adding Your Videos

Place your videos in the `public/videos/` folder:

| File | Section |
|------|---------|
| `public/videos/jbg-hero.mp4` | Hero fullscreen background video |
| `public/videos/campus-tour.mp4` | Campus tour modal video |

> The hero section uses a fallback poster image from Unsplash if the video fails to load.

---

## 🎨 Customization

### Colors (tailwind.config.js)
```js
colors: {
  gold: {
    DEFAULT: '#D4AF37',  // Main gold accent
    light:   '#F0D060',  // Lighter gold
    dark:    '#A8861A',  // Deeper gold
  }
}
```

### Fonts
Three Google Fonts are used:
- **Playfair Display** — Headings (elegant serif)
- **Cormorant Garamond** — Body text (refined serif)
- **Montserrat** — UI elements (clean sans-serif)

### Gallery Images
Replace Unsplash URLs in `src/sections/Gallery.jsx` with your own academy photos.

### Course Images
Replace Unsplash URLs in `src/sections/Courses.jsx` with your own course images.

### Testimonials
Update the `testimonials` array in `src/sections/Testimonials.jsx` with real student reviews and photos.

### Google Map
In `src/sections/Contact.jsx`, replace the Google Maps embed `src` URL with your actual location embed URL from [Google Maps](https://maps.google.com).

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy on Netlify, Vercel, or any static host.

---

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| Lucide React | 0.363 |

---

## 📞 Academy Contact
- Phone: 8983664300 / 8983664200
- Email: jbgbaramati@gmail.com
- Address: 3rd Floor, Above Saraf Honda, Bhigwan Road, Baramati

---

## ✅ Features Included

- [x] Animated loading screen
- [x] Gold scroll progress bar
- [x] Sticky transparent-to-dark navbar
- [x] Mobile hamburger menu
- [x] Fullscreen video hero with particles
- [x] Animated stats cards
- [x] About section with feature cards
- [x] Campus showcase with video modal
- [x] 6 course cards with hover effects
- [x] Filterable gallery with lightbox
- [x] Auto-play testimonial carousel
- [x] Contact form with validation
- [x] Google Maps embed
- [x] Floating WhatsApp button
- [x] Scroll-reveal animations
- [x] Glassmorphism card design
- [x] Gold glow effects
- [x] Fully responsive (mobile/tablet/desktop)
- [x] SEO meta tags
- [x] Premium black & gold aesthetic
