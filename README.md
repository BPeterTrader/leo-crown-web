# Leo Crown Real Estate Website

A comprehensive, professional real estate investment platform for **Leo Crown Estate**, specializing in Dubai luxury property investments, financing solutions, portfolio management, and legal support.

![Leo Crown Estate](public/logo.svg)

## Overview

Leo Crown is a full-featured real estate investment platform designed to provide comprehensive services for property investors in Dubai. The website offers detailed information about investment strategies, financ options, portfolio management services, and legal support, along with an extensive blog covering market insights and investment guides.

## Website Structure

### Pages (Total: 10)
1. **Home** (`/`) - Hero, services overview, properties, market insights, team
2. **Properties** (`/properties`) - Property listings and showcases
3. **Services** (`/services`) - Comprehensive service offerings
4. **Investment Strategy** (`/services/investment-strategy`) - Detailed investment planning services
5. **Financing Solutions** (`/services/financing-solutions`) - Mortgage and financ guidance
6. **Portfolio Management** (`/services/portfolio-management`) - Professional property management
7. **Legal Support** (`/services/legal-support`) - Legal guidance and compliance
8. **About** (`/about`) - Company information and team
9. **Blog** (`/blog`) - Market insights and investment guides (6 articles)
10. **Contact** (`/contact`) - Contact form and information

### Blog Articles (6 Comprehensive Posts)
1. Dubai Real Estate Market Outlook 2025 (5 min read)
2. Top 5 Investment Areas in Dubai (6 min read)
3. Understanding Dubai's Golden Visa Program (7 min read)
4. Luxury Living: Downtown Dubai Penthouses (5 min read)
5. Off-Plan vs Ready Properties Comparison (8 min read)
6. Financing Your Dubai Property - Complete Guide (10 min read)

## Key Features

### User Experience
- **Multi-page architecture** following real estate industry standards
- **Responsive design** optimized for desktop, tablet, and mobile
- **Mobile navigation** with smooth slide-out hamburger menu
- **Active page highlighting** in navigation
- **Smooth transitions** and hover effects throughout
- **WhatsApp integration** for instant customer communication

### Blog System
- **Individual blog post pages** with full content
- **SEO-friendly URLs** (slug-based routing)
- **Social sharing buttons** (Facebook, Twitter, LinkedIn)
- **Related posts sidebar** for better content discovery
- **Author bio sections** with contact CTAs
- **Newsletter subscription** forms
- **Category organization** (Market Insights, Investment Guide, Legal, Finance)
- **Read time indicators** for user convenience

### Service Pages
- **4 detailed service pages** with comprehensive information
- **Feature cards** highlighting key benefits
- **Detailed service lists** with checkmarks
- **Call-to-action sections** throughout
- **Internal linking** for seamless navigation

### Social Media
All platforms connected and functional:
- **Facebook**: Leo Crown Estate
- **Instagram**: @leocrownestate
- **LinkedIn**: leo-crown
- **X (Twitter)**: @thecrownestate

### SEO Optimization
- **Meta tags** optimized for Dubai real estate keywords
- **Open Graph tags** for social media sharing
- **Twitter Cards** for better Twitter presentation
- **semantic HTML** with proper heading structure
- **Descriptive URLs** and page titles

## Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod validation

## Getting Started

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Installation

```bash
# Clone the repository
git clone git@github.com:BPeterTrader/leo-crown-web.git

# Navigate to project directory
cd leo-crown-web-view

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
leo-crown-web-view/
├── public/               # Static assets
│   └── logo.svg         # Leo Crown logo
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   │   ├── Header.tsx           # Main navigation
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── Hero.tsx             # Homepage hero
│   │   ├── Services.tsx         # Services section
│   │   ├── Properties.tsx       # Properties showcase
│   │   ├── MobileMenu.tsx       # Mobile navigation
│   │   ├── WhatsAppWidget.tsx   # WhatsApp chat button
│   │   └── ui/                  # shadcn/ui components
│   ├── data/            # Data files
│   │   └── blogPosts.ts         # Blog content
│   ├── pages/           # Page components
│   │   ├── Index.tsx            # Homepage
│   │   ├── PropertiesPage.tsx   # Properties page
│   │   ├── ServicesPage.tsx     # Services overview
│   │   ├── AboutPage.tsx        # About page
│   │   ├── BlogPage.tsx         # Blog listing
│   │   ├── BlogPostPage.tsx     # Individual blog post
│   │   ├── ContactPage.tsx      # Contact page
│   │   └── services/            # Individual service pages
│   │       ├── InvestmentStrategy.tsx
│   │       ├── FinancingSolutions.tsx
│   │       ├── PortfolioManagement.tsx
│   │       └── LegalSupport.tsx
│   ├── App.tsx          # Main app component with routing
│   └── main.tsx         # Entry point
├── CHANGES.md           # Detailed changelog
├── WEBSITE_STRUCTURE.md # Complete site map
├── BLOG_CONTENT.md      # Blog content overview
└── README.md            # This file
```

## Configuration & Customization

### WhatsApp Integration
Update the phone number in `src/components/WhatsAppWidget.tsx`:
```typescript
const whatsappNumber = "971501234567"; // Replace with actual number
```

### Contact Information
Update contact details in `src/components/Footer.tsx`:
- Address
- Phone number
- Email address

### Blog Content
Add new blog posts in `src/data/blogPosts.ts` following the existing structure.

## Features Checklist

### Completed 
- [x] Multi-page architecture
- [x] Responsive design (desktop, tablet, mobile)
- [x] Mobile navigation menu
- [x] WhatsApp chat widget
- [x] Social media integration (4 platforms)
- [x] Blog system with 6 articles
- [x] Individual blog post pages
- [x] 4 detailed service pages
- [x] SEO optimization
- [x] Meta tags for social sharing
- [x] Active navigation states
- [x] Newsletter subscription forms
- [x] Social sharing buttons
- [x] Related posts feature

### Recommended Enhancements 
- [ ] Add real property images
- [ ] Implement backend for contact forms
- [ ] Connect newsletter to email service (Mailchimp, SendGrid)
- [ ] Add property search/filter functionality
- [ ] Implement blog CMS for easier content management
- [ ] Add Google Analytics integration
- [ ] Optimize images with lazy loading
- [ ] Add testimonials section
- [ ] Create property detail pages
- [ ] Add live chat functionality (in addition to WhatsApp)

## Deployment

### Recommended platforms
- **Vercel** (Optimal for Next.js/React)
- **Netlify** (Easy deployment with CI/CD)
- **AWS Amplify** (Full AWS integration)

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## Documentation

- **CHANGES.md** - Detailed changelog of all updates
- **WEBSITE_STRUCTURE.md** - Complete site map and structure
- **BLOG_CONTENT.md** - Overview of all blog articles
- **README.md** - This file

## Contributing

This is a private project for Leo Crown Estate. For any updates or modifications, please contact the development team.

## Contact

**Leo Crown Estate**
- Website: [Your deployed URL]
- Facebook: https://www.facebook.com/p/Leo-Crown-Estate-61579186532142/
- Instagram: https://www.instagram.com/leocrownestate/
- LinkedIn: https://ae.linkedin.com/company/leo-crown
- X (Twitter): https://x.com/thecrownestate?lang=en

## License

Private and confidential. All rights reserved to Leo Crown Estate.
