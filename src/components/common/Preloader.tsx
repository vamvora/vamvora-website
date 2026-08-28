import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScreenPreloader } from './ScreenPreloader';

export const Preloader: React.FC = () => {
  const location = useLocation();
  const isDedicatedPage = location.pathname === '/logo-reveal';

  const [done, setDone] = useState(() => 
    typeof window !== 'undefined' && (
      window.location.search.includes('skipPreloader') || 
      window.location.pathname === '/logo-reveal'
    )
  );

  useEffect(() => {
    if (done || isDedicatedPage) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [done, isDedicatedPage]);

  const handleComplete = () => {
    document.body.style.overflow = '';
    setDone(true);
  };

  if (done || isDedicatedPage) return null;

  return (
    <ScreenPreloader onComplete={handleComplete} />
  );
};

export default Preloader;
