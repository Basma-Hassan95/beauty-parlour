"use client";

import { useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Sparkles, ArrowUpRight, Video, Share2 } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#FFF8F3] text-[#2B1B17] pt-20 pb-12 px-6 lg:px-16 border-t border-[#D98C8C]/30 bg-noise overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#D98C8C]/25">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-cormorant text-3xl font-bold text-[#2B1B17]">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-[#2B1B17]/80 font-light max-w-sm leading-relaxed">
              Premium salon care, couture bridal makeovers, and personalized skin aesthetics located in PECHS Block 2, Karachi.
            </p>
            <div className="text-xs text-[#D98C8C] font-mono uppercase tracking-widest pt-2 font-semibold">
              {siteConfig.address}
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F3] hover:bg-[#D98C8C] text-xs text-[#2B1B17] hover:text-[#FFF8F3] border border-[#D98C8C]/40 transition-all font-semibold shadow-sm"
              >
                <Video className="w-3.5 h-3.5 text-[#C9A25D]" />
                <span>TikTok: @sabaandmuntaha</span>
              </a>

              <a
                href={siteConfig.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F3] hover:bg-[#D98C8C] text-xs text-[#2B1B17] hover:text-[#FFF8F3] border border-[#D98C8C]/40 transition-all font-semibold shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5 text-[#C9A25D]" />
                <span>Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D98C8C] mb-4 font-bold">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#services" data-cursor-hover className="text-[#2B1B17]/80 hover:text-[#D98C8C] transition-colors">
                  Menu & Services
                </a>
              </li>
              <li>
                <a href="#gallery" data-cursor-hover className="text-[#2B1B17]/80 hover:text-[#D98C8C] transition-colors">
                  Portfolio Lookbook
                </a>
              </li>
              <li>
                <a href="#visit" data-cursor-hover className="text-[#2B1B17]/80 hover:text-[#D98C8C] transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct WhatsApp */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D98C8C] mb-4 font-bold">
              DIRECT BOOKING
            </h4>
            <p className="text-xs text-[#2B1B17]/80">
              WhatsApp for instant response, rates, and customized appointment slots.
            </p>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D98C8C] hover:text-[#C9A25D] transition-colors"
            >
              <span>{siteConfig.phone}</span>
              <ArrowUpRight className="w-4 h-4 text-[#C9A25D]" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2B1B17]/60 font-mono pt-8 font-medium">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[#D98C8C]">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A25D]" />
            <span>PECHS Block 2 • Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
