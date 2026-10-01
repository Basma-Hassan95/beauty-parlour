"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/siteConfig";
import { Video, ExternalLink, Sparkles, Scissors, Crown, Play } from "lucide-react";

export default function TikTokReels() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const tiktokVideos = [
    {
      id: "7685342881573244180",
      title: "Signature Royal Bridal Makeover",
      category: "Bridal Couture",
      icon: Crown,
      poster: "/images/bridal.jpg",
      url: siteConfig.bridalTiktokVideoLink,
    },
    {
      id: "7684830132707675412",
      title: "Dimensional Soft Balayage & Hair Styling",
      category: "Hair Artistry",
      icon: Scissors,
      poster: "/images/hair-color.jpg",
      url: siteConfig.hairTiktokVideoLink,
    },
  ];

  // Load TikTok's official embed script safely on client
  useEffect(() => {
    const existingScript = document.getElementById("tiktok-embed-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tiktok-embed-script";
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll(".tiktok-card");

      gsap.fromTo(
        cards,
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
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="reels"
      ref={sectionRef}
      className="relative py-24 px-6 lg:px-16 bg-[#FFF8F3] text-[#2B1B17] bg-noise overflow-hidden border-y border-[#D98C8C]/20"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-[#D98C8C]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1B17] text-xs font-semibold text-[#C9A25D] tracking-widest uppercase border border-[#C9A25D]/30 shadow-sm">
            <Video className="w-3.5 h-3.5 text-[#D98C8C] animate-pulse" />
            <span>TIKTOK REELS & TRANSFORMATIONS</span>
          </div>
          <h2 className="font-cormorant text-fluid-h2 font-bold text-[#2B1B17]">
            Watch Real <span className="text-[#D98C8C] italic">TikTok Transformations</span>
          </h2>
          <p className="text-[#2B1B17]/75 text-fluid-body font-light">
            Watch transformations from our official TikTok channel <span className="text-[#C9A25D] font-semibold">@sabaandmuntaha</span>. Click to watch on TikTok!
          </p>
        </div>

        {/* 2 TikTok Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {tiktokVideos.map((video) => {
            const Icon = video.icon;
            return (
              <div
                key={video.id}
                className="tiktok-card group relative rounded-3xl overflow-hidden bg-white border border-[#D98C8C]/30 hover:border-[#C9A25D] transition-all duration-500 shadow-xl p-4 flex flex-col justify-between"
              >
                {/* Header info */}
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#D98C8C]/20 flex items-center justify-center text-[#D98C8C]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-lg font-bold text-[#2B1B17]">
                        {video.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#D98C8C] uppercase font-semibold">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B1B17] text-xs text-[#C9A25D] border border-[#C9A25D]/30 hover:bg-[#D98C8C] hover:text-[#FFF8F3] transition-all font-semibold"
                  >
                    <span>Watch on TikTok</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Video Showcase Card Poster Container */}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="relative w-full h-[28rem] rounded-2xl overflow-hidden bg-[#2B1B17] border border-[#D98C8C]/20 group cursor-pointer block"
                >
                  {/* High Quality HD Poster Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B17]/80 via-[#2B1B17]/20 to-transparent" />

                  {/* Center Glowing Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10">
                    <div className="w-16 h-16 rounded-full bg-[#D98C8C] text-[#FFF8F3] flex items-center justify-center shadow-[0_0_25px_rgba(217,140,140,0.6)] group-hover:scale-110 group-hover:bg-[#C9A25D] transition-all duration-300">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-[#2B1B17]/90 text-[#FFF8F3] text-xs font-semibold uppercase tracking-wider border border-[#D98C8C]/40 group-hover:border-[#C9A25D] transition-colors shadow-lg">
                      Play Transformation Video
                    </span>
                  </div>

                  {/* Top-Right TikTok Badge */}
                  <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#2B1B17]/80 backdrop-blur-md text-[#C9A25D] text-[11px] font-mono border border-[#C9A25D]/30">
                    TikTok @sabaandmuntaha
                  </div>
                </a>

                {/* Footer link */}
                <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#2B1B17]/75">
                  <span className="font-medium">Saba & Muntaha's Beauty Saloon</span>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D98C8C] hover:underline font-semibold flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3 text-[#C9A25D]" />
                    Rates on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
