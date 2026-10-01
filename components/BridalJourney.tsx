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
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!horizontalTrackRef.current || !pinContainerRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = horizontalTrackRef.current;
        if (!track) return;

        const totalWidth = track.scrollWidth - window.innerWidth + 120;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalWidth + 300}`,
            invalidateOnRefresh: true,
          },
        });

        tl.to(track, {
          x: -totalWidth,
          ease: "none",
        });

        if (progressBarRef.current) {
          tl.to(
            progressBarRef.current,
            {
              scaleX: 1,
              ease: "none",
            },
            0
          );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const scrollLeft = () => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="bridal" ref={sectionRef} className="relative bg-[#FFF8F3] text-[#2B1B17] bg-noise overflow-hidden border-t border-[#D98C8C]/20">
      <div ref={pinContainerRef} className="min-h-screen flex flex-col justify-center py-20 px-6 lg:px-16">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1B17] text-xs font-semibold text-[#C9A25D] tracking-widest uppercase mb-4 border border-[#C9A25D]/30 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-[#D98C8C]" />
            <span>EXCLUSIVITY FOR BRIDES</span>
          </div>
          <h2 className="font-cormorant text-fluid-h2 font-bold text-[#2B1B17]">
            The Signature <span className="text-[#D98C8C] italic">Bridal Journey</span>
          </h2>
          <p className="text-[#2B1B17]/80 text-fluid-body max-w-2xl mx-auto font-light mt-2">
            From initial consultation to the final touch-up, every step is designed to give you a stress-free, luminous wedding glow.
          </p>

          {/* TikTok Live Video Showcase Feature Card */}
          <div className="mt-8 max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden bg-white border border-[#D98C8C]/40 p-4 shadow-xl space-y-3">
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
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-[#2B1B17] shadow-inner relative group">
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
                    <div className="w-16 h-16 rounded-full bg-[#D98C8C] text-[#FFF8F3] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#C9A25D] transition-all duration-300">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-[#2B1B17]/90 text-[#FFF8F3] text-xs font-semibold uppercase tracking-wider border border-[#D98C8C]/30 shadow-lg">
                      Play Transformation Video
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls & Progress Bar Line */}
          <div className="flex items-center justify-between max-w-2xl mx-auto mt-8">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white border border-[#D98C8C]/40 text-[#2B1B17] hover:bg-[#D98C8C] hover:text-white transition-all flex items-center justify-center shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 mx-4 h-1.5 bg-[#D98C8C]/20 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-[#D98C8C] via-[#C9A25D] to-[#D98C8C] origin-left scale-x-0"
              />
            </div>

            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white border border-[#D98C8C]/40 text-[#2B1B17] hover:bg-[#D98C8C] hover:text-white transition-all flex items-center justify-center shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Track Container with Smooth Manual Overflow Support */}
        <div ref={scrollWrapperRef} className="w-full overflow-x-auto scrollbar-none py-4 scroll-smooth">
          <div
            ref={horizontalTrackRef}
            className="flex flex-row gap-6 lg:gap-12 w-max px-6 lg:px-12 items-stretch"
          >
            {siteConfig.bridalJourney.map((item, index) => (
              <div
                key={index}
                className="w-[85vw] sm:w-[24rem] lg:w-[28rem] shrink-0 p-8 rounded-3xl bg-white border border-[#D98C8C]/30 hover:border-[#C9A25D] transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-8">
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
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
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
