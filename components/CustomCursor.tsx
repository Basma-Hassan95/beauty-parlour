"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on desktop fine pointer devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const xDotTo = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.1, ease: "power3.out" });
    const yDotTo = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.1, ease: "power3.out" });

    const xRingTo = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.35, ease: "power3.out" });
    const yRingTo = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], input, textarea")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-gold-champagne rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      {/* Outer Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] border border-rose-gold/70 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHovered
            ? "scale-150 bg-rose-orchid/20 border-rose-orchid backdrop-blur-[2px]"
            : "scale-100 bg-transparent"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}
