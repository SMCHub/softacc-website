'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  color: 'blue' | 'purple' | 'green' | 'amber' | 'rose';
}

// Einheitliches monochromes Farbschema für alle Karten
const monoStyle = {
  bgGradient: "from-gray-50/40 to-gray-100/20 dark:from-gray-900/30 dark:to-gray-800/20",
  borderColor: "border-gray-200/60 dark:border-gray-700/30",
  iconBg: "bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300",
  shadowColor: "shadow-black/5 dark:shadow-white/5",
  hoverBorder: "group-hover:border-gray-300 dark:group-hover:border-gray-600",
  textGradient: "from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400"
};

export const ServiceCard = ({ title, description, href, icon, color }: ServiceCardProps) => {
  return (
    <Link href={href} className="block h-full group">
      <motion.div 
        className={`h-full rounded-xl bg-gradient-to-br ${monoStyle.bgGradient} 
          backdrop-blur-md border ${monoStyle.borderColor} transition-all duration-300
          shadow-lg ${monoStyle.shadowColor} p-6 flex flex-col ${monoStyle.hoverBorder}
          hover:shadow-xl relative overflow-hidden group`}
        whileHover={{ 
          y: -5, 
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Background animated decoration */}
        <motion.div 
          className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br opacity-10"
          style={{ 
            background: `conic-gradient(from 230.29deg at 51.63% 52.16%, 
            ${getMonoColor(color)} 0deg, 
            transparent 180deg, 
            transparent 360deg)` 
          }}
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />

        {/* Icon */}
        <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg ${monoStyle.iconBg}`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-br bg-clip-text text-transparent ${monoStyle.textGradient}`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>

        {/* Call to action */}
        <motion.div 
          className="mt-auto"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-200">
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
        </motion.div>
      </motion.div>
    </Link>
  );
};

// Hilfsfunktion, um monochrome Farben basierend auf der übergebenen Farbkategorie zu erhalten
function getMonoColor(color: string): string {
  switch (color) {
    case 'blue':
      return '#1f2937'; // Dunkelgrau
    case 'purple':
      return '#1f2937'; // Dunkelgrau
    case 'green':
      return '#1f2937'; // Dunkelgrau
    case 'amber':
      return '#1f2937'; // Dunkelgrau
    case 'rose':
      return '#1f2937'; // Dunkelgrau
    default:
      return '#1f2937'; // Dunkelgrau
  }
}

export default ServiceCard; 