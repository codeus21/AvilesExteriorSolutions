import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, className = '', delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay based on the delay prop
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`scroll-animate ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
