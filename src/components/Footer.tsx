'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/softacc', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/softacc', icon: 'linkedin' },
  ];

  // Animation Varianten
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <footer className="bg-muted border-t border-border py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Softacc</h3>
            <p className="mb-4 text-muted-foreground">
              Wir bieten innovative IT- und AI-Lösungen für moderne Unternehmen, die Ihre digitale Transformation vorantreiben.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon === 'github' ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Leistungen</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Webentwicklung', path: '/leistungen#webentwicklung' },
                { name: 'Mobile Apps', path: '/leistungen#app-entwicklung' },
                { name: 'E-Commerce', path: '/leistungen#ecommerce-dropshipping' },
                { name: 'AI-Beratung', path: '/leistungen#ai-beratung' },
                { name: 'Cloudlösungen', path: '/leistungen#cloud-devops' }
              ].map((item) => (
                <motion.div key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link 
                    href={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <svg 
                      className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Leistungen', path: '/leistungen' },
                { name: 'Projekte', path: '/projekte' },
                { name: 'Über uns', path: '/ueber-uns' },
                { name: 'Kontakt', path: '/kontakt' }
              ].map((item) => (
                <motion.div key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link 
                    href={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Softacc</p>
              <p>Fabrikstrasse 4</p>
              <p>8867 Niederurnen</p>
              <p>Schweiz</p>
              <motion.p whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                <a href="mailto:info@softacc.ch" className="text-primary hover:underline transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@softacc.ch
                </a>
              </motion.p>
            </address>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} Softacc. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 