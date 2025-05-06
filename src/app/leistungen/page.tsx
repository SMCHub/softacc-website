'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { ServiceCard } from '../components/ServiceCard';
import { 
  WebDevIcon,
  MobileAppIcon, 
  SoftwareDevIcon, 
  AIConsultingIcon, 
  CloudSolutionsIcon,
  ECommerceIcon
} from '../components/ServiceIcons';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'green' | 'amber' | 'rose';
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
    ],
    icon: <WebDevIcon />,
    color: 'blue'
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
    ],
    icon: <ECommerceIcon />,
    color: 'green'
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
    ],
    icon: <MobileAppIcon />,
    color: 'purple'
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
    ],
    icon: <AIConsultingIcon />,
    color: 'amber'
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
    ],
    icon: <CloudSolutionsIcon />,
    color: 'rose'
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
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-100/50 to-background dark:from-gray-900/50 dark:to-background">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23555555' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Maßgeschneiderte IT-Lösungen
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
              Unsere Leistungen
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80">
              Wir bieten maßgeschneiderte Lösungen für die digitalen Herausforderungen Ihres Unternehmens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                href={`/leistungen#${service.id}`}
                icon={service.icon}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Navigation */}
      <section className="py-8 bg-muted/50 sticky top-16 z-40 backdrop-blur-md border-y border-border/30">
        <div className="container mx-auto px-4">
          <motion.nav 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? `bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-200 dark:to-gray-300 text-white dark:text-gray-900 shadow-md shadow-black/10`
                    : 'bg-card/80 text-card-foreground hover:bg-muted'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {service.title}
              </motion.button>
            ))}
          </motion.nav>
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
                className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 shadow-lg"
              >
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 mr-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
                    {service.title}
                  </h2>
                </div>

                <p className="text-xl text-foreground/80 mb-10 leading-relaxed">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Was wir bieten</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn}
                          className="flex items-start"
                        >
                          <svg
                            className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1 mr-3 flex-shrink-0"
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

                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Technologien</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={fadeIn}
                          className="inline-block px-3 py-2 bg-gray-100/50 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300 rounded-md text-sm border border-gray-200/50 dark:border-gray-700/30"
                          whileHover={{ y: -2, scale: 1.05, transition: { duration: 0.2 } }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="text-center">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-200 dark:to-gray-300 text-white dark:text-gray-900 font-medium shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Unverbindliches Beratungsgespräch vereinbaren
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Häufig gestellte Fragen
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Antworten auf die wichtigsten Fragen zu unseren Leistungen und Vorgehensweisen.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {faqItems.map((faq, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn} 
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-border/50 hover:shadow-lg hover:border-gray-400/20 dark:hover:border-gray-600/20 transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">{faq.question}</h3>
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800 via-gray-900/80"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5"
          style={{ filter: 'blur(80px)' }}
          animate={{ 
            x: [50, -50, 50], 
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5"
          style={{ filter: 'blur(60px)' }}
          animate={{ 
            x: [-30, 30, -30], 
            y: [30, -30, 30],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bereit für Ihr nächstes Projekt?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Wir freuen uns darauf, mehr über Ihre Anforderungen zu erfahren und gemeinsam die perfekte Lösung zu entwickeln.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/kontakt" 
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-medium shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
} 