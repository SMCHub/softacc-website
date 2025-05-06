'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { ServiceCard } from './components/ServiceCard';
import { 
  WebDevIcon,
  MobileAppIcon, 
  SoftwareDevIcon, 
  AIConsultingIcon, 
  CloudSolutionsIcon,
  ECommerceIcon
} from './components/ServiceIcons';

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
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 w-full flex items-center justify-center bg-white overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={image}
            alt={title}
            width={image.includes('svg') ? 160 : 0}
            height={image.includes('svg') ? 60 : 0}
            fill={!image.includes('svg')}
            style={{ objectFit: image.includes('svg') ? 'contain' : 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mt-auto">
          <motion.span 
            className="text-primary font-medium flex items-center"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
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
          </motion.span>
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

// Digitale-Lösungen-Netzwerk-Komponente für den ersten Slide
const DigitalSolutionsVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Netzwerkknoten für digitale Lösungen
  const nodes = [
    { id: 1, x: 20, y: 20, label: "Web" },
    { id: 2, x: 80, y: 30, label: "Apps" },
    { id: 3, x: 30, y: 70, label: "Cloud" },
    { id: 4, x: 70, y: 80, label: "API" },
    { id: 5, x: 45, y: 50, label: "Digital" },
    { id: 6, x: 60, y: 40, label: "UI/UX" },
    { id: 7, x: 25, y: 40, label: "DevOps" }
  ];
  
  // Bewegliche Maus-X,Y-Koordinaten
  const mouseX = useMotionValue(dimensions.width / 2);
  const mouseY = useMotionValue(dimensions.height / 2);
  
  // Aktualisiere die Maße, wenn die Komponente geladen wird
  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
      
      mouseX.set(containerRef.current.offsetWidth / 2);
      mouseY.set(containerRef.current.offsetHeight / 2);
    }
    
    // Überwache Größenänderungen
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Verfolge die Mausbewegung
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    }
  };
  
  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-[300px] mt-6 mb-12 overflow-hidden rounded-xl opacity-80"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    >
      {/* Netzwerkverbindungen */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="digitalLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Zentrale Verbindungen */}
        {nodes.filter(n => n.id !== 5).map(node => (
          <motion.line
            key={`line-${node.id}-to-center`}
            x1={`${nodes[4].x}%`}
            y1={`${nodes[4].y}%`}
            x2={`${node.x}%`}
            y2={`${node.y}%`}
            stroke="url(#digitalLineGradient)"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              pathLength: 1
            }}
            transition={{ 
              opacity: { 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity 
              },
              pathLength: { 
                duration: 1, 
                delay: node.id * 0.2 
              }
            }}
          />
        ))}
        
        {/* Zusätzliche Verbindungen */}
        <motion.line
          x1={`${nodes[0].x}%`}
          y1={`${nodes[0].y}%`}
          x2={`${nodes[1].x}%`}
          y2={`${nodes[1].y}%`}
          stroke="url(#digitalLineGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line
          x1={`${nodes[2].x}%`}
          y1={`${nodes[2].y}%`}
          x2={`${nodes[3].x}%`}
          y2={`${nodes[3].y}%`}
          stroke="url(#digitalLineGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.line
          x1={`${nodes[1].x}%`}
          y1={`${nodes[1].y}%`}
          x2={`${nodes[5].x}%`}
          y2={`${nodes[5].y}%`}
          stroke="url(#digitalLineGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <motion.line
          x1={`${nodes[6].x}%`}
          y1={`${nodes[6].y}%`}
          x2={`${nodes[0].x}%`}
          y2={`${nodes[0].y}%`}
          stroke="url(#digitalLineGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        />
        
        {/* Maus-Interaktions-Linien */}
        {mousePosition.x > 0 && nodes.map(node => (
          <motion.line
            key={`mouse-line-${node.id}`}
            x1={`${node.x}%`}
            y1={`${node.y}%`}
            x2={mousePosition.x}
            y2={mousePosition.y}
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: dimensions.width > 0 ? 
                Math.max(0, 1 - (Math.hypot(
                  (node.x / 100 * dimensions.width) - mousePosition.x,
                  (node.y / 100 * dimensions.height) - mousePosition.y
                ) / 150)) : 0
            }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </svg>
      
      {/* Netzwerkknoten */}
      {nodes.map(node => (
        <motion.div
          key={`node-${node.id}`}
          className={`absolute rounded-full flex items-center justify-center
            ${node.id === 5 ? 
              'bg-gradient-to-r from-blue-600 to-blue-500 text-white w-14 h-14' : 
              'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 w-10 h-10'
            }`}
          style={{
            left: `calc(${node.x}% - ${node.id === 5 ? '28px' : '20px'})`,
            top: `calc(${node.y}% - ${node.id === 5 ? '28px' : '20px'})`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: dimensions.width > 0 ? 
              (mousePosition.x - (node.x / 100 * dimensions.width)) * 0.02 : 0,
            y: dimensions.height > 0 ? 
              (mousePosition.y - (node.y / 100 * dimensions.height)) * 0.02 : 0
          }}
          transition={{
            scale: { duration: 0.6, delay: node.id * 0.1 },
            opacity: { duration: 0.6, delay: node.id * 0.1 },
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 }
          }}
          whileHover={{ scale: 1.2 }}
        >
          <span className={`text-xs font-medium ${node.id === 5 ? 'text-white' : ''}`}>
            {node.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

// E-Commerce-App-Visualisierungs-Komponente für den zweiten Slide
const ECommerceAppVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // App-Screen-Elemente
  const screens = [
    { id: 1, x: 25, y: 40, type: "shop", scale: 1.0 },
    { id: 2, x: 65, y: 30, type: "cart", scale: 0.9 },
    { id: 3, x: 45, y: 70, type: "payment", scale: 0.85 },
    { id: 4, x: 80, y: 65, type: "confirm", scale: 0.8 }
  ];
  
  // Bewegliche Maus-X,Y-Koordinaten
  const mouseX = useMotionValue(dimensions.width / 2);
  const mouseY = useMotionValue(dimensions.height / 2);
  
  // Aktualisiere die Maße, wenn die Komponente geladen wird
  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
      
      mouseX.set(containerRef.current.offsetWidth / 2);
      mouseY.set(containerRef.current.offsetHeight / 2);
    }
    
    // Überwache Größenänderungen
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Verfolge die Mausbewegung
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    }
  };
  
  // Rendere einen App-Screen mit dem entsprechenden Inhalt
  const renderAppScreen = (type: string) => {
    switch(type) {
      case "shop":
        return (
          <div className="p-2 flex flex-col h-full">
            <div className="w-full h-4 mb-2 bg-blue-100 dark:bg-blue-800/40 rounded-full"></div>
            <div className="grid grid-cols-2 gap-2 flex-grow">
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={`shop-item-${i}`} 
                  className="bg-blue-100 dark:bg-blue-800/40 rounded-lg p-1 flex flex-col"
                >
                  <div className="w-full h-12 mb-1 bg-blue-200 dark:bg-blue-700/40 rounded"></div>
                  <div className="w-3/4 h-2 bg-blue-200 dark:bg-blue-700/40 rounded-full mb-1"></div>
                  <div className="w-1/2 h-2 bg-blue-200 dark:bg-blue-700/40 rounded-full"></div>
                </div>
              ))}
            </div>
            <div className="w-full h-6 mt-2 bg-blue-400 dark:bg-blue-600/80 rounded-full"></div>
          </div>
        );
      case "cart":
        return (
          <div className="p-2 flex flex-col h-full">
            <div className="w-full h-4 mb-2 bg-blue-100 dark:bg-blue-800/40 rounded-full"></div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={`cart-item-${i}`} 
                className="flex items-center mb-2 bg-blue-100 dark:bg-blue-800/40 rounded-lg p-1"
              >
                <div className="w-10 h-10 mr-2 bg-blue-200 dark:bg-blue-700/40 rounded"></div>
                <div className="flex-grow">
                  <div className="w-3/4 h-2 bg-blue-200 dark:bg-blue-700/40 rounded-full mb-1"></div>
                  <div className="w-1/2 h-2 bg-blue-200 dark:bg-blue-700/40 rounded-full"></div>
                </div>
              </div>
            ))}
            <div className="mt-auto flex justify-between items-center">
              <div className="w-1/3 h-3 bg-blue-200 dark:bg-blue-700/40 rounded-full"></div>
              <div className="w-1/4 h-5 bg-blue-400 dark:bg-blue-600/80 rounded-full"></div>
            </div>
            <div className="w-full h-6 mt-2 bg-blue-400 dark:bg-blue-600/80 rounded-full"></div>
          </div>
        );
      case "payment":
        return (
          <div className="p-2 flex flex-col h-full">
            <div className="w-full h-4 mb-2 bg-blue-100 dark:bg-blue-800/40 rounded-full"></div>
            <div className="w-full h-10 mb-2 bg-blue-100 dark:bg-blue-800/40 rounded-lg"></div>
            <div className="w-full h-6 mb-2 bg-blue-100 dark:bg-blue-800/40 rounded-lg"></div>
            <div className="flex justify-between mb-2">
              <div className="w-[48%] h-8 bg-blue-100 dark:bg-blue-800/40 rounded-lg"></div>
              <div className="w-[48%] h-8 bg-blue-100 dark:bg-blue-800/40 rounded-lg"></div>
            </div>
            <div className="w-full h-8 mb-2 bg-blue-100 dark:bg-blue-800/40 rounded-lg"></div>
            <div className="mt-auto w-full h-6 bg-blue-400 dark:bg-blue-600/80 rounded-full"></div>
          </div>
        );
      case "confirm":
        return (
          <div className="p-2 flex flex-col h-full justify-center items-center">
            <div className="w-16 h-16 mb-3 rounded-full bg-blue-400 dark:bg-blue-600/80 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="w-3/4 h-3 mb-1 bg-blue-100 dark:bg-blue-800/40 rounded-full"></div>
            <div className="w-1/2 h-3 mt-1 mb-3 bg-blue-100 dark:bg-blue-800/40 rounded-full"></div>
            <div className="w-full h-6 mt-2 bg-blue-400 dark:bg-blue-600/80 rounded-full"></div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-[300px] mt-6 mb-12 overflow-hidden rounded-xl opacity-90"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Verbindungslinien zwischen Apps */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="ecommerceLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.5)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0.3)" />
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" 
            markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(37, 99, 235, 0.5)" />
          </marker>
        </defs>
        
        {/* Prozessfluss-Pfeile */}
        <motion.path
          d={`M ${screens[0].x}% ${screens[0].y}% Q ${(screens[0].x + screens[1].x) / 2}% ${screens[0].y - 15}%, ${screens[1].x}% ${screens[1].y}%`}
          fill="none"
          stroke="url(#ecommerceLineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.path
          d={`M ${screens[1].x}% ${screens[1].y}% Q ${(screens[1].x + screens[2].x) / 2}% ${(screens[1].y + screens[2].y) / 2 - 15}%, ${screens[2].x}% ${screens[2].y}%`}
          fill="none"
          stroke="url(#ecommerceLineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.path
          d={`M ${screens[2].x}% ${screens[2].y}% Q ${(screens[2].x + screens[3].x) / 2}% ${(screens[2].y + screens[3].y) / 2 + 15}%, ${screens[3].x}% ${screens[3].y}%`}
          fill="none"
          stroke="url(#ecommerceLineGradient)"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
      </svg>
      
      {/* App-Screens */}
      {screens.map((screen) => (
        <motion.div
          key={`screen-${screen.id}`}
          className="absolute bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-blue-300 dark:border-blue-700"
          style={{
            width: 130 * screen.scale,
            height: 230 * screen.scale,
            left: `calc(${screen.x}% - ${65 * screen.scale}px)`,
            top: `calc(${screen.y}% - ${115 * screen.scale}px)`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: screen.scale, 
            opacity: 1,
            x: dimensions.width > 0 ? 
              (mousePosition.x - (screen.x / 100 * dimensions.width)) * 0.01 : 0,
            y: dimensions.height > 0 ? 
              (mousePosition.y - (screen.y / 100 * dimensions.height)) * 0.01 : 0
          }}
          transition={{
            scale: { duration: 0.6, delay: screen.id * 0.2 },
            opacity: { duration: 0.6, delay: screen.id * 0.2 },
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 }
          }}
          whileHover={{ 
            scale: screen.scale * 1.1,
            zIndex: 10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* App-Statusleiste */}
          <div className="w-full h-6 bg-blue-500 dark:bg-blue-600 flex items-center justify-between px-2">
            <div className="w-10 h-2 bg-white/70 rounded-full"></div>
            <div className="w-6 h-2 bg-white/70 rounded-full"></div>
          </div>
          
          {/* App-Inhalt basierend auf dem Typ */}
          {renderAppScreen(screen.type)}
        </motion.div>
      ))}
      
      {/* "Kaufen" Floating Button */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-medium shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
        whileTap={{ scale: 0.98 }}
      >
        E-Commerce App erstellen
      </motion.div>
    </motion.div>
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
      gradient: "from-purple-200/60 to-indigo-100/40"
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
  
  // Animierte KI-Elemente für den dritten Slide
  const aiPatterns = [
    { x: -5, y: 10, delay: 0, size: 80 },
    { x: 30, y: -15, delay: 0.5, size: 120 },
    { x: -25, y: -25, delay: 1, size: 100 },
    { x: 15, y: 25, delay: 1.5, size: 90 },
    { x: 40, y: 5, delay: 2, size: 70 }
  ];
  
  useEffect(() => {
    // Slider für Hero-Bereich
    const heroTimer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 10000); // Alle 10 Sekunden wechseln
    
    // Slider für App-Bereich
    const appTimer = setTimeout(() => {
      setCurrentAppSlide((prevSlide) => (prevSlide + 1) % appSlides.length);
    }, 10000); // Alle 10 Sekunden wechseln
    
    // Slider für Projekte-Bereich
    const projectTimer = setTimeout(() => {
      setCurrentProjectSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 10000); // Alle 10 Sekunden wechseln
    
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

      {/* Hero Section mit verbesserten Animationen für den KI-Slide */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className={`absolute inset-0 bg-gradient-to-r ${
                  index === 0 
                    ? "from-gray-100/60 to-gray-50/40" 
                    : index === 1 
                      ? "from-gray-200/60 to-gray-100/40" 
                      : "from-gray-300/60 to-gray-200/40"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              />
            )
          ))}
        </AnimatePresence>
        
        {/* Mobile E-Commerce Apps - Hintergrundanimationen (nur für Slide 1 sichtbar) */}
        {currentSlide === 1 && (
          <>
            {Array.from({ length: 20 }).map((_, index) => (
              <motion.div
                key={`ecommerce-dot-${index}`}
                className="absolute rounded-full bg-gray-400 dark:bg-gray-500"
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  y: [0, -30, 0],
                  x: [0, Math.random() * 10 - 5, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/10 to-transparent dark:via-gray-800/10"></div>
          </>
        )}

        {/* KI-gestützte Technologien - Hintergrundanimationen (nur für Slide 2 sichtbar) */}
        {currentSlide === 2 && (
          <>
            {aiPatterns.map((pattern, index) => (
              <motion.div
                key={`ai-pattern-${index}`}
                className="absolute rounded-lg bg-gradient-to-br from-gray-300/20 to-gray-400/10 dark:from-gray-700/20 dark:to-gray-600/10"
                style={{
                  width: pattern.size,
                  height: pattern.size,
                  left: `${50 + pattern.x}%`,
                  top: `${50 + pattern.y}%`,
                  transformOrigin: "center",
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ 
                  opacity: [0.2, 0.3, 0.2],
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  delay: pattern.delay
                }}
              />
            ))}
          </>
        )}
        
        <div className="container mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {heroSlides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={index}
                  className="text-center max-w-3xl mx-auto px-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20
                  }}
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
                  {/* Mobile E-Commerce Apps spezieller Slide - Zweiter Slide */}
                  {index === 1 ? (
                    <>
                      <motion.div
                        className="mb-6 inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0, duration: 0.5 }}
                      >
                        <motion.div 
                          className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-300 text-sm font-medium"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.svg 
                            className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" 
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{ 
                              rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{ 
                              duration: 5, 
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                          Mobile Apps
                        </motion.div>
                      </motion.div>
                      
                      <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p 
                        className="text-xl md:text-2xl text-muted-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>
                      
                      {/* Interaktive E-Commerce-App-Visualisierung */}
                      <ECommerceAppVisualization />
                      
                      <motion.div 
                        className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <div className="w-full md:w-auto">
                          <Button asChild size="lg" className="w-full md:w-auto bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700">
                            <motion.div 
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center"
                            >
                              <Link href="/kontakt" className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Kontakt aufnehmen
                              </Link>
                            </motion.div>
                          </Button>
                        </div>
                        <div className="w-full md:w-auto">
                          <Button asChild variant="outline" size="lg" className="w-full md:w-auto border-gray-300 dark:border-gray-700">
                            <motion.div 
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center"
                            >
                              <Link href="/leistungen" className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Unsere Leistungen
                              </Link>
                            </motion.div>
                          </Button>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-wrap justify-center mt-8 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        {["iOS Apps", "Android Apps", "Shopify", "WooCommerce", "Push-Benachrichtigungen", "Zahlungssysteme"].map((tag, i) => (
                          <motion.span 
                            key={tag}
                            className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(75, 85, 99, 0.2)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </>
                  ) : Number(index) === 0 ? (
                    <>
                      <motion.div
                        className="mb-6 inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0, duration: 0.5 }}
                      >
                        <motion.div 
                          className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-300 text-sm font-medium"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.svg 
                            className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" 
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{ 
                              rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{ 
                              duration: 5, 
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                          Digitale Lösungen
                        </motion.div>
                      </motion.div>
                      
                      <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p 
                        className="text-xl md:text-2xl text-muted-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>
                      
                      <DigitalSolutionsVisualization />
                      
                      <motion.div 
                        className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <div className="w-full md:w-auto">
                          <Button asChild size="lg" className="w-full md:w-auto bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700">
                            <motion.div 
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center"
                            >
                              <Link href="/kontakt" className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Kontakt aufnehmen
                              </Link>
                            </motion.div>
                          </Button>
                        </div>
                        <div className="w-full md:w-auto">
                          <Button asChild variant="outline" size="lg" className="w-full md:w-auto border-gray-300 dark:border-gray-700">
                            <motion.div 
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center"
                            >
                              <Link href="/leistungen" className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Unsere Leistungen
                              </Link>
                            </motion.div>
                          </Button>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-wrap justify-center mt-8 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        {["ReactJS", "NextJS", "REST APIs", "Cloud", "Serverless", "DevOps"].map((tag, i) => (
                          <motion.span 
                            key={tag}
                            className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(75, 85, 99, 0.2)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="mb-6 inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0, duration: 0.5 }}
                      >
                        <motion.div 
                          className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-300 text-sm font-medium"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.svg 
                            className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" 
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{ 
                              rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{ 
                              duration: 5, 
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                          KI-Technologien
                        </motion.div>
                      </motion.div>
                      
                      <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p 
                        className="text-xl md:text-2xl text-muted-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>
                      
                      {/* KI-Netzwerk-Visualisierung */}
                      <motion.div 
                        className="relative w-full h-[300px] mt-6 mb-12 overflow-hidden rounded-xl opacity-90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        {/* KI-Netzwerk-Visualisierung */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Neuronales Netzwerk Visualisierung */}
                          <div className="relative w-full h-full">
                            {/* Zentrale KI-Node */}
                            <motion.div
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-500/20 dark:bg-gray-400/20 flex items-center justify-center z-30"
                              animate={{ 
                                boxShadow: ['0 0 0 0 rgba(75, 85, 99, 0.2)', '0 0 0 15px rgba(75, 85, 99, 0)', '0 0 0 0 rgba(75, 85, 99, 0.2)'],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <span className="text-gray-700 dark:text-gray-300 font-bold">AI</span>
                            </motion.div>
                            
                            {/* KI-Cluster-Nodes */}
                            {aiPatterns.map((pattern, index) => (
                              <motion.div
                                key={`ai-node-${index}`}
                                className="absolute rounded-full border border-gray-300/50 dark:border-gray-600/50 flex items-center justify-center"
                                style={{
                                  width: pattern.size / 3,
                                  height: pattern.size / 3,
                                  left: `calc(50% + ${pattern.x * 3}px)`,
                                  top: `calc(50% + ${pattern.y * 3}px)`,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ 
                                  opacity: [0.5, 0.8, 0.5],
                                  scale: [0.8, 1, 0.8],
                                }}
                                transition={{
                                  duration: 3 + index,
                                  repeat: Infinity,
                                  delay: pattern.delay
                                }}
                              >
                                <span className="text-gray-600 dark:text-gray-400 text-xs">{
                                  ['ML', 'NLP', 'CV', 'RL', 'NN'][index % 5]
                                }</span>
                              </motion.div>
                            ))}
                            
                            {/* Verbindungslinien */}
                            <svg className="absolute inset-0 w-full h-full z-10">
                              <defs>
                                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="rgba(75, 85, 99, 0.1)" />
                                  <stop offset="50%" stopColor="rgba(75, 85, 99, 0.3)" />
                                  <stop offset="100%" stopColor="rgba(75, 85, 99, 0.1)" />
                                </linearGradient>
                              </defs>
                              
                              {aiPatterns.map((pattern, index) => (
                                <motion.line
                                  key={`ai-line-${index}`}
                                  x1="50%"
                                  y1="50%"
                                  x2={`calc(50% + ${pattern.x * 3}px)`}
                                  y2={`calc(50% + ${pattern.y * 3}px)`}
                                  stroke="url(#aiGradient)"
                                  strokeWidth="1"
                                  initial={{ pathLength: 0, opacity: 0 }}
                                  animate={{ 
                                    pathLength: 1, 
                                    opacity: [0.3, 0.6, 0.3] 
                                  }}
                                  transition={{
                                    pathLength: { duration: 1.5, delay: pattern.delay * 0.5 },
                                    opacity: { duration: 2 + index, repeat: Infinity }
                                  }}
                                />
                              ))}
                              
                              {/* Sekundäre Verbindungslinien */}
                              {[
                                [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
                                [0, 2], [1, 3], [2, 4]
                              ].map(([start, end], index) => (
                                <motion.line
                                  key={`secondary-line-${index}`}
                                  x1={`calc(50% + ${aiPatterns[start].x * 3}px)`}
                                  y1={`calc(50% + ${aiPatterns[start].y * 3}px)`}
                                  x2={`calc(50% + ${aiPatterns[end].x * 3}px)`}
                                  y2={`calc(50% + ${aiPatterns[end].y * 3}px)`}
                                  stroke="url(#aiGradient)"
                                  strokeWidth="0.5"
                                  strokeDasharray="3,3"
                                  initial={{ pathLength: 0, opacity: 0 }}
                                  animate={{ 
                                    pathLength: 1, 
                                    opacity: 0.3
                                  }}
                                  transition={{
                                    pathLength: { duration: 2, delay: 1 + index * 0.2 },
                                    opacity: { duration: 2, delay: 1 + index * 0.2 }
                                  }}
                                />
                              ))}
                            </svg>
                            
                            {/* Pulsierende Daten-Partikel auf den Linien */}
                            {aiPatterns.map((pattern, patternIndex) => (
                              <motion.div
                                key={`data-particle-${patternIndex}`}
                                className="absolute rounded-full w-2 h-2 bg-gray-400 dark:bg-gray-500"
                                style={{
                                  left: '50%',
                                  top: '50%',
                                }}
                                initial={{ scale: 0 }}
                                animate={{ 
                                  x: [0, pattern.x * 3],
                                  y: [0, pattern.y * 3],
                                  scale: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: patternIndex * 0.8,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <div className="w-full md:w-auto">
                          <Button asChild size="lg" className="w-full md:w-auto bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700">
                            <motion.div 
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center"
                            >
                              <Link href="/kontakt" className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Kontakt aufnehmen
                              </Link>
                            </motion.div>
                          </Button>
                        </div>
                        <div className="w-full md:w-auto">
                          <Button asChild variant="outline" size="lg" className="w-full md:w-auto border-gray-300 dark:border-gray-700">
                            <motion.div 
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center"
                            >
                              <Link href="/leistungen" className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Unsere Leistungen
                              </Link>
                            </motion.div>
                          </Button>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-wrap justify-center mt-8 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        {["Machine Learning", "NLP", "Computer Vision", "Analytics", "Automatisierung", "Cloud AI"].map((tag, i) => (
                          <motion.span 
                            key={tag}
                            className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(75, 85, 99, 0.2)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </>
                  )}
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          <div className="flex justify-center mt-8">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === currentSlide 
                    ? "bg-gray-600 dark:bg-gray-400" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute left-0 right-0 flex justify-between items-center px-8 md:px-16 top-1/2 transform -translate-y-1/2">
            <motion.button 
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="bg-gray-800/80 shadow-lg hover:bg-gray-700 p-3 rounded-full text-white transition-colors z-20 w-12 h-12 flex items-center justify-center border border-gray-700"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Vorheriger Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="bg-gray-800/80 shadow-lg hover:bg-gray-700 p-3 rounded-full text-white transition-colors z-20 w-12 h-12 flex items-center justify-center border border-gray-700"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Nächster Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">Unsere Leistungen</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir bieten maßgeschneiderte Lösungen für die digitalen Herausforderungen Ihres Unternehmens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Webentwicklung"
              description="Moderne Webentwicklung mit Next.js, React und API-first Ansatz für performante und skalierbare Anwendungen."
              href="/leistungen#webentwicklung"
              icon={<WebDevIcon />}
              color="blue"
            />
            <ServiceCard
              title="Mobile E-Commerce Apps"
              description="Native iOS und Android Apps mit nahtloser Anbindung an Ihre bestehende Shopify oder WooCommerce Webseite."
              href="/leistungen#ecommerce-dropshipping"
              icon={<ECommerceIcon />}
              color="green"
            />
            <ServiceCard
              title="App- & Softwareentwicklung"
              description="Entwicklung von mobilen und webbasierten Anwendungen für verschiedene Plattformen mit modernen Technologien."
              href="/leistungen#app-entwicklung"
              icon={<MobileAppIcon />}
              color="purple"
            />
            <ServiceCard
              title="AI- & Technologieberatung"
              description="Beratung zu Machine Learning, Automatisierung und Prozessoptimierung für zukunftssichere Technologielösungen."
              href="/leistungen#ai-beratung"
              icon={<AIConsultingIcon />}
              color="amber"
            />
            <ServiceCard
              title="Cloudlösungen & DevOps"
              description="CI/CD, Azure, GCP und Serverless Lösungen für optimale Entwicklungsworkflows und Betriebseffizienz."
              href="/leistungen#cloud-devops"
              icon={<CloudSolutionsIcon />}
              color="rose"
            />
          </div>
        </div>
      </section>

      {/* Verbesserte E-Commerce & Dropshipping Highlight Section */}
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
                transition={{ duration: 1.5 }}
              />
            )
          ))}
        </AnimatePresence>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile E-Commerce Apps</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformieren Sie Ihren Online-Shop in eine leistungsstarke mobile App und erreichen Sie Ihre Kunden überall und jederzeit.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatePresence mode="wait">
              {appSlides.map((slide, index) => (
                index === currentAppSlide && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 80, 
                      damping: 17 
                    }}
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
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {slide.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-muted-foreground mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.ul 
                      className="space-y-3 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {slide.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + featureIndex * 0.1, duration: 0.3 }}
                        >
                          <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <Link href="/leistungen#ecommerce-dropshipping" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
                        <motion.span 
                          whileHover={{ x: 5 }} 
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center"
                        >
                          Mehr erfahren
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              {appSlides.map((slide, index) => (
                index === currentAppSlide && (
                  <motion.div
                    key={`image-${index}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 80, 
                      damping: 17,
                      delay: 0.2
                    }}
                    className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border border-border"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 z-10 rounded-lg flex items-center justify-center">
                      <motion.div 
                        className="bg-background/90 p-6 rounded-lg max-w-md mx-4 shadow-lg border border-border"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      >
                        <h3 className="text-2xl font-bold mb-3">Perfekt für Ihren Online-Shop</h3>
                        <p className="text-muted-foreground mb-4">
                          Mit einer maßgeschneiderten App können Ihre Kunden jederzeit und überall in Ihrem Shop einkaufen. 
                          Wir entwickeln Ihre App in nur wenigen Wochen und kümmern uns um alle technischen Details - 
                          von der API-Integration bis zur Veröffentlichung in den App Stores.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["iOS", "Android", "Shopify", "WooCommerce", "API"].map((tag, i) => (
                            <motion.span 
                              key={i}
                              className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800/30 text-gray-800 dark:text-gray-300 rounded-full text-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(75, 85, 99, 0.2)" }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-12">
            {appSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentAppSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === currentAppSlide ? "bg-gray-600 dark:bg-gray-400" : "bg-gray-300 dark:bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`App Slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute left-0 right-0 flex justify-between items-center px-8 md:px-16 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <motion.button 
              onClick={() => setCurrentAppSlide((prev) => (prev === 0 ? appSlides.length - 1 : prev - 1))}
              className="bg-gray-800/80 shadow-lg hover:bg-gray-700 p-3 rounded-full text-white transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-700"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Vorheriger App Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              onClick={() => setCurrentAppSlide((prev) => (prev + 1) % appSlides.length)}
              className="bg-gray-800/80 shadow-lg hover:bg-gray-700 p-3 rounded-full text-white transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-700"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Nächster App Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* Neue Zahlungssysteme & Checkout-Prozess Sektion */}
      <section className="py-20 bg-gradient-to-br from-background to-gray-50 dark:from-background dark:to-gray-900/20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 17 
              }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Zahlungssysteme & Checkout-Prozess
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                Optimieren Sie den Kaufprozess mit einer schnellen und sicheren Checkout-Erfahrung. Integrieren Sie Apple Pay, Google Pay und andere beliebte Zahlungsmethoden für maximale Conversion.
              </motion.p>
              
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {[
                  "Integration von Apple Pay und Google Pay",
                  "Gespeicherte Zahlungsmethoden und Versandinformationen",
                  "Schneller Checkout mit einem Klick",
                  "Sichere Transaktionen und Datenschutz"
                ].map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + featureIndex * 0.1, duration: 0.3 }}
                  >
                    <div className="min-w-5 mt-0.5 mr-3">
                      <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <Link href="/leistungen#payment-systems">
                  <motion.button 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-2">Mehr erfahren</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        ease: "easeInOut" 
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 17,
                delay: 0.2
              }}
            >
              {/* Checkout Card */}
              <motion.div 
                className="relative mx-auto max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-10 overflow-hidden"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-5 text-gray-800 dark:text-gray-200">Perfekt für Ihren Online-Shop</h3>
                  
                  <div className="mb-8 space-y-5">
                    <p className="text-gray-700 dark:text-gray-300">
                      Mit einer maßgeschneiderten App können Ihre Kunden jederzeit und überall in Ihrem Shop einkaufen. Wir entwickeln Ihre App in nur wenigen Wochen und kümmern uns um alle technischen Details - von der API-Integration bis zur Veröffentlichung in den App Stores.
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Zahlungsmethoden</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Sicher & schnell</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["iOS", "Android", "Shopify", "WooCommerce", "API"].map((tag, i) => (
                          <motion.span 
                            key={i}
                            className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300 rounded-full text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(75, 85, 99, 0.2)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Interactive Payment Methods */}
                      <div className="grid grid-cols-3 gap-3">
                        <motion.div
                          className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center cursor-pointer"
                          whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                            backgroundColor: "#f9fafb"
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="none">
                            <path d="M7 15h3m3 0h1M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </motion.div>
                        
                        <motion.div
                          className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center cursor-pointer"
                          whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                            backgroundColor: "#f9fafb"
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 9H9V15H15V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                        
                        <motion.div
                          className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center cursor-pointer"
                          whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                            backgroundColor: "#f9fafb"
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="none">
                            <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Alle Zahlungsmethoden werden sicher verarbeitet</span>
                    <motion.button
                      className="text-sm font-medium text-gray-800 dark:text-gray-200 underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
                
                {/* Animated Card Bottom */}
                <motion.div 
                  className="h-3 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    repeatType: "loop",
                    ease: "linear" 
                  }}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-100 dark:bg-gray-800/20 rounded-full blur-3xl opacity-70 z-0"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-gray-200 dark:bg-gray-800/20 rounded-full blur-3xl opacity-70 z-0"></div>
              
              {/* Animated payment icons */}
              {[
                { x: "10%", y: "15%", delay: 0 },
                { x: "85%", y: "20%", delay: 0.5 },
                { x: "70%", y: "85%", delay: 1 },
                { x: "20%", y: "80%", delay: 1.5 }
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center z-20"
                  style={{ left: pos.x, top: pos.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: pos.delay, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.svg
                    className="w-5 h-5 text-gray-700 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: pos.delay
                    }}
                  >
                    {i === 0 && <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
                    {i === 1 && <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2" />}
                    {i === 2 && <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M15 9H9V15H15V9Z" />}
                    {i === 3 && <path d="M9 12h6M20 9H4v9a2 2 0 002 2h12a2 2 0 002-2V9z M20 4H4v5h16V4z" />}
                  </motion.svg>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-12">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${index === 1 ? "bg-gray-700 dark:bg-gray-300" : "bg-gray-300 dark:bg-gray-600"}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verbesserte Projects Section */}
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
                transition={{ duration: 1.5 }}
              />
            )
          ))}
        </AnimatePresence>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ausgewählte Projekte</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entdecken Sie unsere erfolgreichen Kundenprojekte und erfahren Sie mehr über unsere Arbeitsweise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                index === currentProjectSlide && (
                  <motion.div
                    key={`project-${index}`}
                    className="col-span-1 md:col-span-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 80, 
                      damping: 17 
                    }}
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
                      <motion.div 
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <motion.div 
                          className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl border border-border bg-white flex items-center justify-center"
                          whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                          {project.image.includes('svg') ? (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={200}
                                height={60}
                                style={{ objectFit: 'contain' }}
                              />
                            </motion.div>
                          ) : (
                            <motion.div 
                              className="w-full h-full"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-lg text-muted-foreground mb-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          {project.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.3 }}
                        >
                          {project.isExternal ? (
                            <a 
                              href={project.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
                            >
                              <motion.span 
                                whileHover={{ x: 5 }} 
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center"
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
                              </motion.span>
                            </a>
                          ) : (
                            <Link 
                              href={project.href}
                              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
                            >
                              <motion.span 
                                whileHover={{ x: 5 }} 
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center"
                              >
                                Zum Projekt
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </motion.span>
                            </Link>
                          )}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-12">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentProjectSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === currentProjectSlide ? "bg-primary" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Projekt Slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute left-0 right-0 flex justify-between items-center px-8 md:px-16 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <motion.button 
              onClick={() => setCurrentProjectSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
              className="bg-gray-800/80 shadow-lg hover:bg-gray-700 p-3 rounded-full text-white transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-700"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Vorheriges Projekt"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              onClick={() => setCurrentProjectSlide((prev) => (prev + 1) % projects.length)}
              className="bg-gray-800/80 shadow-lg hover:bg-gray-700 p-3 rounded-full text-white transition-colors z-20 w-12 h-12 flex items-center justify-center pointer-events-auto border border-gray-700"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Nächstes Projekt"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Verbesserte CTA Section */}
      <section className="bg-gradient-to-br from-gray-900/90 to-gray-800 py-16 relative overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Bereit für Ihren digitalen Erfolg?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir gemeinsam Ihre Ziele erreichen können.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild variant="secondary" size="lg">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/kontakt">
                  Jetzt Kontakt aufnehmen
                </Link>
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
} 