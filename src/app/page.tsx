'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({ title, description, href }: ServiceCardProps) => {
  return (
    <Link href={href}>
      <motion.div 
        className="bg-card rounded-lg border border-border p-6 h-full flex flex-col hover:shadow-lg transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mt-auto">
          <span className="text-primary font-medium flex items-center">
            Mehr erfahren
            <svg 
              className="ml-1 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  showAppStore?: boolean;
  isExternal?: boolean;
}

const ProjectCard = ({ title, description, image, href, showAppStore, isExternal }: ProjectCardProps) => {
  const LinkComponent = (
    <motion.div 
      className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full flex items-center justify-center bg-white">
        <Image
          src={image}
          alt={title}
          width={image.includes('svg') ? 160 : 0}
          height={image.includes('svg') ? 60 : 0}
          fill={!image.includes('svg')}
          style={{ objectFit: image.includes('svg') ? 'contain' : 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mt-auto">
          <span className="text-primary font-medium flex items-center">
            Zum Projekt
            <svg 
              className="ml-1 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isExternal && (
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {LinkComponent}
      </a>
    );
  }

  return (
    <Link href={href}>
      {LinkComponent}
    </Link>
  );
};

export default function Home() {
  const services = [
    {
      title: "Webentwicklung",
      description: "Moderne Webentwicklung mit Next.js, React und API-first Ansatz für performante und skalierbare Anwendungen.",
      href: "/leistungen#webentwicklung"
    },
    {
      title: "App- & Softwareentwicklung",
      description: "Entwicklung von mobilen und webbasierten Anwendungen für verschiedene Plattformen mit modernen Technologien.",
      href: "/leistungen#app-entwicklung"
    },
    {
      title: "AI- & Technologieberatung",
      description: "Beratung zu Machine Learning, Automatisierung und Prozessoptimierung für zukunftssichere Technologielösungen.",
      href: "/leistungen#ai-beratung"
    },
    {
      title: "Cloudlösungen & DevOps",
      description: "CI/CD, Azure, GCP und Serverless Lösungen für optimale Entwicklungsworkflows und Betriebseffizienz.",
      href: "/leistungen#cloud-devops"
    }
  ];

  const projects = [
    {
      title: "Bonlivre.ch",
      description: "Digitale Plattform für Buchliebhaber mit Empfehlungen und Community-Features.",
      image: "/images/BonlivreLogo.png",
      href: "https://www.bonlivre.ch",
      isExternal: true
    },
    {
      title: "Bonlivre App",
      description: "Mobile App für iOS und Android mit Offline-Unterstützung und personalisierten Leseempfehlungen.",
      image: "/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
      href: "https://apps.apple.com/ch/app/bonlivre/id6501959148",
      showAppStore: true,
      isExternal: true
    },
    {
      title: "Fileshift.ch",
      description: "Sichere Dateitransfer-Lösung mit End-to-End-Verschlüsselung und automatischer Ablaufsteuerung.",
      image: "/images/fileshift-screenshot.jpg",
      href: "https://www.fileshift.ch",
      isExternal: true
    }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://softacc.ch",
            "name": "Softacc",
            "description": "Softacc bietet massgeschneiderte IT- und AI-Beratung in der Schweiz mit Fokus auf innovative Webentwicklung, App-Entwicklung, AI-Technologien und sichere Cloudlösungen für Schweizer Unternehmen.",
            "logo": "https://softacc.ch/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Fabrikstrasse 4",
              "addressLocality": "Niederurnen",
              "postalCode": "8867",
              "addressCountry": "CH"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@softacc.ch",
              "availableLanguage": ["German", "English"]
            },
            "sameAs": [
              "https://www.linkedin.com/company/softacc",
              "https://github.com/softacc"
            ]
          })
        }}
      />
      
      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".speakable"]
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Webentwicklung",
                    "url": "https://softacc.ch/leistungen#webentwicklung",
                    "description": "Moderne Webentwicklung mit Next.js, React und API-first Ansatz für performante und skalierbare Anwendungen."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "App- & Softwareentwicklung",
                    "url": "https://softacc.ch/leistungen#app-entwicklung",
                    "description": "Entwicklung von mobilen und webbasierten Anwendungen für verschiedene Plattformen mit modernen Technologien."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "AI- & Technologieberatung",
                    "url": "https://softacc.ch/leistungen#ai-beratung",
                    "description": "Beratung zu Machine Learning, Automatisierung und Prozessoptimierung für zukunftssichere Technologielösungen."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "name": "Cloudlösungen & DevOps",
                    "url": "https://softacc.ch/leistungen#cloud-devops",
                    "description": "CI/CD, Azure, GCP und Serverless Lösungen für optimale Entwicklungsworkflows und Betriebseffizienz."
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-32">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digitale Lösungen für die Welt von morgen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Wir verbinden Technologie mit Innovation, um Ihr Unternehmen in die digitale Zukunft zu führen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Kontakt aufnehmen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/leistungen">
                  Unsere Leistungen
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir bieten maßgeschneiderte Lösungen für die digitalen Herausforderungen Ihres Unternehmens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ausgewählte Projekte</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entdecken Sie unsere erfolgreichen Kundenprojekte und erfahren Sie mehr über unsere Arbeitsweise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                href={project.href}
                showAppStore={project.showAppStore}
                isExternal={project.isExternal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Bereit für Ihren digitalen Erfolg?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir gemeinsam Ihre Ziele erreichen können.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/kontakt">
              Jetzt Kontakt aufnehmen
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 