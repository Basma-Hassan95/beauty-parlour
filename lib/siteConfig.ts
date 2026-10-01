export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  ctaText: string;
  image: string;
}

export interface BridalStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspectRatio: string;
  placeholderGradient: string;
  imagePath?: string;
  tiktokVideoUrl?: string;
  alt: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  iconName: 'sparkles' | 'shieldCheck' | 'heartHandshake';
}

export const siteConfig = {
  name: "Saba & Muntaha's Beauty Saloon",
  shortName: "Saba & Muntaha's",
  monogram: "S&M",
  tagline: "Beauty care, close to home in PECHS.",
  subTagline: "Appointment ke liye WhatsApp karein",
  address: "Shop 3, Ground Floor, Arab Tower, Allama Iqbal Rd, Block 2, P.E.C.H.S., Karachi, Pakistan",
  phone: "+92 306 2788899",
  whatsappNumber: "923062788899",
  whatsappLink: "https://wa.me/923062788899",
  whatsappDefaultMessage: "Hello Saba & Muntaha's Saloon! I would like to inquire about services & rates.",
  timing: "Open Daily • Closes at 9:00 PM",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Saba+%26+Muntaha%27s+Beauty+Saloon+PECHS+Karachi",
  tiktokLink: "https://www.tiktok.com/@sabaandmuntaha",
  bridalTiktokVideoLink: "https://www.tiktok.com/@sabaandmuntaha/video/7685342881573244180",
  hairTiktokVideoLink: "https://www.tiktok.com/@sabaandmuntaha/video/7684830132707675412",
  facebookLink: "https://www.facebook.com/people/Saba-muntaha-beauty-salon/61593222983493/",
  ratesPlaceholder: "Rates on WhatsApp",

  marqueeItems: [
    "Hair Styling",
    "Glowing Facials",
    "Bridal Couture",
    "Party Makeup",
    "Nail Art & Care",
    "PECHS Karachi",
    "Personalized Beauty"
  ],

  services: [
    {
      id: "hair-cut-styling",
      title: "Hair Cut & Styling",
      category: "Hair",
      description: "Precision haircuts, blowouts, and signature styling tailored to your face structure and personal aesthetic.",
      tags: ["Precision Cuts", "Blowouts", "Signature Waves", "Scalp Care"],
      ctaText: "Rates on WhatsApp",
      image: "/images/hair-cut.jpg"
    },
    {
      id: "hair-color",
      title: "Hair Color & Highlights",
      category: "Hair",
      description: "Rich glosses, subtle balayage, full coverage, and vibrant multidimensional highlights using premium gentle formulations.",
      tags: ["Balayage", "Gloss Treatment", "Root Touch-up", "Highlights"],
      ctaText: "Rates on WhatsApp",
      image: "/images/hair-color.jpg"
    },
    {
      id: "facials-skin-care",
      title: "Facials & Skin Care",
      category: "Skin",
      description: "Deep cleansing, hydration therapies, organic glow facials, and anti-aging skin treatments for instant radiance.",
      tags: ["Hydra Glow", "Deep Cleansing", "Organic Facial", "Skin Radiance"],
      ctaText: "Rates on WhatsApp",
      image: "/images/facials.jpg"
    },
    {
      id: "bridal-makeup",
      title: "Bridal Makeup",
      category: "Bridal",
      description: "Exclusive bridal makeovers tailored for Barat, Walima, and Nikkah. Long-lasting, HD finish with personal consultation.",
      tags: ["HD Makeup", "Airbrush Look", "Nikkah & Barat", "Jewelry Setting"],
      ctaText: "Rates on WhatsApp",
      image: "/images/bridal.jpg"
    },
    {
      id: "party-makeup",
      title: "Party & Event Makeup",
      category: "Makeup",
      description: "Glamorous party looks, soft soft-glam, and evening elegance designed to highlight your natural features flawlessly.",
      tags: ["Soft Glam", "Evening Look", "Eyelash Styling", "Contour & Highlight"],
      ctaText: "Rates on WhatsApp",
      image: "/images/party-makeup.jpg"
    },
    {
      id: "hands-feet",
      title: "Hands & Feet Care",
      category: "Nails & Care",
      description: "Pampering manicures, pedicures, gel polishes, and soothing spa scrubs for soft, immaculate hands and feet.",
      tags: ["Spa Manicure", "Relaxing Pedicure", "Gel Polish", "Nail Art"],
      ctaText: "Rates on WhatsApp",
      image: "/images/hands-feet.jpg"
    }
  ] as ServiceItem[],

  bridalJourney: [
    {
      step: "01",
      title: "Personal Consultation",
      subtitle: "Understanding Your Vision",
      description: "We discuss your wedding attire, jewelry theme, skin type, and preferred aesthetics to curate your dream bridal look.",
      highlights: ["Skin Assessment", "Outfit & Jewelry Matching", "Customized Schedule"]
    },
    {
      step: "02",
      title: "Bridal Trial & Skin Prep",
      subtitle: "Perfection in Advance",
      description: "Pre-wedding skin hydration treatments and hair/makeup trial ensuring confidence and zero surprises on your special day.",
      highlights: ["Glow Skin Prep", "Hairstyling Preview", "Makeup Shade Matching"]
    },
    {
      step: "03",
      title: "The Big Day Transformation",
      subtitle: "Unmatched Bridal Glamour",
      description: "Relax in our serene PECHS suite while our expert artists craft your HD bridal makeover with high-end premium products.",
      highlights: ["HD Waterproof Base", "Dupatta & Jewelry Setting", "VIP Private Care"]
    },
    {
      step: "04",
      title: "Touch-Ups & Final Reveal",
      subtitle: "Ready for the Spotlight",
      description: "Final inspect under studio lighting, lip touch-up kit, and photo-ready finishing touches before your grand entrance.",
      highlights: ["Studio Light Check", "Touch-Up Essentials", "Photography Ready"]
    }
  ] as BridalStep[],

  gallery: [
    {
      id: "gal-1",
      title: "Signature Royal Bridal Transformation",
      category: "Bridal",
      aspectRatio: "aspect-[3/4]",
      placeholderGradient: "from-[#4A1F35] via-[#E27A9A]/30 to-[#1A0B14]",
      imagePath: "/images/gallery-1.jpg",
      tiktokVideoUrl: "https://www.tiktok.com/@sabaandmuntaha/video/7689895799286664454",
      alt: "Saba & Muntaha Saloon TikTok Bridal Makeup Transformation"
    },
    {
      id: "gal-2",
      title: "Dimensional Soft Balayage & Hair Styling",
      category: "Hair",
      aspectRatio: "aspect-[4/3]",
      placeholderGradient: "from-[#1A0B14] via-[#D9A38F]/30 to-[#4A1F35]",
      imagePath: "/images/gallery-2.jpg",
      tiktokVideoUrl: "https://www.tiktok.com/@sabaandmuntaha/video/7684830132707675412",
      alt: "Saba & Muntaha Saloon TikTok Hair Styling & Color Transformation"
    },
    {
      id: "gal-3",
      title: "Radiant Skin & Dewy Glow",
      category: "Skin",
      aspectRatio: "aspect-[1/1]",
      placeholderGradient: "from-[#4A1F35] via-[#D9AD63]/30 to-[#1A0B14]",
      imagePath: "/images/gallery-3.jpg",
      alt: "Facial and glowing skin treatment"
    },
    {
      id: "gal-4",
      title: "Nikkah Soft Glam Elegance",
      category: "Bridal",
      aspectRatio: "aspect-[3/4]",
      placeholderGradient: "from-[#1A0B14] via-[#E27A9A]/40 to-[#4A1F35]",
      imagePath: "/images/gallery-4.jpg",
      tiktokVideoUrl: "https://www.tiktok.com/@sabaandmuntaha/video/7689895799286664454",
      alt: "Nikkah bridal makeover"
    },
    {
      id: "gal-5",
      title: "Sleek Party Makeover",
      category: "Makeup",
      aspectRatio: "aspect-[4/3]",
      placeholderGradient: "from-[#4A1F35] via-[#D9A38F]/40 to-[#1A0B14]",
      imagePath: "/images/gallery-5.jpg",
      alt: "Party glam styling"
    },
    {
      id: "gal-6",
      title: "Luxe Spa Pedicure & Polish",
      category: "Nails & Care",
      aspectRatio: "aspect-[1/1]",
      placeholderGradient: "from-[#1A0B14] via-[#D9AD63]/40 to-[#4A1F35]",
      imagePath: "/images/gallery-6.jpg",
      alt: "Hands and feet care treatments"
    }
  ] as GalleryItem[],

  whyUs: [
    {
      id: "why-1",
      title: "Certified Expertise",
      description: "Professional artists trained in high-definition bridal makeup, precision hair artistry, and modern dermatological skin care.",
      iconName: "sparkles"
    },
    {
      id: "why-2",
      title: "Hygienic & Premium Suite",
      description: "Strict sanitation protocols with sanitized tools, single-use disposables, and top-tier imported cosmetic products.",
      iconName: "shieldCheck"
    },
    {
      id: "why-3",
      title: "Personalized PECHS Care",
      description: "Warm, attentive care right in the heart of PECHS, tailored to your unique preferences without rushed appointments.",
      iconName: "heartHandshake"
    }
  ] as WhyUsPoint[]
};
