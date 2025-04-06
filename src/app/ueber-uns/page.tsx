'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ValueProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: ValueProps[] = [
  {
    title: 'Innovation',
    description: 'Wir setzen auf modernste Technologien und kreative Lösungsansätze, um Ihnen stets einen Schritt voraus zu sein.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
        <path d="m12 17 2-2-2-2" />
        <path d="M8 17h6" />
      </svg>
    )
  },
  {
    title: 'Qualität',
    description: 'Unsere Lösungen entsprechen höchsten Standards in Bezug auf Performance, Sicherheit und Benutzerfreundlichkeit.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    )
  },
  {
    title: 'Partnerschaft',
    description: 'Wir verstehen uns als langfristiger Partner, der gemeinsam mit Ihnen wächst und Ihre Ziele verwirklicht.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M16 16h.01" />
        <path d="M8 16h.01" />
        <path d="M12 2v8" />
        <path d="M8.2 10.8 4 14.4V18h16v-3.6l-4.2-3.6" />
        <path d="M17 18s-1 2-5 2-5-2-5-2" />
      </svg>
    )
  },
  {
    title: 'Transparenz',
    description: 'Offene Kommunikation und klare Prozesse schaffen Vertrauen und garantieren erfolgreiche Projekte.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];

export default function UeberUnsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Über Softacc</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Wir verbinden technologische Expertise mit innovativem Denken, um die digitale Zukunft zu gestalten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Softacc wurde mit der Vision gegründet, Unternehmen aller Größen dabei zu unterstützen, das volle Potenzial moderner Technologien auszuschöpfen. Was als kleines Team von Technologie-Enthusiasten begann, hat sich zu einem vielseitigen Unternehmen entwickelt, das innovative IT- und AI-Lösungen anbietet.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unsere Erfahrung in der Entwicklung von webbasierten und mobilen Anwendungen, kombiniert mit unserem Fachwissen in künstlicher Intelligenz und Cloud-Technologien, ermöglicht es uns, ganzheitliche Lösungen zu schaffen, die reale Geschäftsprobleme lösen.
              </p>
              <p className="text-lg text-muted-foreground">
                Heute arbeiten wir mit Kunden aus verschiedenen Branchen zusammen und helfen ihnen, ihre digitale Transformation erfolgreich zu gestalten und im digitalen Zeitalter wettbewerbsfähig zu bleiben.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-muted/30"
            >
              <div className="flex items-center justify-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary/50"
                >
                  <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                  <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                  <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Unsere Werte
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Diese Grundsätze leiten unsere Arbeit und definieren unsere Unternehmenskultur.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-8 rounded-lg shadow-sm border border-border flex flex-col items-center text-center"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Unsere Vision
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Wir streben danach, ein führender Innovator im Bereich der digitalen Transformation zu sein und Unternehmen aller Größen zu befähigen, durch den strategischen Einsatz von Technologie ihr volles Potenzial zu entfalten.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 text-left"
            >
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Technologische Exzellenz</h3>
                <p className="text-muted-foreground">
                  Wir investieren kontinuierlich in die Weiterbildung unseres Teams und in die Erforschung neuer Technologien, um stets erstklassige und zukunftssichere Lösungen anbieten zu können.
                </p>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Nachhaltiger Erfolg</h3>
                <p className="text-muted-foreground">
                  Unsere Lösungen sind darauf ausgerichtet, langfristigen Mehrwert zu schaffen und unseren Kunden zu helfen, in einer sich ständig verändernden digitalen Landschaft erfolgreich zu sein.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Focus Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary-foreground"
            >
              Unser Blick in die Zukunft
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center bg-primary-foreground/10 p-6 rounded-lg"
              >
                <div className="mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-foreground"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-foreground">Emerging Technologies</h3>
                <p className="text-primary-foreground/80">
                  Wir erforschen kontinuierlich aufkommende Technologien wie Quantum Computing, Extended Reality und fortschrittliche KI-Systeme, um unseren Kunden Zugang zu bahnbrechenden Innovationen zu bieten.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center bg-primary-foreground/10 p-6 rounded-lg"
              >
                <div className="mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-foreground"
                  >
                    <path d="M2 22a22.3 22.3 0 0 1 10-3" />
                    <path d="M12 19a22.3 22.3 0 0 1 10 3" />
                    <path d="M5 17a22.3 22.3 0 0 1 7-2" />
                    <path d="M12 15a22.3 22.3 0 0 1 7 2" />
                    <path d="M8 13a22.3 22.3 0 0 1 4-1" />
                    <path d="M12 12a22.3 22.3 0 0 1 4 1" />
                    <path d="M12 2v10" />
                    <path d="M9 4.6a9.1 9.1 0 0 0-7.2 6.6" />
                    <path d="M15 4.6a9.1 9.1 0 0 1 7.2 6.6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-foreground">Nachhaltigkeit</h3>
                <p className="text-primary-foreground/80">
                  Wir setzen uns für die Entwicklung nachhaltiger digitaler Lösungen ein, die Ressourcen schonen und Unternehmen helfen, ihre ökologischen Ziele zu erreichen.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center bg-primary-foreground/10 p-6 rounded-lg"
              >
                <div className="mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-foreground"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M8 16H3v5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-foreground">Kontinuierliche Innovation</h3>
                <p className="text-primary-foreground/80">
                  Unsere eigene F&E-Abteilung arbeitet an innovativen Lösungen und Frameworks, die die Entwicklung zukunftssicherer Anwendungen ermöglichen.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-10 px-6 py-2">
                Kontaktieren Sie uns
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 