import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const CountUpStat = ({ value, delay = 0 }) => {
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Parse the value to extract number, suffix, and decimals
  const parseValue = (val) => {
    // Remove any non-numeric characters except decimal point and +/%
    const numberMatch = val.match(/[\d.]+/);
    if (!numberMatch) return { number: 0, suffix: '', decimals: 0 };
    
    const numberStr = numberMatch[0];
    const hasDecimal = numberStr.includes('.');
    const decimals = hasDecimal ? 1 : 0;
    const number = parseFloat(numberStr);
    
    // Extract suffix (+, %, or empty)
    const suffix = val.includes('+') ? '+' : val.includes('%') ? '%' : '';
    
    return { number, suffix, decimals };
  };

  const { number, suffix, decimals } = parseValue(value);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Add delay based on delay prop
            setTimeout(() => {
              setShouldAnimate(true);
              setHasAnimated(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, hasAnimated]);

  const getInitialValue = () => {
    if (decimals > 0) {
      return `0.${'0'.repeat(decimals)}${suffix}`;
    }
    return `0${suffix}`;
  };

  return (
    <div ref={elementRef} className="stat-number">
      {shouldAnimate ? (
        <>
          <CountUp
            start={0}
            end={number}
            decimals={decimals}
            duration={2.5}
            separator=","
          />
          {suffix}
        </>
      ) : (
        getInitialValue()
      )}
    </div>
  );
};

export default CountUpStat;

