"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  const sunVariants = {
    active: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    },
    inactive: {
      scale: 0,
      rotate: -90,
      opacity: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  }

  const moonVariants = {
    active: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    },
    inactive: {
      scale: 0,
      rotate: 90,
      opacity: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  }

  const backgroundVariants = {
    light: { backgroundColor: "rgb(248, 250, 252)", borderColor: "rgb(226, 232, 240)" },
    dark: { backgroundColor: "rgb(30, 41, 59)", borderColor: "rgb(51, 65, 85)" }
  }

  return (
    <motion.button
      className="relative h-10 w-10 rounded-full border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      onClick={toggleTheme}
      animate={isDark ? "dark" : "light"}
      variants={backgroundVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Zum hellen Design wechseln" : "Zum dunklen Design wechseln"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        variants={sunVariants}
        animate={!isDark ? "active" : "inactive"}
    >
        <circle 
          cx="12" 
          cy="12" 
          r="5" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <motion.line
            key={i}
            x1="12"
            y1="4"
            x2="12"
            y2="2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ 
              transformOrigin: "center", 
              transform: `rotate(${deg}deg) translateY(-4px)` 
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: 1
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "reverse", 
              delay: i * 0.1
            }}
          />
        ))}
      </motion.svg>

      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute text-white"
        variants={moonVariants}
        animate={isDark ? "active" : "inactive"}
      >
        <motion.path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.circle
          cx="8"
          cy="9"
          r="1"
          fill="currentColor"
          animate={{ 
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.circle
          cx="15"
          cy="13"
          r="0.5"
          fill="currentColor"
          animate={{ 
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
      </motion.svg>
    </motion.button>
  )
} 