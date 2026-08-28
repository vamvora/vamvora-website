import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import vamOriginalLogo from '../../assets/vam-original-logo.png';
import { RotateCcw } from 'lucide-react';

export interface ScreenPreloaderProps {
  logoSrc?: string;
  logoAlt?: string;
  showLogo?: boolean;
  logoSize?: number;
  gap?: number;
  layout?: 'horizontal' | 'vertical';
  backgroundColor?: string;
  textColor?: string;
  duration?: number;
  delay?: number;
  fadeOutDuration?: number;
  hideAfterComplete?: boolean;
  onComplete?: () => void;
  isStandalone?: boolean;
}

/**
 * ScreenPreloader Component
 * Unified, cohesive brand preloader with website logo and percentage count-up
 * Locked together without disjointed individual movement.
 */
export const ScreenPreloader: React.FC<ScreenPreloaderProps> = ({
  logoSrc = vamOriginalLogo,
  logoAlt = 'VAM VORA Technologies',
  showLogo = true,
  logoSize = 80,
  backgroundColor = '#FFFFFF',
  textColor = '#0F172A',
  duration = 2.0,
  delay = 0.2,
  fadeOutDuration = 0.6,
  hideAfterComplete = true,
  onComplete,
  isStandalone = false,
}) => {
  const queryTime = typeof window !== 'undefined'
    ? parseFloat(new URLSearchParams(window.location.search).get('time') || '-1')
    : -1;
  const isPreviewMode = queryTime >= 0;

  const rootRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const startAtRef = useRef<number | null>(null);
  const lastProgressRef = useRef<number>(-1);
  const completedOnceRef = useRef<boolean>(false);

  const initialProgress = isPreviewMode ? Math.min(100, Math.round((queryTime / duration) * 100)) : 0;
  const [progress, setProgress] = useState<number>(initialProgress);
  const [completed, setCompleted] = useState<boolean>(isPreviewMode && queryTime >= duration);
  const [hidden, setHidden] = useState<boolean>(false);

  const cancelRaf = useCallback(() => {
    if (rafRef.current != null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = null;
  }, []);

  const finish = useCallback(() => {
    if (completedOnceRef.current) return;
    completedOnceRef.current = true;
    setProgress(100);
    setCompleted(true);
    if (onComplete) {
      try {
        onComplete();
      } catch {
        // ignore
      }
    }
  }, [onComplete]);

  // Restart function for standalone preview
  const handleRestart = () => {
    cancelRaf();
    setHidden(false);
    setCompleted(false);
    setProgress(0);
    completedOnceRef.current = false;
    startAtRef.current = null;
    lastProgressRef.current = -1;
  };

  // Numeric count-up loop
  useEffect(() => {
    if (hidden || isPreviewMode) return;
    cancelRaf();
    startAtRef.current = null;
    lastProgressRef.current = -1;
    completedOnceRef.current = false;

    const durationMs = Math.max(0.05, duration) * 1000;
    const delayMs = Math.max(0, delay) * 1000;

    const tick = (now: number) => {
      if (startAtRef.current == null) {
        startAtRef.current = now + delayMs;
      }
      const startAt = startAtRef.current;
      if (now < startAt) {
        rafRef.current = window.requestAnimationFrame(tick);
        return;
      }

      const t = Math.max(0, Math.min(1, (now - startAt) / durationMs));
      const next = Math.round(t * 100);

      if (next !== lastProgressRef.current) {
        lastProgressRef.current = next;
        setProgress(next);
      }

      if (t >= 1) {
        finish();
        cancelRaf();
        return;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      cancelRaf();
    };
  }, [cancelRaf, delay, duration, finish, hidden, isPreviewMode]);

  const shouldFadeOut = !isStandalone && hideAfterComplete && completed && fadeOutDuration > 0;

  if (hidden && !isStandalone) return null;

  return (
    <motion.div
      ref={rootRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: backgroundColor,
        color: textColor,
      }}
      initial={{ opacity: 1 }}
      animate={shouldFadeOut ? { opacity: 0, scale: 0.99 } : { opacity: 1, scale: 1 }}
      transition={
        shouldFadeOut
          ? { duration: Math.max(0.05, fadeOutDuration), ease: [0.16, 1, 0.3, 1] }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (shouldFadeOut) {
          setHidden(true);
        }
      }}
    >
      {/* Centered Unified Preloader Lockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center pointer-events-none select-none px-6"
      >
        {/* Core Lockup: Logo + Divider + Counter (Unified, No Individual Shifting) */}
        <div className="flex items-center justify-center gap-5 sm:gap-7">
          {/* 1. Website Brand Logo */}
          {showLogo && (
            <img
              src={logoSrc}
              alt={logoAlt}
              style={{
                height: logoSize,
                width: 'auto',
                maxHeight: logoSize,
                maxWidth: '280px',
                objectFit: 'contain',
                display: 'block',
                userSelect: 'none',
              }}
              draggable={false}
              className="drop-shadow-xs"
            />
          )}

          {/* 2. Sleek Vertical Divider */}
          <div className="w-[1.5px] h-8 sm:h-10 bg-slate-200/90 rounded-full" />

          {/* 3. Numerical Percentage Counter with Stable Width */}
          <div
            style={{
              color: textColor,
              fontVariantNumeric: 'tabular-nums',
            }}
            className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight w-[72px] sm:w-[86px] text-left select-none flex items-baseline"
            aria-label={`Loading ${progress}%`}
          >
            <span>{progress}</span>
            <span className="text-lg sm:text-xl text-[#0145F2] font-bold ml-1">
              %
            </span>
          </div>
        </div>

        {/* 4. Elegant Progress Track Beneath */}
        <div className="w-44 sm:w-52 h-1 bg-slate-100 rounded-full mt-6 overflow-hidden border border-slate-200/60 shadow-inner">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[#0145F2] to-[#00C2FF] rounded-full transition-all duration-75 ease-out"
          />
        </div>
      </motion.div>

      {/* Standalone Preview Control */}
      {isStandalone && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <button
            type="button"
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium text-xs shadow-xl hover:bg-slate-800 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Preloader</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ScreenPreloader;
