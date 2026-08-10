import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedSection Component
 * Wraps content and smoothly triggers entrance animations when scrolled into view.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up' // 'up' | 'down' | 'left' | 'right' | 'scale'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animated, unobserve to maintain performance
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'opacity-0 translate-y-12';
        case 'down':
          return 'opacity-0 -translate-y-12';
        case 'left':
          return 'opacity-0 translate-x-12';
        case 'right':
          return 'opacity-0 -translate-x-12';
        case 'scale':
          return 'opacity-0 scale-90';
        default:
          return 'opacity-0 translate-y-12';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={sectionRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
