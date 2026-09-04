'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  numericValue: number; // e.g. 2000
  prefix?: string; // e.g. "+"
  suffix?: string; // e.g. "%" or " Ans"
  duration?: number; // e.g. 2000ms
  className?: string;
}

export default function AnimatedCounter({
  numericValue,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function (easeOutQuad)
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentCount = Math.floor(easeProgress * numericValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(numericValue);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, numericValue, duration]);

  // Format large numbers with space separators (e.g., 2 000)
  const formattedCount = count.toLocaleString('fr-FR');

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
