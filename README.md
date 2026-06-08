# 🛠️ Conant Handyman Service

A premium, modern, responsive website for **Conant Handyman Service LLC**, a professional handyman business owned and operated by Austin Conant in Colorado Springs, CO. 

🌐 **Live Demo Website:** [https://conant-handyman-serv-fakm.bolt.host/](https://conant-handyman-serv-fakm.bolt.host/)

---

## 🎨 Preview

The website features a clean, forest-green and earthy-sand color palette, modern typography, custom animations, and a fully mobile-responsive design tailored to showcase home repair services and capture customer leads.

- **Business Name:** Conant Handyman Service LLC
- **Owner & Operator:** Austin Conant
- **Location:** Colorado Springs, CO
- **Tagline:** *"Reliable Home Repairs Without the Hassle."*
- **Contact:** (719) 357-9755

---

## ✨ Features

- **Services Showcased:** 
  - 🔨 Drywall Repair
  - 🚪 Door Installation & Repair
  - 📦 Cabinet Installation
  - 💧 Gutter Cleaning
  - 📺 TV Mounting
  - 🎨 Interior Painting
  - 🔧 Furniture Assembly
  - 🚗 Garage Doors & Openers
  - 🪟 Window Treatments
  - ⚡ Fixture Replacement
  - 🛏️ Murphy Bed Installation
  - 🌲 Carpentry & Custom woodwork
- **Why Choose Conant:** Highlights key differentiators (Punctuality, Honest Upfront Pricing, and Quality Workmanship).
- **Service Area Map/Details:** Outlines coverage across the Colorado Springs region.
- **Lead Capture Form:** Functional contact page with fields for name, email, phone, services needed, and project details.
- **Customer Reviews:** Dynamic client testimonials section.
- **Interactive Gallery:** Shows high-quality visual examples of completed projects.
- **Animated Scroll Effects:** Smooth micro-interactions and enter-animations on scroll.

---

## 💻 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Backend/Integration:** [Supabase](https://supabase.com/)

---

## 📂 Project Structure

```text
conant-handyman-website/
├── .bolt/                # StackBlitz / Bolt.new config
├── src/
│   ├── components/       # UI Components
│   │   ├── About.tsx       # "Meet Austin" section
│   │   ├── Contact.tsx     # Contact & estimate request form
│   │   ├── Footer.tsx      # Footer with links and quick details
│   │   ├── Gallery.tsx     # Project photos showcase
│   │   ├── Header.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero landing banner
│   │   ├── Reviews.tsx     # Client testimonials
│   │   ├── ScrollToTop.tsx # Floating back-to-top button
│   │   ├── ServiceArea.tsx # Service region details
│   │   ├── Services.tsx    # List of offered home repairs
│   │   ├── SpecialOffer.tsx# Special discounts banner
│   │   └── WhyChoose.tsx   # Benefits section
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Custom scroll animation hook
│   ├── App.tsx           # Main application shell
│   ├── index.css         # Styling directives and custom Tailwind imports
│   ├── main.tsx          # Application entrypoint
│   └── vite-env.d.ts     # Vite environment types
├── eslint.config.js      # ESLint configuration
├── index.html            # Core HTML wrapper
├── package.json          # Node dependencies & project scripts
├── postcss.config.js     # PostCSS configurations
├── tailwind.config.js    # TailwindCSS style configurations
├── tsconfig.json         # TypeScript configurations
└── vite.config.ts        # Vite configuration
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AdityaGaneshe/conant-handyman-website.git
   cd conant-handyman-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

### 📦 Production Build

To build the application for production deployment, run:
```bash
npm run build
```
This generates a highly optimized `dist` folder which can be hosted on platforms like GitHub Pages, Vercel, Netlify, or Hostinger.

---

## 📄 License

This project is private and proprietary. All rights reserved.
