import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import BridalJourney from "@/components/BridalJourney";
import TikTokReels from "@/components/TikTokReels";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FFF8F3] text-[#2B1B17] overflow-hidden">
      {/* 1. Preloader */}
      <Preloader />

      {/* 2. Transparent Luxury Header Navbar */}
      <Navbar />

      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Dynamic Infinite Marquee Ticker */}
      <Marquee />

      {/* 5. Services Menu */}
      <Services />

      {/* 6. Bridal Journey (Pinned Horizontal Scroll) */}
      <BridalJourney />

      {/* 7. TikTok Reels & Live Transformation Showcase */}
      <TikTokReels />

      {/* 8. Portfolio Gallery Lookbook */}
      <Gallery />

      {/* 9. Why Us (Light Blush Contrast Section) */}
      <WhyUs />

      {/* 10. Visit Us & Location Info */}
      <Visit />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
