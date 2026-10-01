"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/siteConfig";
import { Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardsRef.current) return;

      const items = cardsRef.current.querySelectorAll(".why-card");

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-16 bg-[#FFF8F3] text-[#2B1B17] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1B17] text-xs font-semibold text-[#FFF8F3] tracking-widest uppercase shadow-md">
            <span>THE SABA & MUNTAHA DIFFERENCE</span>
          </div>
          <h2 className="font-cormorant text-fluid-h2 font-bold text-[#2B1B17]">
            Why Ladies in PECHS <span className="text-[#D98C8C] italic">Trust Our Saloon</span>
          </h2>
          <p className="text-[#2B1B17]/80 text-fluid-body font-light">
            We prioritize uncompromising hygiene, dedicated attention, and individualized care in a cozy, private atmosphere.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.whyUs.map((point) => {
            return (
              <div
                key={point.id}
                className="why-card relative p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D98C8C]/40 hover:border-[#2B1B17] transition-all duration-300 shadow-xl shadow-[#2B1B17]/5 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Animated SVG Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-[#2B1B17] text-[#C9A25D] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    {point.iconName === "sparkles" && <Sparkles className="w-7 h-7" />}
                    {point.iconName === "shieldCheck" && <ShieldCheck className="w-7 h-7" />}
                    {point.iconName === "heartHandshake" && <HeartHandshake className="w-7 h-7" />}
                  </div>

                  <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-[#2B1B17] mb-3 group-hover:text-[#D98C8C] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-[#2B1B17]/80 text-sm lg:text-base leading-relaxed font-light">
                    {point.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D98C8C]/20 flex items-center justify-between text-xs font-mono text-[#2B1B17]">
                  <span>PECHS BLOCK 2</span>
                  <span className="font-sans font-bold text-[#D98C8C]">100% PRIVATE & HYGIENIC</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
