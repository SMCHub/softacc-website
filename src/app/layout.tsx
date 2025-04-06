import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Softacc | Professionelle IT- & AI-Beratung Schweiz',
    template: '%s | Softacc - IT & AI Lösungen Schweiz'
  },
  description: 'Softacc bietet massgeschneiderte IT- und AI-Beratung in der Schweiz mit Fokus auf innovative Webentwicklung, App-Entwicklung, AI-Technologien und sichere Cloudlösungen für Schweizer Unternehmen.',
  keywords: [
    'IT-Beratung Schweiz', 
    'AI-Beratung Schweiz', 
    'Webentwicklung Schweiz', 
    'App-Entwicklung Schweiz', 
    'Cloud-Lösungen Schweiz', 
    'KI-Beratung Schweiz', 
    'Next.js Entwicklung', 
    'React Experten', 
    'Digitale Transformation Schweiz', 
    'IT Dienstleistungen Niederurnen', 
    'Softacc', 
    'DevOps Schweiz', 
    'Schweizer IT-Unternehmen',
    'IT-Lösungen KMU Schweiz'
  ],
  authors: [{ name: 'Softacc Team', url: 'https://softacc.ch/ueber-uns' }],
  creator: 'Softacc IT & AI Beratung',
  publisher: 'Softacc',
  alternates: {
    canonical: 'https://softacc.ch',
    languages: {
      'de-CH': 'https://softacc.ch',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://softacc.ch',
    title: 'Softacc | Professionelle IT- & AI-Beratung für Schweizer Unternehmen',
    description: 'Innovative IT- und AI-Beratung aus der Schweiz mit Fokus auf massgeschneiderte Webentwicklung, App-Entwicklung, moderne AI-Technologien und sichere Cloudlösungen für Ihr Unternehmen.',
    siteName: 'Softacc',
    images: [
      {
        url: 'https://softacc.ch/images/softacc-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Softacc - IT und AI Beratung Schweiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softacc | IT- & AI-Beratung Schweiz',
    description: 'Professionelle IT- und AI-Beratung in der Schweiz mit Fokus auf Webentwicklung, App-Entwicklung, AI-Technologien und Cloudlösungen.',
    images: ['https://softacc.ch/images/softacc-twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Ersetzen Sie dies mit Ihrem tatsächlichen Verifizierungscode
  },
  category: 'technology',
  metadataBase: new URL('https://softacc.ch'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="de-CH" href="https://softacc.ch" />
        <link rel="canonical" href="https://softacc.ch" />
        <meta name="geo.region" content="CH" />
        <meta name="geo.placename" content="Niederurnen" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 