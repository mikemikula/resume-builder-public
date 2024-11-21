Note -> This app was completely built using [Cursor](https://www.cursor.com/) composer with Anthropic's Claude 3.5-sonnet and GPT-4o for documention generation.  I expect there to be some imperfections, but happy to review pr's to make it better!

Live Site Example:  [mikemikula.com](https://www.mikemikula.com/)

# Resume Builder App

A modern, customizable resume builder application built with Next.js and TypeScript. Create, edit, and share your professional resume with a beautiful, responsive design.

https://github.com/user-attachments/assets/8fe0e587-a0a2-45a2-8b81-8389c37b5998

![image](https://github.com/user-attachments/assets/a12afad7-9052-4a02-9202-010e2dea49b9)


## Features

- 🎨 Modern, responsive design with dark/light mode
- 📱 Mobile-friendly interface
- 🖨️ Print-optimized layout
- 📊 Google Analytics integration
- 🔍 SEO optimized with meta tags
- 📷 Dynamic Open Graph image generation
- 🚀 Fast page loads with Next.js
- 🎯 TypeScript for type safety
- 📦 Monorepo structure with Turborepo

## Project Structure

```
├── apps
│   └── web                    # Next.js frontend application
│       ├── app               # Next.js 13+ app directory
│       ├── components        # React components
│       ├── config           # Configuration files
│       ├── lib              # Utility functions
│       └── types            # TypeScript type definitions
└── packages                  # Shared packages
```

## Quick Start

### Development Environment Setup

1. **Clone and Install**:
   ```bash
   pnpm install
   pnpm build
   ```

2. **Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   # Required
   NEXT_PUBLIC_DOMAIN=http://localhost:3000

   # Optional
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
   
   # Optional
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
   ```

3. **Start Development Server**:
   ```bash
   pnpm dev
   Open Chrome:  http://localhost:3000/
   ```

### Customization

1. **Personal Information**:
   Edit `apps/web/lib/constants.ts`:
   ```typescript
   export const SITE_CONFIG = {
     name: 'Your Name',
     title: 'Your Title',
     email: 'your.email@example.com',
     linkedin: 'your-linkedin-profile'
   }
   ```

2. **Resume Sections**:
   - Experience: `apps/web/config/resume.ts`
   - Skills: Update the `SKILLS` object
   - Achievements: Modify the `ACHIEVEMENTS` array

3. **Styling**:
   - Theme: `apps/web/styles/theme.ts`
   - Tailwind: `tailwind.config.js`

### Building for Production

1. **Build**:
   ```bash
   pnpm build
   ```

2. **Test Production Build**:
   ```bash
   pnpm start
   ```

### Deployment

#### AWS Amplify
Follow the AWS deployment steps in the AWS section above.


### Analytics Implementation

The app uses Google Analytics 4 with custom event tracking:
```typescript
// Example event tracking
const trackEvent = {
  action: 'page_view',
  category: 'engagement',
  label: 'resume_view'
}
```

## Performance Optimization

- Implements image optimization
- Uses Next.js static generation
- Employs proper code splitting
- Optimizes fonts with `next/font`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Share a video and details on what's changed!

### Development Guidelines

- Follow the established code style
- Add proper TypeScript types
- Write tests for new features
- Update documentation as needed

## Troubleshooting

Common issues and solutions:

1. **Build Errors**:
   ```bash
   # Clear cache and reinstall dependencies
   pnpm clean
   pnpm install
   ```

2. **Type Errors**:
   - Ensure TypeScript version matches project requirements
   - Run `pnpm type-check` to verify types

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and tools

## Support

For support, email support@example.com or open an issue in the repository.

## Detailed Setup Guides

### AWS Amplify Deployment Guide

1. **Prerequisites**:
   - AWS Account
   - AWS CLI installed and configured
   - Amplify CLI installed (`npm install -g @aws-amplify/cli`)

2. **Initialize Amplify**:
   ```bash
   amplify init
   ```

3. **Configure Build Settings**:
   Create `amplify.yml` in the root directory:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install -g pnpm
           - pnpm install
       build:
         commands:
           - pnpm build
     artifacts:
       baseDirectory: apps/web/.next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Deploy**:
   ```bash
   amplify push
   ```

### Google Analytics Implementation

1. **Setup Analytics Component**:
   Create `components/Analytics.tsx`:
   ```typescript
   'use client'
   
   import { useEffect } from 'react'
   import { pageview } from '@/lib/gtag'
   import { usePathname, useSearchParams } from 'next/navigation'
   
   export default function Analytics() {
     const pathname = usePathname()
     const searchParams = useSearchParams()
   
     useEffect(() => {
       const url = pathname + searchParams.toString()
       pageview(url)
     }, [pathname, searchParams])
   
     return null
   }
   ```

2. **Configure Event Tracking**:
   Create `lib/gtag.ts`:
   ```typescript
   export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
   
   type GTagEvent = {
     action: string
     category: string
     label: string
     value?: number
   }
   
   export const pageview = (url: string) => {
     window.gtag('config', GA_ID!, {
       page_path: url,
     })
   }
   
   export const event = ({ action, category, label, value }: GTagEvent) => {
     window.gtag('event', action, {
       event_category: category,
       event_label: label,
       value: value,
     })
   }
   ```

3. **Track Custom Events**:
   ```typescript
   // Example usage in components
   import { event } from '@/lib/gtag'
   
   event({
     action: 'share_resume',
     category: 'engagement',
     label: 'share_button_click',
   })
   ```

4. **ConfigureTracked Events**:
   - The application tracks the following events:

     - **Page Views**:
       - **Event Name**: `page_view`
       - **Properties**:
         - `page_location`: URL of the page
         - `page_path`: Path of the page
         - `page_title`: Title of the page

     - **Clicks**:
       - **Event Name**: `click`
       - **Properties**:
         - `click_relative_x`: X position of the click relative to the viewport
         - `click_relative_y`: Y position of the click relative to the viewport
         - `element_type`: Type of the HTML element clicked
         - `element_aria_label`: ARIA label of the element
         - `element_classes`: CSS classes of the element
         - `element_component`: Component name if available
         - `element_href`: Href attribute if the element is a link
         - `element_id`: ID of the element
         - `is_footer`: Boolean indicating if the element is in the footer
         - `is_header`: Boolean indicating if the element is in the header
         - `is_navigation`: Boolean indicating if the element is in the navigation
         - `section_id`: ID of the section containing the element
         - `element_section`: Section attribute of the element

     - **Errors**:
       - **Event Name**: `error`
       - **Properties**:
         - `error_file`: File where the error occurred
         - `error_line`: Line number of the error
         - `error_message`: Error message
         - `error_stack`: Stack trace of the error
         - `error_component`: Component stack where the error occurred

     - **Scroll Depth**:
       - **Event Name**: `scroll`
       - **Properties**:
         - `percent_scrolled`: Percentage of the page scrolled

     - **Custom Metrics**:
       - **Event Name**: `custom_metric`
       - **Properties**:
         - `metric_name`: Name of the metric (e.g., `active_time`, `engagement_time`, `scroll_depth`, `time_on_page`)
         - `metric_value`: Value of the metric
         - `metric_unit`: Unit of the metric (e.g., `seconds`, `percentage`)

     - **Session Start**:
       - **Event Name**: `session_start`
       - **Properties**:
         - `session_id`: Unique identifier for the session
         - `engagement_time_msec`: Engagement time in milliseconds

     - **First Visit**:
       - **Event Name**: `first_visit`
       - **Properties**:
         - `referrer`: Referring URL
         - `landing_page`: Landing page path

### Performance Optimization Details

1. **Image Optimization**:
   ```typescript
   // Use Next.js Image component
   import Image from 'next/image'
   
   <Image
     src="/profile.jpg"
     alt="Profile"
     width={200}
     height={200}
     placeholder="blur"
     priority
   />
   ```

2. **Font Optimization**:
   ```typescript
   // In app/layout.tsx
   import { GeistSans } from 'geist/font/sans'
   import { GeistMono } from 'geist/font/mono'
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
         {children}
       </html>
     )
   }
   ```

3. **SEO Optimization**:
   ```typescript
   // In app/layout.tsx
   export const metadata: Metadata = {
     title: {
       template: '%s | Resume Builder',
       default: 'Resume Builder',
     },
     description: 'Create and share your professional resume',
     openGraph: {
       type: 'website',
       locale: 'en_US',
       url: 'https://your-domain.com',
       siteName: 'Resume Builder',
     },
   }
   ```

### Common Issues and Solutions

1. **Type Errors with Analytics**:
   ```typescript
   // Add types/gtag.d.ts
   interface Window {
     gtag: (
       command: string,
       targetId: string,
       config?: Record<string, any>
     ) => void
   }
   ```

2. **Build Optimization Issues**:
   ```json
   // next.config.js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'standalone',
     images: {
       unoptimized: process.env.NODE_ENV === 'development',
     },
     experimental: {
       optimizeCss: true,
     },
   }
   ```

3. **Environment Variables in Production**:
   - Vercel: Add through dashboard
   - AWS Amplify: Add through Environment Variables settings
   - Docker: Add through docker-compose or Dockerfile

### Security Best Practices

1. **Content Security Policy**:
   ```typescript
   // next.config.js
   const securityHeaders = [
     {
       key: 'Content-Security-Policy',
       value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
     }
   ]
   ```

2. **API Rate Limiting**:
   ```typescript
   // pages/api/_middleware.ts
   import rateLimit from 'express-rate-limit'
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   })
   ```

### Contributing Guidelines

1. **Code Style**:
   - Use ESLint and Prettier configurations provided
   - Follow TypeScript strict mode guidelines
   - Use meaningful variable and function names

2. **Pull Request Process**:
   - Create feature branch from `develop`
   - Add tests for new features
   - Update documentation
   - Request review from maintainers

3. **Commit Messages**:
   ```bash
   feat: add share button component
   fix: resolve analytics tracking issue
   docs: update deployment instructions
   ```

For more detailed information about specific features or configurations, please check our [Wiki](link-to-wiki) or open an issue.
