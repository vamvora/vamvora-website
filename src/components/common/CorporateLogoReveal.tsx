import React, { useState, useEffect, useRef } from 'react';
import vamLogoGray from '../../assets/vam-logo-gray.png';
import vamLogoLiquidBlue from '../../assets/vam-logo-liquid-blue.png';
import vamLogoFinalBlue from '../../assets/vam-logo-final-blue.png';
import { RotateCcw, Play, Pause } from 'lucide-react';

interface CorporateLogoRevealProps {
  onComplete?: () => void;
  isStandalone?: boolean;
  autoStart?: boolean;
}

export const CorporateLogoReveal: React.FC<CorporateLogoRevealProps> = ({
  onComplete,
  isStandalone = false,
  autoStart = true,
}) => {
  // Snappy 2.0-second reveal timing
  const TOTAL_DURATION = 2.0;

  const initialTime = typeof window !== 'undefined'
    ? parseFloat(new URLSearchParams(window.location.search).get('time') || '0')
    : 0;

  const [elapsed, setElapsed] = useState<number>(initialTime);
  const [isPlaying, setIsPlaying] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('time')) {
      return false; // pause on exact preview timestamp if passed
    }
    return autoStart;
  });
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pauseTimeRef = useRef<number>(0);

  const startAnimation = () => {
    setIsFinished(false);
    setIsPlaying(true);
    setElapsed(0);
    startTimeRef.current = performance.now();
    pauseTimeRef.current = 0;
  };

  const togglePlayPause = () => {
    if (isFinished) {
      startAnimation();
      return;
    }
    if (isPlaying) {
      setIsPlaying(false);
      pauseTimeRef.current = elapsed;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    } else {
      setIsPlaying(true);
      startTimeRef.current = performance.now() - pauseTimeRef.current * 1000;
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    const tick = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }
      const currentElapsed = Math.min((now - startTimeRef.current) / 1000, TOTAL_DURATION);
      setElapsed(currentElapsed);

      if (currentElapsed >= TOTAL_DURATION) {
        setIsPlaying(false);
        setIsFinished(true);
        if (onComplete) onComplete();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, onComplete]);

  // ==============================================================
  // 3D LIQUID SLOSH PHYSICS (VideoHive 19314943 "Filling Liquid")
  // ==============================================================

  // Phase 1: Dynamic Rising & Sloshing Fluid (0.0s -> 1.50s)
  const fillTime = Math.min(1.50, Math.max(0, elapsed));
  const fillProgress = fillTime / 1.50; // 0 to 1

  // Natural ease curve: accelerates initially, rolls steadily, decelerates at the top
  const easeFill = fillProgress < 0.5
    ? 2 * fillProgress * fillProgress
    : 1 - Math.pow(-2 * fillProgress + 2, 2) / 2;

  // Percentage from 0% (bottom) to 108% (clears the top of the logo)
  const liquidLevelPercent = easeFill * 108;

  // Fluid slosh amplitude dampens naturally as the logo fills and stabilizes
  const sloshDamping = elapsed < 1.45
    ? Math.max(0.15, 1 - Math.pow(fillProgress, 2.2))
    : Math.max(0, 1 - (elapsed - 1.45) / 0.15);

  // Dynamic standing wave harmonics (signature VideoHive sloshing fluid physics)
  const sloshSpeed = 5.2; // Radian speed
  const primarySlosh = Math.sin(elapsed * sloshSpeed) * 14 * sloshDamping;
  const secondarySlosh = Math.cos(elapsed * sloshSpeed * 1.8) * 6 * sloshDamping;
  const counterSlosh = Math.sin(elapsed * sloshSpeed + 1.2) * 11 * sloshDamping;

  // SVG Wave Coordinates in viewBox [0 0 1000 600]
  // Y = 0 is top, Y = 600 is bottom
  const baseY = 600 - (liquidLevelPercent / 100) * 600;

  // Primary Front Wave Lip
  const yL = Math.max(-20, Math.min(620, baseY - primarySlosh * 4));
  const yR = Math.max(-20, Math.min(620, baseY + primarySlosh * 4));
  const cp1X = 320;
  const cp1Y = Math.max(-20, Math.min(620, baseY - (primarySlosh * 2.5 - secondarySlosh * 3)));
  const cp2X = 680;
  const cp2Y = Math.max(-20, Math.min(620, baseY + (primarySlosh * 2.5 + secondarySlosh * 3)));
  const frontWavePath = `M 0,${yL.toFixed(1)} C ${cp1X},${cp1Y.toFixed(1)} ${cp2X},${cp2Y.toFixed(1)} 1000,${yR.toFixed(1)} L 1000,600 L 0,600 Z`;

  // Secondary Back Wave Lip (Counter-sloshing wave for 3D depth)
  const yL_back = Math.max(-20, Math.min(620, baseY + counterSlosh * 3.5));
  const yR_back = Math.max(-20, Math.min(620, baseY - counterSlosh * 3.5));
  const cp1X_b = 350;
  const cp1Y_b = Math.max(-20, Math.min(620, baseY + counterSlosh * 2));
  const cp2X_b = 650;
  const cp2Y_b = Math.max(-20, Math.min(620, baseY - counterSlosh * 2));
  const backWavePath = `M 0,${yL_back.toFixed(1)} C ${cp1X_b},${cp1Y_b.toFixed(1)} ${cp2X_b},${cp2Y_b.toFixed(1)} 1000,${yR_back.toFixed(1)} L 1000,600 L 0,600 Z`;

  // Phase 2: Smart Animate transition into final branded logo (1.60s -> 1.95s)
  const smartAnimateStart = 1.60;
  const smartAnimateDuration = 0.35;
  const smartProgress = Math.max(0, Math.min(1, (elapsed - smartAnimateStart) / smartAnimateDuration));
  const finalLogoOpacity = Math.sin((smartProgress * Math.PI) / 2);

  // Dynamic light bloom & sheen during smart animate
  const sheenStrength = smartProgress > 0 && smartProgress < 1
    ? Math.sin(smartProgress * Math.PI) * 0.45
    : 0;

  // Phase 3: Exit transition (1.95s -> 2.00s)
  const exitProgress = elapsed >= 1.95 ? (elapsed - 1.95) / 0.05 : 0;
  const rootOpacity = 1 - exitProgress;

  return (
    <div
      style={{ opacity: rootOpacity }}
      className="fixed inset-0 z-[99999] overflow-hidden bg-white select-none pointer-events-auto font-sans flex items-center justify-center transition-opacity duration-100 transform-gpu"
    >
      {/* Pristine Clean White Background */}
      <div className="absolute inset-0 bg-[#FFFFFF]" />

      {/* Ambient Blue Fluid Glow on White Canvas */}
      <div className="absolute w-[680px] h-[680px] bg-[#00C2FF]/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ---------------------------------------------------- */}
      {/* CENTERED STATIONARY LOGO CONTAINER (Zero camera movement) */}
      {/* ---------------------------------------------------- */}
      <div className="relative w-72 sm:w-88 md:w-[440px] lg:w-[480px] aspect-[324/194] max-w-[85vw] flex items-center justify-center transform-gpu">

        {/* 1. SOLID GRAY LOGO SILHOUETTE (Vessel from VideoHive template) */}
        <img
          src={vamLogoGray}
          alt="VAM Logo Vessel"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* 2. DYNAMIC 3D FILLING LIQUID (Masked strictly inside logo) */}
        <div
          style={{
            WebkitMaskImage: `url(${vamLogoLiquidBlue})`,
            maskImage: `url(${vamLogoLiquidBlue})`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transform-gpu"
        >
          {/* Dynamic 3D Sloshing Fluid Canvas/SVG */}
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          >
            <defs>
              {/* Back Wave Gradient (Deeper oceanic blue with shadow) */}
              <linearGradient id="backLiquidGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0B3E8C" />
                <stop offset="60%" stopColor="#072B66" />
                <stop offset="100%" stopColor="#041B45" />
              </linearGradient>

              {/* Front Wave Gradient (Vibrant glossy VideoHive cyan-blue) */}
              <linearGradient id="frontLiquidGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="25%" stopColor="#1E80F0" />
                <stop offset="70%" stopColor="#165EC7" />
                <stop offset="100%" stopColor="#0A3680" />
              </linearGradient>

              {/* Specular Wave Lip Highlight */}
              <linearGradient id="waveLipGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
              </linearGradient>

              {/* Fluid Surface Tension Filter */}
              <filter id="fluidGloss" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="-3" stdDeviation="4" floodColor="#00E5FF" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Layer 1: Back Dynamic Wave (3D liquid volume depth) */}
            <path
              d={backWavePath}
              fill="url(#backLiquidGrad)"
              opacity="0.8"
            />

            {/* Layer 2: Primary Front Dynamic Wave */}
            <path
              d={frontWavePath}
              fill="url(#frontLiquidGrad)"
              filter="url(#fluidGloss)"
            />

            {/* Layer 3: Glistening Specular Wave Lip Line */}
            {sloshDamping > 0.05 && (
              <path
                d={`M 0,${yL.toFixed(1)} C ${cp1X},${cp1Y.toFixed(1)} ${cp2X},${cp2Y.toFixed(1)} 1000,${yR.toFixed(1)}`}
                fill="none"
                stroke="url(#waveLipGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity={0.85 * sloshDamping}
              />
            )}
          </svg>

          {/* Internal Caustics & Diagonal Specular Highlight Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
        </div>

        {/* 3. FINAL BRANDED LOGO (Smart Animate Transition) */}
        <div
          style={{ opacity: finalLogoOpacity }}
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-75 transform-gpu"
        >
          <img
            src={vamLogoFinalBlue}
            alt="VAM Logo Final Branded"
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_4px_16px_rgba(26,80,158,0.25)]"
          />
        </div>

        {/* Smart Animate Illumination Sheen Sweep */}
        {sheenStrength > 0 && (
          <div
            style={{ opacity: sheenStrength }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-[smartSheen_0.30s_ease-out] pointer-events-none"
          />
        )}

      </div>

      {/* Sheen Animation */}
      <style>{`
        @keyframes smartSheen {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>

      {/* ---------------------------------------------------- */}
      {/* STANDALONE CONTROLS (Only visible on /logo-reveal) */}
      {/* ---------------------------------------------------- */}
      {isStandalone && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 w-full max-w-md px-4 pointer-events-auto">
          {/* Progress Timeline Scrubber */}
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner border border-slate-200 relative">
            <div
              style={{ width: `${(elapsed / TOTAL_DURATION) * 100}%` }}
              className="h-full bg-gradient-to-r from-[#00D4FF] to-[#0B3E8C] rounded-full transition-all duration-75"
            />
            {/* Markers */}
            <div className="absolute top-0 bottom-0 left-[0%] w-0.5 bg-slate-300" title="0.0s: Empty Silhouette" />
            <div className="absolute top-0 bottom-0 left-[75%] w-0.5 bg-slate-300" title="1.50s: 100% Liquid Fill" />
            <div className="absolute top-0 bottom-0 left-[80%] w-0.5 bg-slate-300" title="1.60s: Smart Animate Reveal" />
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between w-full px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl text-slate-800 text-xs font-mono">
            <button
              type="button"
              onClick={startAnimation}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay</span>
            </button>

            <button
              type="button"
              onClick={togglePlayPause}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0145F2] text-white font-semibold hover:bg-[#0038D1] transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : isFinished ? 'Replay' : 'Play'}</span>
            </button>

            <div className="font-bold text-[#0B3E8C]">
              {elapsed.toFixed(2)}s / {TOTAL_DURATION.toFixed(2)}s
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CorporateLogoReveal;
