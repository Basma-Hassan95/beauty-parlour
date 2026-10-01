"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/siteConfig";
import { MapPin, Clock, Phone, ExternalLink, MessageCircle, Sparkles } from "lucide-react";

export default function Visit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      gsap.from(cardRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-16 bg-[#FFF8F3] text-[#2B1B17] bg-noise overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D98C8C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A25D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div
          ref={cardRef}
          className="relative p-8 lg:p-16 rounded-3xl bg-white border border-[#D98C8C]/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Info */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B1B17] text-xs font-semibold text-[#C9A25D] tracking-widest uppercase mb-4 border border-[#C9A25D]/30 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#D98C8C]" />
                <span>LOCATION & HOURS</span>
              </div>
              <h2 className="font-cormorant text-fluid-h2 font-bold text-[#2B1B17]">
                Visit Us in <span className="text-[#D98C8C] italic">P.E.C.H.S. Karachi</span>
              </h2>
              <p className="text-[#2B1B17]/80 text-fluid-body font-light mt-2">
                Located conveniently on Allama Iqbal Road in Arab Tower. Walk-ins & appointment reservations welcome.
              </p>
            </div>

            {/* Address, Hours & Phone cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8F3] border border-[#D98C8C]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#2B1B17] flex items-center justify-center text-[#C9A25D] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D98C8C] font-semibold">ADDRESS</h4>
                  <p className="text-sm lg:text-base font-medium text-[#2B1B17] mt-1">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8F3] border border-[#D98C8C]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#2B1B17] flex items-center justify-center text-[#C9A25D] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D98C8C] font-semibold">TIMING</h4>
                  <p className="text-sm lg:text-base font-medium text-[#2B1B17] mt-1">
                    {siteConfig.timing}
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8F3] border border-[#D98C8C]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#2B1B17] flex items-center justify-center text-[#C9A25D] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D98C8C] font-semibold">PHONE / WHATSAPP</h4>
                  <p className="text-sm lg:text-base font-medium text-[#2B1B17] mt-1">
                    {siteConfig.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Action Link */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2B1B17] hover:bg-[#D98C8C] text-[#FFF8F3] hover:text-[#2B1B17] font-medium text-sm transition-all duration-300 border border-[#C9A25D]/40 shadow-lg"
              >
                <MapPin className="w-4 h-4 text-[#C9A25D]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Large WhatsApp Box */}
          <div className="lg:col-span-5 p-8 lg:p-10 rounded-3xl bg-[#2B1B17] border border-[#C9A25D]/40 text-center flex flex-col items-center justify-center space-y-6 shadow-2xl relative overflow-hidden text-[#FFF8F3]">
            <div className="w-16 h-16 rounded-full bg-[#D98C8C]/20 border border-[#C9A25D]/40 flex items-center justify-center text-[#C9A25D] shadow-inner">
              <MessageCircle className="w-8 h-8 fill-[#C9A25D] text-transparent" />
            </div>

            <div>
              <h3 className="font-cormorant text-3xl font-bold text-[#FFF8F3] mb-2">
                Ready for Your Makeover?
              </h3>
              <p className="text-sm text-[#FFF8F3]/80 font-light">
                Appointment ke liye WhatsApp karein. Rates & slots shared instantly!
              </p>
            </div>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D98C8C] via-[#D98C8C] to-[#C9A25D] text-[#2B1B17] font-semibold text-base shadow-xl hover:scale-105 transition-transform"
            >
              <Sparkles className="w-5 h-5 fill-[#2B1B17]" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
