import * as React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from "next"
import Script from 'next/script'
import { 
  JsonLd,
  WorkExperienceJsonLd,
  BreadcrumbJsonLd,
  Canonical,
  CookieConsent 
} from '@/components'
import "./globals.css"
import { getDomainUrl, createUrl, getDomainWithoutProtocol, getDomainString } from '@/lib/utils/domain'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: getDomainUrl(),
  title: "Professional Resume | Software Engineer",
  description: "Lead Software Engineer and Technical Architect with expertise in cloud architecture, full-stack development, and technical leadership.",
  keywords: [
    'Software Engineering Resume',
    'Technical Leadership',
    'Cloud Architecture',
    'Full Stack Development',
    'DevOps Engineering',
    'System Architecture',
    'Engineering Management',
    'Technical Strategy'
  ],
  authors: [{ name: "Resume Owner" }],
  openGraph: {
    type: 'profile',
    title: 'Software Engineering Resume',
    description: "Professional resume showcasing software engineering and technical leadership experience.",
    images: [{
      url: createUrl('/previews/linkedin-preview.png'),
      width: 1200,
      height: 627,
      alt: 'Professional Resume Preview'
    }],
    siteName: "Professional Resume",
    locale: 'en_US',
    url: getDomainString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering Resume',
    description: "Professional software engineering resume highlighting technical expertise and leadership.",
    images: [createUrl('/previews/linkedin-preview.png')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  }
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <head>
        <Canonical />
        {GA_ID && (
          <>
            <Script
              id="google-analytics-tag"
              strategy="afterInteractive"
            >
              {`
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GA_ID}');
              `}
            </Script>
            <Script id="google-analytics-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_location: window.location.href,
                  page_path: window.location.pathname,
                  page_title: document.title,
                  send_page_view: true,
                  allow_google_signals: true,
                  allow_ad_personalization_signals: true,
                  cookie_flags: 'secure;samesite=none',
                  cookie_domain: '${getDomainWithoutProtocol()}',
                  cookie_expires: 63072000,
                  user_properties: {
                    visitor_type: 'direct'
                  }
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased min-h-screen bg-background text-text-primary">
        <JsonLd />
        <WorkExperienceJsonLd />
        <BreadcrumbJsonLd />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
} 