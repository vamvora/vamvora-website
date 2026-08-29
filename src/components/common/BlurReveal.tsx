import React, { useEffect, useRef, useState } from 'react';

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blurAmount?: number;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  yOffset = 20,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '60px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : `translate3d(0, ${yOffset}px, 0)`,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </div>
  );
};

export default BlurReveal;
