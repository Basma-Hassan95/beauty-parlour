"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/siteConfig";
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Sparkles, Video, Play } from "lucide-react";

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = ["All", "Hair", "Skin", "Bridal", "Makeup", "Nails & Care"];

  const filteredItems =
    activeFilter === "All"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeFilter);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const items = gridRef.current.querySelectorAll(".gallery-card");

      gsap.fromTo(
        items,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
          scale: 0.95,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [activeFilter] }
  );

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImageIndex(null);
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const getTikTokVideoId = (url?: string) => {
    if (!url) return null;
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : null;
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-16 bg-[#FFF8F3] text-[#2B1B17] bg-noise overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B1B17] text-xs font-semibold text-[#C9A25D] tracking-widest uppercase border border-[#C9A25D]/30 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#D98C8C]" />
            <span>PORTFOLIO LOOKBOOK</span>
          </div>
          <h2 className="font-cormorant text-fluid-h2 font-bold text-[#2B1B17]">
            Our Saloon <span className="text-[#D98C8C] italic">Lookbook & Work</span>
          </h2>
          <p className="text-[#2B1B17]/80 text-fluid-body font-light">
            Real signature transformations from Saba & Muntaha's PECHS salon.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                data-cursor-hover
                className={`px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-[#D98C8C] text-[#2B1B17] font-semibold border-[#D98C8C] shadow-md"
                    : "bg-[#FFF8F3] text-[#2B1B17]/80 hover:text-[#2B1B17] border-[#D98C8C]/30 hover:border-[#C9A25D]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const tiktokId = getTikTokVideoId(item.tiktokVideoUrl);
            const hasImage = item.imagePath && !failedImages[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                data-cursor-hover
                className="gallery-card group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl bg-white border border-[#D98C8C]/30 hover:border-[#C9A25D] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Full Height Edge-to-Edge Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#2B1B17]">
                  {hasImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.imagePath}
                      alt={item.alt}
                      onError={() => {
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }));
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 space-y-3 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#D98C8C]/20 border border-[#C9A25D]/40 flex items-center justify-center text-[#C9A25D]">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <span className="font-cormorant text-xl font-bold text-[#FFF8F3]">
                        {item.title}
                      </span>
                    </div>
                  )}

                  {/* TikTok Badge Tag if Video */}
                  {tiktokId && (
                    <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D98C8C] text-[#2B1B17] font-semibold text-[11px] shadow-lg animate-pulse">
                      <Video className="w-3.5 h-3.5 fill-current" />
                      <span>TikTok Video</span>
                    </div>
                  )}

                  {/* Subtle Text Contrast Backdrop Bar at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#2B1B17] via-[#2B1B17]/75 to-transparent z-10 flex items-end justify-between">
                    <span className="font-cormorant text-lg font-bold text-[#FFF8F3] drop-shadow-md leading-tight max-w-[75%]">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#C9A25D] tracking-widest px-2.5 py-1 rounded-full bg-[#2B1B17]/80 border border-[#C9A25D]/30 shrink-0">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Action Overlay */}
                  <div className="absolute inset-0 bg-[#2B1B17]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D98C8C] text-[#2B1B17] font-semibold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-transform">
                      {tiktokId ? <Play className="w-4 h-4 fill-current" /> : <Maximize2 className="w-4 h-4" />}
                      <span>{tiktokId ? "Play TikTok Video" : "View Fullscreen"}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#2B1B17]/95 backdrop-blur-xl p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#3D2621] text-[#FFF8F3] hover:bg-[#D98C8C] hover:text-[#2B1B17] flex items-center justify-center transition-colors border border-[#D98C8C]/30 z-30"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#3D2621] text-[#FFF8F3] hover:bg-[#C9A25D] hover:text-[#2B1B17] flex items-center justify-center transition-colors border border-[#D98C8C]/30 z-30"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center justify-center p-6 glass-panel-dark rounded-3xl border border-[#C9A25D]/40">
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-2xl border border-[#D98C8C]/20 flex items-center justify-center bg-black">
              {getTikTokVideoId(filteredItems[selectedImageIndex].tiktokVideoUrl) ? (
                /* Live TikTok Embed Video Player */
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${getTikTokVideoId(filteredItems[selectedImageIndex].tiktokVideoUrl)}`}
                  className="w-full h-full border-0"
                  title={filteredItems[selectedImageIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : filteredItems[selectedImageIndex].imagePath && !failedImages[filteredItems[selectedImageIndex].id] ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={filteredItems[selectedImageIndex].imagePath!}
                  alt={filteredItems[selectedImageIndex].alt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center space-y-3">
                  <Sparkles className="w-12 h-12 text-[#C9A25D] mx-auto animate-pulse" />
                  <p className="font-cormorant text-2xl font-bold text-[#FFF8F3]">
                    {filteredItems[selectedImageIndex].title}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full text-xs text-[#D98C8C] font-mono gap-2">
              <span className="font-cormorant text-xl text-[#FFF8F3] font-bold">
                {filteredItems[selectedImageIndex].title} ({filteredItems[selectedImageIndex].category})
              </span>
              <div className="flex items-center gap-4">
                {filteredItems[selectedImageIndex].tiktokVideoUrl && (
                  <a
                    href={filteredItems[selectedImageIndex].tiktokVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#D98C8C] font-sans font-semibold flex items-center gap-1"
                  >
                    Open on TikTok App ↗
                  </a>
                )}
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#C9A25D] font-sans font-semibold flex items-center gap-1"
                >
                  Inquire on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#3D2621] text-[#FFF8F3] hover:bg-[#C9A25D] hover:text-[#2B1B17] flex items-center justify-center transition-colors border border-[#D98C8C]/30 z-30"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
