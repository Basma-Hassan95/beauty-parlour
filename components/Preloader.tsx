"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/siteConfig";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isFinished, setIsFinished] = useState(false);

  // Safety fallback: guaranteed finish after 2.2 seconds max
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsFinished(true);
    }, 2200);
    return () => clearTimeout(safetyTimer);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      let pathLength = 100;
      if (pathRef.current) {
        try {
          pathLength = pathRef.current.getTotalLength() || 100;
          gsap.set(pathRef.current, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
        } catch (e) {
          // Fallback if SVG length calculation fails
        }
      }

      const counterObj = { val: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
        },
      });

      if (pathRef.current) {
        tl.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
        });
      }

      tl.to(
        counterObj,
        {
          val: 100,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.innerText = `${Math.round(counterObj.val)}%`;
            }
          },
        },
        0
      )
        .to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        })
        .to(containerRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.8,
          ease: "expo.inOut",
        });
    },
    { scope: containerRef }
  );

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FFF8F3] text-[#2B1B17] select-none overflow-hidden bg-noise"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div ref={textRef} className="flex flex-col items-center gap-6">
        {/* Monogram SVG Draw */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg
            className="w-full h-full drop-shadow-[0_0_15px_rgba(201,162,93,0.3)]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#D98C8C"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            <path
              ref={pathRef}
              d="M 28 36 C 28 26 44 24 44 34 C 44 46 26 46 26 58 C 26 68 44 68 44 58 M 48 54 L 56 42 M 52 46 C 56 46 60 48 60 52 M 62 66 L 62 36 L 72 54 L 82 36 L 82 66"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2B1B17" />
                <stop offset="50%" stopColor="#C9A25D" />
                <stop offset="100%" stopColor="#D98C8C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="text-center space-y-2">
          <h2 className="font-cormorant text-2xl tracking-[0.2em] font-semibold text-[#2B1B17] uppercase">
            {siteConfig.name}
          </h2>
          <p className="text-xs tracking-[0.3em] text-[#D98C8C] uppercase font-hind font-semibold">
            PECHS • KARACHI
          </p>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-3 mt-4">
          <div className="h-[2px] w-12 bg-[#D98C8C]/30 overflow-hidden">
            <div className="h-full bg-[#C9A25D] animate-pulse" />
          </div>
          <span ref={counterRef} className="font-mono text-sm tracking-widest text-[#C9A25D] font-bold">
            0%
          </span>
          <div className="h-[2px] w-12 bg-[#D98C8C]/30 overflow-hidden">
            <div className="h-full bg-[#C9A25D] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
