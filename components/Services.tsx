"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig, ServiceItem } from "@/lib/siteConfig";
import { MessageCircle, Scissors, Sparkles, Wand2, Crown, Heart, Sparkle } from "lucide-react";

const categoryIcons: Record<string, typeof Scissors> = {
  Hair: Scissors,
  Skin: Sparkles,
  Bridal: Crown,
  Makeup: Wand2,
  "Nails & Care": Heart,
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const IconComponent = categoryIcons[service.category] || Sparkle;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="service-card group relative flex flex-col justify-between p-8 rounded-3xl bg-[#FFF8F3] border border-[#D98C8C]/30 hover:border-[#C9A25D] transition-colors duration-500 overflow-hidden shadow-xl shadow-[#2B1B17]/5"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-[#D98C8C]/20 to-[#C9A25D]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-[#D98C8C]/15 text-[#2B1B17] text-xs font-semibold uppercase tracking-wider border border-[#D98C8C]/30">
            {service.category}
          </span>
          <div className="w-10 h-10 rounded-full bg-[#FFF8F3] border border-[#C9A25D]/50 flex items-center justify-center text-[#C9A25D] group-hover:scale-110 group-hover:bg-[#D98C8C] group-hover:text-[#FFF8F3] transition-all duration-300 shadow-sm">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-[#2B1B17] mb-3 group-hover:text-[#D98C8C] transition-colors">
          {service.title}
        </h3>

        <p className="text-[#2B1B17]/80 text-sm lg:text-base leading-relaxed mb-6 font-light">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {service.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-xs px-2.5 py-1 rounded-md bg-[#2B1B17]/5 text-[#D98C8C] border border-[#D98C8C]/25 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#D98C8C]/20 flex items-center justify-between mt-auto">
        <span className="text-xs text-[#2B1B17]/60 font-mono tracking-wider">
          RATES ON WHATSAPP
        </span>

        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B1B17] hover:bg-[#D98C8C] text-[#FFF8F3] hover:text-[#2B1B17] border border-[#C9A25D]/40 text-xs lg:text-sm font-semibold transition-all duration-300 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{service.ctaText}</span>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".service-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
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
      id="services"
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-16 bg-[#FFF8F3] text-[#2B1B17] bg-noise overflow-hidden"
    >
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#D98C8C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#C9A25D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B1B17] text-xs font-semibold text-[#C9A25D] tracking-widest uppercase border border-[#C9A25D]/30 shadow-sm">
            <span>OUR MENU</span>
          </div>
          <h2 className="font-cormorant text-fluid-h2 font-bold text-[#2B1B17]">
            Tailored Beauty Services for <span className="text-[#D98C8C] italic">Every Moment</span>
          </h2>
          <p className="text-[#2B1B17]/80 text-fluid-body font-light">
            Each service is customized to elevate your natural features using top-grade imported formulations in our comfortable PECHS salon.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
