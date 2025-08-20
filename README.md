# Senior Pride Network Canada

A modern web application for connecting 2SLGBTQI+ older people and the organizations that serve them across Canada. Built with Next.js, Tailwind CSS, Sanity CMS, and Supabase.

## Features

- 🏠 **Responsive Design**: Mobile-first design with Tailwind CSS
- 📱 **Interactive Navigation**: Smooth transitions and mobile menu
- 📝 **Content Management**: Sanity CMS for articles and resources
- 🔍 **SEO Optimized**: Static site generation with Next.js
- 🎨 **Custom Design**: Faithful recreation of original HTML/CSS design
- 🚀 **Future Ready**: Prepared for Supabase database integration

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Sanity.io for content management
- **Database**: Supabase (prepared for future integration)
- **Icons**: Font Awesome
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Project Structure

```
senior-pride-network/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── articles/           # Article pages (dynamic routing)
│   │   ├── api/               # API routes (Supabase placeholders)
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── layout/            # Header, Footer, Layout components
│   │   └── ui/                # Reusable UI components
│   └── lib/                   # Utilities (Sanity, Supabase configs)
├── sanity/
│   └── schemas/               # Sanity CMS schemas
├── tailwind.config.ts         # Tailwind configuration
└── sanity.config.ts          # Sanity Studio configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account (for CMS)
- Supabase account (for future database features)

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd senior-pride-network
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your actual credentials:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-sanity-api-token
   
   # Supabase Configuration (for future use)
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Sanity CMS Setup

### 1. Create Sanity Project

1. Go to [sanity.io](https://sanity.io) and create a new project
2. Note your Project ID and Dataset name
3. Generate an API token with editor permissions

### 2. Configure Sanity Studio

The project includes a pre-configured Sanity schema for articles. To set up the studio:

1. Update your environment variables with Sanity credentials
2. The studio is configured in `sanity.config.ts`
3. Article schema is defined in `sanity/schemas/article.ts`

### 3. Deploy Sanity Studio (Optional)

You can deploy the Sanity Studio alongside your Next.js app:

```bash
npx sanity deploy
```

## Content Management

### Article Schema

Articles in Sanity include:
- **Title**: Article headline
- **Slug**: URL-friendly identifier
- **Excerpt**: Brief description
- **Image**: Featured image
- **Content**: Rich text content with embedded images
- **Category**: Classification (resources, training, news, community)
- **Published At**: Publication date
- **Order**: For featured articles

### Adding Content

1. Access your Sanity Studio (locally at `/studio` or deployed version)
2. Create new articles using the article schema
3. Articles will automatically appear on the website

## Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   ```bash
   npx vercel
   ```

2. **Set environment variables** in Vercel dashboard:
   - Add all variables from `.env.local`
   - Ensure Sanity credentials are correctly set

3. **Deploy**:
   ```bash
   npx vercel --prod
   ```

### Environment Variables for Production

Ensure these are set in your deployment platform:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

## Future Enhancements

The application is prepared for additional features:

### Supabase Integration
- User authentication and profiles
- Comment system for articles
- Member directory
- Event management

### Additional Features
- Search functionality
- Newsletter subscription
- Multi-language support (EN/FR)
- Advanced filtering and categorization

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Component Development

All components are TypeScript-based and follow these conventions:
- **Server Components**: Default for static content
- **Client Components**: Marked with `'use client'` for interactivity
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or support, please contact:
- Email: info@seniorpridenetwork.ca
- Website: [seniorpridenetwork.ca](https://seniorpridenetwork.ca)

## License

© 2024 Senior Pride Network Canada. All rights reserved.
