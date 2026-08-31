import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Hls from "hls.js";
import { useConsultationModal } from "../../context/ModalContext";
import { Link } from "react-router-dom";

export const CtaFooter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openConsultation } = useConsultationModal();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-16 lg:px-24 text-center overflow-hidden bg-black">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Clean ambient dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/55 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[0.95] max-w-3xl mx-auto mb-5">
          Your next website starts here.
        </h2>
        <p className="text-white/70 font-body font-normal text-sm md:text-base max-w-xl mx-auto mb-8">
          Book a free strategy call. See what AI&#8209;powered design can do. No commitment, no pressure. Just possibilities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button 
            type="button"
            onClick={() => openConsultation()}
            className="liquid-glass-strong w-full sm:w-auto rounded-full px-8 py-4 text-base sm:text-lg font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-all font-body cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <Link
            to="/contact"
            className="liquid-glass-light w-full sm:w-auto rounded-full px-8 py-4 text-base sm:text-lg font-semibold text-slate-900 flex items-center justify-center gap-2 hover:bg-white/80 transition-all font-body shadow-[0_10px_30px_rgba(255,255,255,0.1)] group bg-white/70 backdrop-blur-xl"
          >
            <span>View Pricing</span>
            <ArrowUpRight className="h-4 w-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body font-light text-xs">
            &copy; 2026 VAM VORA Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/#privacy" },
              { label: "Terms", href: "/#terms" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;