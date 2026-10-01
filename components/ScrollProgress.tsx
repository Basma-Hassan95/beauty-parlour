"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!progressRef.current) return;

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-plum-deep/30 pointer-events-none">
      <div
        ref={progressRef}
        className="h-full w-full bg-gradient-to-r from-rose-gold via-gold-champagne to-rose-orchid origin-left scale-x-0 transition-transform shadow-[0_0_12px_rgba(217,173,99,0.8)]"
      />
    </div>
  );
}
