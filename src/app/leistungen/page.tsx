'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

const services: ServiceProps[] = [
  {
    id: 'webentwicklung',
    title: 'Webentwicklung',
    description: 'Wir entwickeln moderne, schnelle und benutzerfreundliche Webapplikationen mit den neuesten Technologien wie Next.js und React. Unser API-first Ansatz garantiert maximale Flexibilität und Skalierbarkeit für Ihre digitalen Projekte.',
    features: [
      'Responsive Webdesign für alle Geräte',
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'E-Commerce Lösungen',
      'Content Management Systeme',
      'REST und GraphQL API-Entwicklung'
    ],
    technologies: [
      'Next.js', 'React', 'TypeScript', 'Node.js', 'GraphQL', 'REST APIs', 'Tailwind CSS', 'Headless CMS'
    ]
  },
  {
    id: 'ecommerce-dropshipping',
    title: 'Mobile E-Commerce Apps',
    description: 'Wir entwickeln hochwertige, native iOS und Android E-Commerce-Apps, die sich nahtlos mit Ihrer bestehenden Shopify oder WooCommerce Webseite verbinden. Erweitern Sie Ihren Vertriebskanal und steigern Sie Ihren Umsatz durch eine maßgeschneiderte mobile Shopping-Erfahrung.',
    features: [
      'Native iOS und Android E-Commerce-Apps',
      'Nahtlose Integration mit Shopify, WooCommerce und anderen Systemen',
      'Schnelle API-Anbindung an bestehende Online-Shops',
      'Individuelles Branding und maßgeschneidertes Design',
      'Push-Benachrichtigungen für Sonderangebote und Neuigkeiten',
      'Kundenbindungsprogramme und In-App-Marketing'
    ],
    technologies: [
      'React Native', 'Flutter', 'Shopify API', 'WooCommerce API', 'Firebase', 'Apple Pay', 'Google Pay', 'iOS', 'Android'
    ]
  },
  {
    id: 'app-entwicklung',
    title: 'App- & Softwareentwicklung',
    description: 'Von nativen Mobil-Apps bis hin zu komplexen Softwarelösungen – wir entwickeln maßgeschneiderte Anwendungen, die Ihre Geschäftsprozesse optimal unterstützen und Ihren Kunden ein herausragendes Nutzererlebnis bieten.',
    features: [
      'Mobile Apps (iOS & Android)',
      'Cross-Platform Entwicklung',
      'Desktop-Anwendungen',
      'Kundenspezifische Softwarelösungen',
      'UI/UX Design',
      'QA und automatisierte Tests'
    ],
    technologies: [
      'React Native', 'Flutter', 'Swift', 'Kotlin', 'Electron', 'Firebase', 'MongoDB', 'PostgreSQL'
    ]
  },
  {
    id: 'ai-beratung',
    title: 'AI- & Technologieberatung',
    description: 'Die richtige Technologie kann Ihr Unternehmen transformieren. Wir beraten Sie zu den neuesten Entwicklungen in den Bereichen Künstliche Intelligenz, Machine Learning und Automatisierung und entwickeln passgenaue Lösungen für Ihre Herausforderungen.',
    features: [
      'Machine Learning Lösungen',
      'Automatisierung von Geschäftsprozessen',
      'Datenanalyse und Business Intelligence',
      'Natural Language Processing',
      'Computer Vision',
      'Vorhersagemodelle und Predictive Analytics'
    ],
    technologies: [
      'TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'Google Cloud AI', 'Power BI', 'Tableau', 'Python'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloudlösungen & DevOps',
    description: 'Maximieren Sie die Effizienz Ihrer IT-Infrastruktur mit unseren Cloud- und DevOps-Lösungen. Wir helfen Ihnen bei der Migration in die Cloud, optimieren Ihre Entwicklungsprozesse und sorgen für kontinuierliche Integration und Auslieferung.',
    features: [
      'Cloud-Migration und -Infrastruktur',
      'CI/CD Pipelines',
      'Containerisierung mit Docker und Kubernetes',
      'Serverless Architekturen',
      'Infrastructure as Code (IaC)',
      'Monitoring und Logging'
    ],
    technologies: [
      'Azure', 'Google Cloud Platform', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform'
    ]
  }
];

export default function LeistungenPage() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const faqItems = [
    {
      question: "Wie läuft ein typisches Projekt bei Softacc ab?",
      answer: "Wir beginnen mit einer gründlichen Anforderungsanalyse, gefolgt von einer detaillierten Planung und einem Designkonzept. Nach Ihrer Freigabe starten wir mit der Entwicklung, halten Sie während des gesamten Prozesses auf dem Laufenden und führen regelmäßige Feedback-Runden durch. Nach dem Testing und der Qualitätssicherung erfolgt die Auslieferung mit anschließendem Support."
    },
    {
      question: "Welche Projektgrößen können Sie abdecken?",
      answer: "Unser Team ist flexibel aufgestellt und kann sowohl kleinere Projekte als auch umfangreiche Unternehmenslösungen realisieren. Von einer einfachen Landingpage bis hin zu komplexen Anwendungen mit KI-Integration – wir passen unsere Ressourcen an die Anforderungen Ihres Projekts an."
    },
    {
      question: "Wie gewährleisten Sie die Qualität Ihrer Arbeit?",
      answer: "Qualität steht bei uns an erster Stelle. Wir arbeiten nach bewährten Entwicklungsmethoden, setzen auf automatisierte Tests und Code-Reviews und führen umfassende Qualitätssicherungsmaßnahmen durch. Regelmäßige Schulungen sorgen dafür, dass unser Team stets mit den neuesten Technologien und Best Practices vertraut ist."
    }
  ];

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      {/* BreadcrumbList Schema for SEO */}
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Leistungen",
                "item": "https://softacc.ch/leistungen"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Unsere Leistungen</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Entdecken Sie unser umfassendes Angebot an IT- und AI-Lösungen für Ihr Unternehmen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-muted/50 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                  activeTab === service.id
                    ? 'bg-primary text-primary-foreground font-bold shadow-md'
                    : 'bg-card text-card-foreground hover:bg-muted/80'
                }`}
              >
                {service.title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={activeTab === service.id ? 'block' : 'hidden'}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-4xl mx-auto"
              >
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mr-6">
                    <span className="text-lg font-bold">{service.title.charAt(0)}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                </div>

                <p className="text-xl text-muted-foreground mb-10">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                    <h3 className="text-2xl font-bold mb-4">Was wir bieten</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn}
                          className="flex items-start"
                        >
                          <svg
                            className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                    <h3 className="text-2xl font-bold mb-4">Technologien</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={fadeIn}
                          className="inline-block px-3 py-2 bg-muted rounded-md text-sm text-muted-foreground"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="text-center">
                  <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
                    Unverbindliches Beratungsgespräch vereinbaren
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zu unseren Leistungen und Vorgehensweisen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {faqItems.map((faq, index) => (
                <motion.div key={index} variants={fadeIn} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">Lassen Sie uns Ihr Projekt besprechen</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Wir freuen uns darauf, mehr über Ihre Anforderungen zu erfahren und gemeinsam die perfekte Lösung zu entwickeln.
          </p>
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground hover:bg-accent h-10 px-6 py-2">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
} 