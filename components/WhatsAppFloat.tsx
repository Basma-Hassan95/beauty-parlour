"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9990] flex flex-col items-end gap-2 group max-w-[calc(100vw-2rem)]">
      {/* Dark Compact Tooltip */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-[#2B1B17] border border-[#C9A25D]/50 text-[#FFF8F3] text-[11px] sm:text-xs shadow-xl animate-bounce">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
          
          {/* Small WhatsApp Icon inside Tooltip */}
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.163-3.487-8.413Z"/>
          </svg>

          <span className="font-semibold tracking-wide text-[#FFF8F3] whitespace-nowrap">
            {siteConfig.subTagline}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#FFF8F3]/60 hover:text-[#FFF8F3] p-0.5 rounded-full ml-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      )}

      {/* Compact Floating WhatsApp Button */}
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulse Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.163-3.487-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
