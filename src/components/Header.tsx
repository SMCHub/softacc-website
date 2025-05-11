'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ui/theme-toggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Leistungen', path: '/leistungen' },
  { name: 'Über uns', path: '/ueber-uns' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Transparenter Header auf der Startseite, der beim Scrollen undurchsichtig wird
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full ${
        isHomePage && !scrolled 
          ? 'bg-background/50 backdrop-blur-md' 
          : 'bg-background border-b border-border'
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span 
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Softacc
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive ? 'page' : undefined}
                tabIndex={0}
              >
                <motion.span
                  className={`relative text-lg font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground'
                }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {isActive && (
                  <motion.span
                      className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary rounded-full"
                    layoutId="navbar-indicator"
                      transition={{ 
                        type: 'spring', 
                        stiffness: 350, 
                        damping: 30 
                      }}
                  />
                )}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden flex items-center justify-center p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleMobileMenu();
              }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
        >
            <motion.nav className="flex flex-col p-4">
              {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                <Link
                  href={item.path}
                      className={`flex items-center py-3 px-4 text-lg font-medium rounded-md ${
                        isActive 
                          ? 'text-primary bg-primary/10' 
                          : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          window.location.href = item.path;
                        }
                      }}
                >
                  {item.name}
                      {isActive && (
                        <motion.span
                          className="ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.span>
                      )}
                </Link>
                  </motion.div>
              );
            })}
              
              {/* Zusätzliche Informationen im mobilen Menü */}
              <motion.div
                className="mt-6 pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-sm text-muted-foreground px-4 py-2">
                  <p>Haben Sie Fragen oder möchten ein Projekt besprechen?</p>
                  <Link 
                    href="/kontakt" 
                    className="text-primary font-medium mt-2 inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontaktieren Sie uns →
                  </Link>
                </div>
              </motion.div>
            </motion.nav>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
} 