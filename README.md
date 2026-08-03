# Premium Developer Portfolio

A beautiful, modern, and performant portfolio website built with cutting-edge technologies. Designed to stand out from typical portfolio templates with a handcrafted, premium feel.

![Portfolio Preview](./public/og-image.png)

## ✨ Features

- **Premium Design**: Inspired by Apple, Linear, Vercel, and other industry leaders
- **Smooth Animations**: Powered by Framer Motion with subtle, meaningful interactions
- **Glass Morphism**: Elegant UI with backdrop blur effects
- **Dark Mode**: Beautiful dark mode that feels better than light mode
- **Floating Navbar**: Auto-hide on scroll with smooth animations
- **Interactive Timeline**: Visual journey through milestones
- **Project Case Studies**: Detailed project pages with gallery and architecture
- **Contact Form**: Integrated contact form with status feedback
- **Fully Responsive**: Perfect on all devices
- **SEO Optimized**: Complete meta tags and Open Graph
- **100% TypeScript**: Type-safe development
- **Performance First**: Optimized for Lighthouse scores

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **React**: [React 19](https://react.dev/)
- **TypeScript**: Full type safety
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📂 Project Structure

```
.
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API route
│   ├── projects/
│   │   └── [slug]/           # Dynamic project pages
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Base UI components
│   ├── Container.tsx         # Layout container
│   ├── Footer.tsx            # Footer component
│   ├── GlassCard.tsx         # Glass morphism card
│   ├── Navbar.tsx            # Floating navbar
│   ├── ProjectCard.tsx       # Project card component
│   ├── Section.tsx           # Animated section wrapper
│   ├── SectionHeading.tsx    # Section title component
│   ├── ThemeProvider.tsx     # Theme context provider
│   └── ThemeToggle.tsx       # Dark mode toggle
├── sections/
│   ├── About.tsx             # About section with visual blocks
│   ├── Contact.tsx           # Contact form section
│   ├── Hero.tsx              # Hero section
│   ├── Journey.tsx           # Interactive timeline
│   ├── Now.tsx               # Current activities
│   └── Projects.tsx          # Projects grid
├── content/
│   ├── journey.ts            # Timeline data
│   ├── profile.ts            # Personal info
│   ├── projects.ts           # Project data
│   ├── site.ts               # Site metadata
│   └── socials.ts            # Social links
└── lib/
    └── utils.ts              # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update content**
   - Edit files in the `content/` directory
   - Update `profile.ts` with your information
   - Add your projects to `projects.ts`
   - Update `journey.ts` with your milestones
   - Change social links in `socials.ts`

4. **Add images**
   - Place project screenshots in `/public/images/`
   - Update image paths in `projects.ts`
   - Add your portrait to `/public/portrait.jpg`

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Content Management

All content is centralized in the `/content` directory:

### Profile (`content/profile.ts`)
- Personal information
- Experience and education
- Skills and interests
- Current focus
- Availability status

### Projects (`content/projects.ts`)
- Project details
- Features and tech stack
- Problem/Solution
- Architecture
- Challenges and lessons
- Gallery images

### Journey (`content/journey.ts`)
- Timeline milestones
- Dates and descriptions

### Socials (`content/socials.ts`)
- Email
- GitHub
- LinkedIn
- Twitter

### Site Config (`content/site.ts`)
- SEO metadata
- Open Graph tags

## 🎨 Customization

### Colors
Edit color variables in `app/globals.css`:
```css
:root {
  --background: #fafafa;
  --foreground: #0a0a0a;
  --primary: #0a0a0a;
  /* ... */
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  /* ... */
}
```

### Animations
Adjust animation settings in components:
- Framer Motion `transition` props
- Scroll animation thresholds
- Hover effects

### Layout
- Modify section spacing in `Section.tsx`
- Adjust container max-width in `Container.tsx`
- Change grid layouts in section components

## 🔗 Contact Form

The contact form uses the `/api/contact` route. Configure your email service:

1. Install email service (e.g., Resend, SendGrid)
2. Add environment variables
3. Update `app/api/contact/route.ts`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Tested on all major devices

## ⚡ Performance

- Static site generation (SSG)
- Optimized images with Next.js Image
- Code splitting
- Lazy loading
- Minimal bundle size

## 🚢 Deployment

Deploy to Vercel (recommended):

```bash
npm run build
vercel --prod
```

Or other platforms:
- Netlify
- AWS Amplify
- Cloudflare Pages

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 🙏 Credits

Design inspired by:
- Apple
- Linear
- Vercel
- Stripe
- Cursor
- Notion

---

Built with ❤️ by [Divyansh Sharma](https://github.com/divyansh-sharma)
