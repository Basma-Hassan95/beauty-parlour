"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/siteConfig";
import { Sparkles } from "lucide-react";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!marqueeTrackRef.current) return;

      const track = marqueeTrackRef.current;
      const totalWidth = track.scrollWidth / 2;

      const anim = gsap.to(track, {
        x: `-=${totalWidth}px`,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      // Speed up on scroll velocity
      const scrollTrigger = gsap.to(anim, {
        timeScale: 2.5,
        duration: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      return () => {
        anim.kill();
        scrollTrigger.kill();
      };
    },
    { scope: containerRef }
  );

  const items = [...siteConfig.marqueeItems, ...siteConfig.marqueeItems, ...siteConfig.marqueeItems];

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#FFF8F3] text-[#2B1B17] py-6 border-y border-[#D98C8C]/30 shadow-md"
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FFF8F3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FFF8F3] to-transparent z-10 pointer-events-none" />

      <div ref={marqueeTrackRef} className="flex whitespace-nowrap items-center gap-8 w-max">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-cormorant text-2xl lg:text-3xl font-semibold tracking-wider text-[#2B1B17] uppercase hover:text-[#D98C8C] transition-colors">
              {item}
            </span>
            <Sparkles className="w-4 h-4 text-[#C9A25D] shrink-0 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
