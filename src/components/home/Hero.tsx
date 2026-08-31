import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import Hls from 'hls.js';
import { useConsultationModal } from '../../context/ModalContext';

export const Hero: React.FC = () => {
  const { openConsultation } = useConsultationModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly enforce muted & playsinline for browser autoplay policies
    video.muted = true;
    video.playsInline = true;

    let hlsInstance: Hls | null = null;
    const src = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

    if (Hls.isSupported()) {
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        capLevelToPlayerSize: true, // Optimizes video resolution to player size
      });
      hlsInstance.loadSource(src);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {});
    }

    // IntersectionObserver to pause video when user scrolls past Hero
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (hlsInstance) hlsInstance.destroy();
    };
  }, []);

  return (
    <section 
      id="hero"
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 sm:pt-48 sm:pb-24 lg:pt-52 px-6 md:px-16 lg:px-24 text-center overflow-hidden bg-slate-950 font-sans"
    >
      {/* 1. Background Cinematic HLS Video (Hardware-Accelerated Static Container) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none transform-gpu overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-85"
        />
      </div>

      {/* 2. Ambient Lighting Gradient */}
      <div className="absolute inset-0 bg-slate-950/60 z-[1] pointer-events-none" />
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.22)_0%,rgba(1,69,242,0.18)_40%,transparent_70%)] pointer-events-none z-[2] transform-gpu" />

      {/* 3. Centralized Unframed Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center mt-6 sm:mt-10 my-auto transform-gpu">
        
        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6 drop-shadow-lg text-center"
        >
          <span className="block">Technology That Helps Your</span>
          <span className="block font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-emerald-300">Business Move Forward.</span>
        </motion.h1>

        {/* Supporting Lead Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-200/90 font-body font-normal text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
        >
          Secure cloud, modern workplace, intelligent AI automations and zero-trust cybersecurity solutions designed to help modern enterprises work smarter, operate securely and scale.
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-14"
        >
          <button
            type="button"
            onClick={() => openConsultation()}
            className="w-full sm:w-auto rounded-full px-8 py-4 text-base sm:text-lg font-semibold text-white bg-[#0145F2] hover:bg-[#0038D1] border-[1.5px] border-white/60 shadow-[0_10px_30px_rgba(1,69,242,0.45),inset_0_1.5px_1.5px_rgba(255,255,255,0.7)] hover:shadow-[0_15px_35px_rgba(1,69,242,0.6)] flex items-center justify-center gap-2.5 transition-all font-body cursor-pointer group hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book a Consultation Call</span>
            <ArrowUpRight className="h-5 w-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <a
            href="#services-section"
            className="glass-cta w-full sm:w-auto rounded-full px-8 py-4 text-base sm:text-lg font-semibold text-white hover:text-white flex items-center justify-center gap-2 transition-all font-body group hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Minimal Glass Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 border-t border-white/15 text-xs sm:text-sm font-body text-slate-200/80"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-300" />
            <span>Certified Cloud & AI Engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-300" />
            <span>Tailored Architecture Roadmaps</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>24/7 SLA Backed Operations</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
