'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0 },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
