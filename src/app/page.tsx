'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAppSlide, setCurrentAppSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Digitale Lösungen für die Welt von morgen",
      description: "Wir verbinden Technologie mit Innovation, um Ihr Unternehmen in die digitale Zukunft zu führen.",
      gradient: "from-gray-200/50 to-gray-100/30"
    },
    {
      title: "Mobile E-Commerce Apps für Ihren Shop",
      description: "Erweitern Sie Ihre Reichweite mit nativen iOS und Android Apps, die sich nahtlos mit Ihrem Online-Shop verbinden.",
      gradient: "from-blue-200/50 to-blue-100/30"
    },
    {
      title: "KI-gestützte Technologien für Ihr Business",
      description: "Nutzen Sie das Potenzial künstlicher Intelligenz, um Ihre Geschäftsprozesse zu optimieren und zu automatisieren.",
      gradient: "from-purple-200/50 to-purple-100/30"
    }
  ];
  
  const appSlides = [
    {
      title: "Shop App für iOS & Android",
      description: "Verwandeln Sie Ihren Online-Shop in eine erstklassige mobile App für iOS und Android. Bieten Sie Ihren Kunden ein nahtloses Einkaufserlebnis und steigern Sie Ihren Umsatz durch mobile Präsenz.",
      features: [
        "Schnelle API-Integration mit Ihrem Shopify- oder WooCommerce-Shop",
        "Push-Benachrichtigungen für Angebote und Marketing-Kampagnen",
        "Anpassbares Design im Stil Ihrer Marke",
        "Einfache Produktsuche und Filteroptionen"
      ],
      image: "/images/app-mockup-1.jpg",
      gradient: "from-blue-200/50 to-blue-100/30"
    },
    {
      title: "Zahlungssysteme & Checkout-Prozess",
      description: "Optimieren Sie den Kaufprozess mit einer schnellen und sicheren Checkout-Erfahrung. Integrieren Sie Apple Pay, Google Pay und andere beliebte Zahlungsmethoden für maximale Conversion.",
      features: [
        "Integration von Apple Pay und Google Pay",
        "Gespeicherte Zahlungsmethoden und Versandinformationen",
        "Schneller Checkout mit einem Klick",
        "Sichere Transaktionen und Datenschutz"
      ],
      image: "/images/app-mockup-2.jpg",
      gradient: "from-blue-200/50 to-blue-100/30"
    },
    {
      title: "Kundenbindung & Marketing",
      description: "Nutzen Sie die volle Kraft mobiler Apps für Ihr Marketing. Mit integrierten Kundenbindungsprogrammen, personalisierten Empfehlungen und zielgerichteten Angeboten maximieren Sie den Customer Lifetime Value.",
      features: [
        "Personalisierte Produktempfehlungen",
        "Kundenbindungsprogramme mit Punkten und Belohnungen",
        "Gezielte Marketing-Kampagnen über Push-Benachrichtigungen",
        "Analyse des Kundenverhaltens für bessere Geschäftsentscheidungen"
      ],
      image: "/images/app-mockup-3.jpg",
      gradient: "from-blue-200/50 to-blue-100/30"
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
  
  const services = [
    {
      title: "Webentwicklung",
      description: "Moderne Webentwicklung mit Next.js, React und API-first Ansatz für performante und skalierbare Anwendungen.",
      href: "/leistungen#webentwicklung"
    },
    {
      title: "Mobile E-Commerce Apps",
      description: "Native iOS und Android Apps mit nahtloser Anbindung an Ihre bestehende Shopify oder WooCommerce Webseite.",
      href: "/leistungen#ecommerce-dropshipping"
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
  
  useEffect(() => {
    // Slider für Hero-Bereich
    const heroTimer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000); // Alle 5 Sekunden wechseln
    
    // Slider für App-Bereich
    const appTimer = setTimeout(() => {
      setCurrentAppSlide((prevSlide) => (prevSlide + 1) % appSlides.length);
    }, 5000); // Alle 5 Sekunden wechseln
    
    // Slider für Projekte-Bereich
    const projectTimer = setTimeout(() => {
      setCurrentProjectSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 5000); // Alle 5 Sekunden wechseln
    
    return () => {
      clearTimeout(heroTimer);
      clearTimeout(appTimer);
      clearTimeout(projectTimer);
    };
  }, [currentSlide, heroSlides.length, currentAppSlide, appSlides.length, currentProjectSlide, projects.length]);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://softacc.ch/#organization",
            "url": "https://softacc.ch",
            "name": "Softacc",
            "description": "Softacc bietet massgeschneiderte IT- und AI-Beratung in der Schweiz mit Fokus auf innovative Webentwicklung, App-Entwicklung, AI-Technologien und sichere Cloudlösungen für Schweizer Unternehmen.",
            "logo": "https://softacc.ch/images/logo.png",
            "image": "https://softacc.ch/images/softacc-office.jpg",
            "priceRange": "$$",
            "telephone": "+41 123 456 789",
            "email": "info@softacc.ch",
            "foundingDate": "2023-06-01",
            "founders": [
              {
                "@type": "Person",
                "name": "Softacc Gründer"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Fabrikstrasse 4",
              "addressLocality": "Niederurnen",
              "addressRegion": "GL",
              "postalCode": "8867",
              "addressCountry": "CH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 47.1065,
              "longitude": 9.0626
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@softacc.ch",
              "availableLanguage": ["German", "English"]
            },
            "sameAs": [
              "https://www.linkedin.com/company/softacc",
              "https://github.com/softacc"
            ],
            "makesOffer": services.map((service, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "url": `https://softacc.ch${service.href}`
              }
            }))
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
                    "name": "Mobile E-Commerce Apps",
                    "url": "https://softacc.ch/leistungen#ecommerce-dropshipping",
                    "description": "Native iOS und Android Apps mit nahtloser Anbindung an Ihre bestehende Shopify oder WooCommerce Webseite."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "App- & Softwareentwicklung",
                    "url": "https://softacc.ch/leistungen#app-entwicklung",
                    "description": "Entwicklung von mobilen und webbasierten Anwendungen für verschiedene Plattformen mit modernen Technologien."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "name": "AI- & Technologieberatung",
                    "url": "https://softacc.ch/leistungen#ai-beratung",
                    "description": "Beratung zu Machine Learning, Automatisierung und Prozessoptimierung für zukunftssichere Technologielösungen."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
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

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://softacc.ch"
              }
            ]
          })
        }}
      />
      
      {/* Projects Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": project.title,
                "description": project.description,
                "image": `https://softacc.ch${project.image}`,
                "url": project.href,
                "applicationCategory": "BusinessApplication",
                "operatingSystem": project.title.includes("App") ? "iOS, Android" : "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "CHF"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "25"
                }
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>
        
        <div className="container mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {heroSlides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={index}
                  className="text-center max-w-3xl mx-auto px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => {
                    if (info.offset.x > 100) {
                      // Nach rechts gewischt - zum vorherigen Slide
                      setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
                    } else if (info.offset.x < -100) {
                      // Nach links gewischt - zum nächsten Slide
                      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
                    }
                  }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    {slide.description}
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
              )
            ))}
          </AnimatePresence>
          
          <div className="flex justify-center mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute left-0 right-0 flex justify-between items-center px-8 md:px-16 top-1/2 transform -translate-y-1/2">
            <button 
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="bg-white shadow-md hover:bg-gray-100 p-3 rounded-full text-gray-800 transition-colors z-20 w-12 h-12 flex items-center justify-center border border-gray-200"
              aria-label="Vorheriger Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="bg-white shadow-md hover:bg-gray-100 p-3 rounded-full text-gray-800 transition-colors z-20 w-12 h-12 flex items-center justify-center border border-gray-200"
              aria-label="Nächster Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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

      {/* E-Commerce & Dropshipping Highlight Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {appSlides.map((slide, index) => (
            index === currentAppSlide && (
              <motion.div
                key={`bg-${index}`}
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-30`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile E-Commerce Apps</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformieren Sie Ihren Online-Shop in eine leistungsstarke mobile App und erreichen Sie Ihre Kunden überall und jederzeit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatePresence mode="wait">
              {appSlides.map((slide, index) => (
                index === currentAppSlide && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, info) => {
                      if (info.offset.x > 100) {
                        // Nach rechts gewischt - zum vorherigen Slide
                        setCurrentAppSlide((prev) => (prev === 0 ? appSlides.length - 1 : prev - 1));
                      } else if (info.offset.x < -100) {
                        // Nach links gewischt - zum nächsten Slide
                        setCurrentAppSlide((prev) => (prev + 1) % appSlides.length);
                      }
                    }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">{slide.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {slide.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {slide.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/leistungen#ecommerce-dropshipping" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
                      Mehr erfahren
                    </Link>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              {appSlides.map((slide, index) => (
                index === currentAppSlide && (
                  <motion.div
                    key={`image-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border border-border"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 rounded-lg flex items-center justify-center">
                      <div className="bg-background/90 p-6 rounded-lg max-w-md mx-4 shadow-lg border border-border">
                        <h3 className="text-2xl font-bold mb-3">Perfekt für Ihren Online-Shop</h3>
                        <p className="text-muted-foreground mb-4">
                          Mit einer maßgeschneiderten App können Ihre Kunden jederzeit und überall in Ihrem Shop einkaufen. 
                          Wir entwickeln Ihre App in nur wenigen Wochen und kümmern uns um alle technischen Details - 
                          von der API-Integration bis zur Veröffentlichung in den App Stores.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">iOS</span>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Android</span>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Shopify</span>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">WooCommerce</span>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">API</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-12">
            {appSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAppSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === currentAppSlide ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`App Slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute left-0 right-0 flex justify-between items-center px-8 md:px-16 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <button 
              onClick={() => setCurrentAppSlide((prev) => (prev === 0 ? appSlides.length - 1 : prev - 1))}
              className="bg-white shadow-md hover:bg-gray-100 p-3 rounded-full text-gray-800 transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-200"
              aria-label="Vorheriger App Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentAppSlide((prev) => (prev + 1) % appSlides.length)}
              className="bg-white shadow-md hover:bg-gray-100 p-3 rounded-full text-gray-800 transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-200"
              aria-label="Nächster App Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {projects.map((project, index) => (
            index === currentProjectSlide && (
              <motion.div
                key={`bg-project-${index}`}
                className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-purple-100/30 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ausgewählte Projekte</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entdecken Sie unsere erfolgreichen Kundenprojekte und erfahren Sie mehr über unsere Arbeitsweise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                index === currentProjectSlide && (
                  <motion.div
                    key={`project-${index}`}
                    className="col-span-1 md:col-span-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, info) => {
                      if (info.offset.x > 100) {
                        // Nach rechts gewischt - zum vorherigen Slide
                        setCurrentProjectSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
                      } else if (info.offset.x < -100) {
                        // Nach links gewischt - zum nächsten Slide
                        setCurrentProjectSlide((prev) => (prev + 1) % projects.length);
                      }
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl border border-border bg-white flex items-center justify-center">
                          {project.image.includes('svg') ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={200}
                              height={60}
                              style={{ objectFit: 'contain' }}
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              style={{ objectFit: 'cover' }}
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          )}
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                        <div className="flex">
                          {project.isExternal ? (
                            <a 
                              href={project.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
                            >
                              Zum Projekt
                              <svg
                                className="ml-2 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <Link 
                              href={project.href}
                              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
                            >
                              Zum Projekt
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === currentProjectSlide ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Projekt Slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute left-0 right-0 flex justify-between items-center px-8 md:px-16 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <button 
              onClick={() => setCurrentProjectSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
              className="bg-white shadow-md hover:bg-gray-100 p-3 rounded-full text-gray-800 transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-200"
              aria-label="Vorheriges Projekt"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentProjectSlide((prev) => (prev + 1) % projects.length)}
              className="bg-white shadow-md hover:bg-gray-100 p-3 rounded-full text-gray-800 transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-200"
              aria-label="Nächstes Projekt"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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