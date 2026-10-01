"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Bridal Journey", href: "#bridal" },
    { name: "Reels", href: "#reels" },
    { name: "Lookbook", href: "#gallery" },
    { name: "Location", href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9900] transition-all duration-500 ${
        isScrolled
          ? "bg-[#FFF8F3]/95 backdrop-blur-md border-b border-[#D98C8C]/25 shadow-md py-3.5"
          : "bg-gradient-to-b from-[#2B1B17]/60 via-[#2B1B17]/20 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group" data-cursor-hover>
          <div className="w-9 h-9 rounded-full bg-[#2B1B17] text-[#C9A25D] flex items-center justify-center font-cormorant font-bold text-sm border border-[#C9A25D]/50 shadow-md group-hover:scale-105 transition-transform">
            S&M
          </div>
          <div className="flex flex-col">
            <span
              className={`font-cormorant text-lg lg:text-xl font-bold tracking-tight transition-colors leading-none ${
                isScrolled ? "text-[#2B1B17]" : "text-[#FFF8F3] drop-shadow-md"
              }`}
            >
              {siteConfig.shortName}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#D98C8C] uppercase font-bold">
              BEAUTY SALOON
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF8F3]/80 backdrop-blur-md border border-[#D98C8C]/30 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor-hover
              className="text-xs lg:text-sm font-semibold text-[#2B1B17] hover:text-[#D98C8C] hover:bg-[#D98C8C]/15 px-4 py-1.5 rounded-full transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A84A4A] hover:bg-[#8F3B3B] text-[#FFF8F3] text-xs font-semibold tracking-wide transition-all shadow-lg hover:scale-105 border border-[#FFF8F3]/20"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Book Appointment</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#2B1B17] text-[#FFF8F3] hover:text-[#C9A25D] transition-colors border border-[#C9A25D]/40 shadow-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FFF8F3]/98 backdrop-blur-xl border-b border-[#D98C8C]/30 shadow-2xl p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#2B1B17] hover:text-[#D98C8C] py-2 border-b border-[#D98C8C]/15 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#A84A4A] hover:bg-[#8F3B3B] text-[#FFF8F3] font-semibold text-sm shadow-md mt-2"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
