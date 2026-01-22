# Steffer - Website

Modern, dark-themed website for Steffer, an automation and AI agency.

## Features

- **Homepage** with hero, credibility stats, problem/solution framework, social proof, comparison table, and CTAs
- **Service Pages:**
  - Consultoria e Automação
  - Agentes de IA
  - GEO (Generative Engine Optimization)
  - Dados e Dashboards
- **HubSpot Form Integration** for lead capture
- **Responsive Design** optimized for all devices
- **SEO Optimized** with meta tags and structured data
- **Dark Theme** with tiffany blue (#27E8DC) brand color

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Forms:** HubSpot Forms API
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### HubSpot Setup

To enable the contact form:

1. Create a form in HubSpot (see `HUBSPOT_SETUP.md` for detailed instructions)
2. Get your Portal ID and Form ID
3. Update `components/contact-section.tsx` with your credentials:

\`\`\`tsx
const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID"
const HUBSPOT_FORM_ID = "YOUR_FORM_ID"
\`\`\`

See `HUBSPOT_SETUP.md` for complete setup instructions.

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with SEO
│   ├── globals.css                 # Global styles and design tokens
│   └── servicos/                   # Service pages
│       ├── consultoria-automacao/
│       ├── agentes-ia/
│       ├── geo/
│       └── dados-dashboards/
├── components/
│   ├── header.tsx                  # Navigation with dropdown
│   ├── footer.tsx                  # Footer
│   ├── hero-section.tsx            # Homepage hero
│   ├── social-proof-section.tsx    # Testimonials and logos
│   ├── comparison-section.tsx      # Comparison table
│   ├── contact-section.tsx         # Contact form
│   ├── hubspot-form.tsx            # HubSpot integration
│   └── servicos/                   # Service page components
│       ├── consultoria/
│       ├── agentes/
│       ├── geo/
│       └── dados/
└── components/ui/                  # shadcn/ui components
\`\`\`

## Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS variables:

- **Primary:** #27E8DC (tiffany blue)
- **Secondary:** #0E3262 (dark blue)
- **Accent:** #4D149D (purple)
- **Background:** #0B0E12 (dark)

To change colors, update the CSS variables in the `:root` selector.

### Content

All content is in Brazilian Portuguese. To update:

1. **Homepage:** Edit components in `components/` directory
2. **Service Pages:** Edit components in `components/servicos/` subdirectories
3. **Navigation:** Update `components/header.tsx`

### Adding New Service Pages

1. Create a new directory in `app/servicos/`
2. Add `page.tsx` with the service page layout
3. Create components in `components/servicos/[service-name]/`
4. Update navigation in `components/header.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings
4. Add your HubSpot credentials as environment variables (optional)

### Environment Variables

If you want to use environment variables for HubSpot:

\`\`\`env
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
\`\`\`

Then update `components/contact-section.tsx`:

\`\`\`tsx
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || ""
const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || ""
\`\`\`

## Performance

- Images are optimized using Next.js Image component
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle size
- Server-side rendering for fast initial load

## SEO

- Unique meta titles and descriptions for each page
- Structured data (Schema.org) for organization
- Semantic HTML
- Descriptive URLs
- Alt text for all images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved by Steffer

## Support

For technical support or questions, contact your development team.
