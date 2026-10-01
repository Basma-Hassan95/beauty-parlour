"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/siteConfig";
import { Crown, Sparkles, CheckCircle2, Video, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BridalJourney() {
  const [playVideo, setPlayVideo] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!horizontalTrackRef.current || !pinContainerRef.current) return;

      const track = horizontalTrackRef.current;

      const getScrollAmount = () => {
        if (!track) return 0;
        return Math.max(0, track.scrollWidth - window.innerWidth + 100);
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: pinContainerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount() + 200}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, { scaleX: self.progress });
            }
            const stepIndex = Math.min(
              siteConfig.bridalJourney.length - 1,
              Math.floor(self.progress * siteConfig.bridalJourney.length)
            );
            setActiveStep(stepIndex);
          },
        },
      });

      // Force refresh for accurate measurements
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return () => {
        clearTimeout(timer);
        tween.kill();
      };
    },
    { scope: sectionRef }
  );

  const slideToStep = (index: number) => {
    if (!horizontalTrackRef.current) return;
    const track = horizontalTrackRef.current;
    const maxScroll = Math.max(0, track.scrollWidth - window.innerWidth + 100);
    const targetX = -((maxScroll / (siteConfig.bridalJourney.length - 1)) * index);

    gsap.to(track, {
      x: targetX,
      duration: 0.6,
      ease: "power2.out",
    });
    setActiveStep(index);
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeStep - 1);
    slideToStep(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(siteConfig.bridalJourney.length - 1, activeStep + 1);
    slideToStep(nextIdx);
  };

  return (
    <section id="bridal" ref={sectionRef} className="relative bg-[#FFF8F3] text-[#2B1B17] bg-noise overflow-hidden border-t border-[#D98C8C]/20">
      <div ref={pinContainerRef} className="min-h-screen flex flex-col justify-center py-16 px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1B17] text-xs font-semibold text-[#C9A25D] tracking-widest uppercase mb-3 border border-[#C9A25D]/30 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-[#D98C8C]" />
            <span>EXCLUSIVITY FOR BRIDES</span>
          </div>
          <h2 className="font-cormorant text-fluid-h2 font-bold text-[#2B1B17]">
            The Signature <span className="text-[#D98C8C] italic">Bridal Journey</span>
          </h2>
          <p className="text-[#2B1B17]/80 text-fluid-body max-w-2xl mx-auto font-light mt-1">
            From initial consultation to the final touch-up, every step is designed to give you a stress-free, luminous wedding glow.
          </p>

          {/* TikTok Live Video Showcase Feature Card */}
          <div className="mt-6 max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden bg-white border border-[#D98C8C]/40 p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs text-[#D98C8C] font-mono">
              <span className="flex items-center gap-1.5 font-bold text-[#D98C8C]">
                <Video className="w-4 h-4 animate-pulse" />
                Bridal Transformation Reel
              </span>
              <a
                href={siteConfig.bridalTiktokVideoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 text-[#C9A25D] font-semibold"
              >
                <span>TikTok Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Video Container */}
            <div className="w-full h-72 rounded-2xl overflow-hidden bg-[#2B1B17] shadow-inner relative group">
              {playVideo ? (
                <iframe
                  src="https://www.tiktok.com/embed/v2/7685342881573244180"
                  className="w-full h-full border-0"
                  title="Bridal Transformation Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setPlayVideo(true)}
                  className="relative w-full h-full cursor-pointer overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/bridal.jpg"
                    alt="Bridal Transformation Reel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[#D98C8C] text-[#FFF8F3] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#C9A25D] transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-[#2B1B17]/90 text-[#FFF8F3] text-xs font-semibold uppercase tracking-wider border border-[#D98C8C]/30 shadow-lg">
                      Play Transformation Video
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls & Progress Bar Line */}
          <div className="flex items-center justify-between max-w-2xl mx-auto mt-6">
            <button
              onClick={handlePrev}
              data-cursor-hover
              className="w-10 h-10 rounded-full bg-white border border-[#D98C8C]/40 text-[#2B1B17] hover:bg-[#D98C8C] hover:text-white transition-all flex items-center justify-center shadow-md active:scale-95"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 mx-4 h-2 bg-[#D98C8C]/20 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-[#D98C8C] via-[#C9A25D] to-[#D98C8C] origin-left scale-x-0 transition-transform duration-100"
              />
            </div>

            <button
              onClick={handleNext}
              data-cursor-hover
              className="w-10 h-10 rounded-full bg-white border border-[#D98C8C]/40 text-[#2B1B17] hover:bg-[#D98C8C] hover:text-white transition-all flex items-center justify-center shadow-md active:scale-95"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clean Overflow Hidden Track Wrapper */}
        <div className="relative w-full overflow-hidden py-2">
          <div
            ref={horizontalTrackRef}
            className="flex flex-row gap-6 lg:gap-10 w-max px-4 lg:px-12 items-stretch will-change-transform"
          >
            {siteConfig.bridalJourney.map((item, index) => (
              <div
                key={index}
                className={`w-[85vw] sm:w-[24rem] lg:w-[28rem] shrink-0 p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-xl relative group ${
                  activeStep === index ? "border-[#C9A25D] ring-2 ring-[#C9A25D]/20" : "border-[#D98C8C]/30"
                }`}
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-4xl font-bold text-[#C9A25D]">
                    {item.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF8F3] text-xs text-[#D98C8C] border border-[#D98C8C]/30 font-semibold">
                    STEP {index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-[#2B1B17] mb-2 group-hover:text-[#D98C8C] transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#D98C8C] uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </h4>
                  <p className="text-[#2B1B17]/80 text-sm lg:text-base font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-[#D98C8C]/20">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs lg:text-sm text-[#2B1B17]/90 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A25D] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#D98C8C] text-[#FFF8F3] font-semibold text-sm lg:text-base tracking-wide shadow-xl hover:bg-[#C9A25D] transition-all"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Consult Bridal Availability on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
