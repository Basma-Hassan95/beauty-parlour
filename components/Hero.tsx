"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MessageCircle, ArrowDownRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-slide-clean.jpg",
    headline: "Beauty care, close to home in PECHS.",
    subtext: "Experience bespoke hair styling, luminous skin therapy, and signature bridal couture tailored for your most cherished moments.",
  },
  {
    id: 2,
    image: "/images/hero-slide-2-custom.jpg",
    headline: "Unmatched Regal Bridal Glamour",
    subtext: "High-definition, long-lasting wedding makeup crafted with imported luxury cosmetics in our private PECHS suite.",
  },
  {
    id: 3,
    image: "/images/hero-slide-3-new.jpg",
    headline: "Precision Hair Colors & Hydra Facials",
    subtext: "Dimensional balayage waves, custom haircuts, and hydrating skin therapies for instant radiant confidence.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const slideImageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-play slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useGSAP(
    () => {
      if (!slideImageRef.current || !contentRef.current) return;

      // Animate slide crossfade zoom
      gsap.fromTo(
        slideImageRef.current,
        { scale: 1.12, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
      );

      // Animate text content stagger
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      );
    },
    { scope: heroRef, dependencies: [currentSlide] }
  );

  const slide = heroSlides[currentSlide];

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[88vh] lg:h-[92vh] flex items-center justify-center overflow-hidden bg-[#FFF8F3] text-[#2B1B17] bg-noise select-none"
    >
      {/* Slide Image Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={slideImageRef}
          src={slide.image}
          alt={slide.headline}
          style={{ objectPosition: currentSlide === 0 ? "50% 12%" : "50% 20%" }}
          className="w-full h-full object-cover filter brightness-[0.88]"
        />

        {/* Warm Ivory Gradient Overlays for Elegance & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F3] via-[#FFF8F3]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F3]/70 via-transparent to-[#FFF8F3]/70" />
      </div>

      {/* Main Hero Content Box */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center pt-8">
        <div ref={contentRef} className="space-y-4 flex flex-col items-center">
          {/* Headline */}
          <h1 className="font-cormorant text-fluid-hero font-bold tracking-tight text-[#2B1B17] max-w-3xl drop-shadow-md leading-tight">
            {slide.headline.split("in PECHS")[0]}
            {slide.headline.includes("in PECHS") && (
              <span className="text-[#D98C8C] italic"> in PECHS.</span>
            )}
          </h1>

          {/* Subtext */}
          <div className="max-w-xl mx-auto space-y-1.5">
            <p className="text-fluid-body text-[#2B1B17]/90 font-medium leading-relaxed drop-shadow-sm">
              {slide.subtext}
            </p>
            <p className="text-xs sm:text-sm text-[#C9A25D] font-semibold flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D98C8C]" />
              <span>{siteConfig.subTagline}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D98C8C]" />
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-sm pt-2">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#D98C8C] text-[#FFF8F3] font-semibold text-sm tracking-wide shadow-xl shadow-[#D98C8C]/30 hover:scale-[1.03] hover:bg-[#C9A25D] transition-all duration-300 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform duration-300" />
              <span>Book on WhatsApp</span>
            </a>

            <a
              href="#services"
              data-cursor-hover
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFF8F3]/90 text-[#2B1B17] font-semibold text-sm border border-[#D98C8C]/40 hover:border-[#C9A25D] transition-all duration-300 shadow-md"
            >
              <span>See Menu</span>
              <ArrowDownRight className="w-4 h-4 text-[#C9A25D]" />
            </a>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        data-cursor-hover
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#FFF8F3] text-[#2B1B17] hover:bg-[#D98C8C] hover:text-[#FFF8F3] flex items-center justify-center transition-all duration-300 border border-[#D98C8C]/40 shadow-xl"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        data-cursor-hover
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#FFF8F3] text-[#2B1B17] hover:bg-[#D98C8C] hover:text-[#FFF8F3] flex items-center justify-center transition-all duration-300 border border-[#D98C8C]/40 shadow-xl"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {heroSlides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            data-cursor-hover
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === idx
                ? "w-7 bg-[#D98C8C]"
                : "w-2 bg-[#2B1B17]/30 hover:bg-[#2B1B17]/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
