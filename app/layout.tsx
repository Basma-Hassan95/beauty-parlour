import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hind } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GSAPRegister from "@/components/GSAPRegister";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Luxury Beauty Saloon in PECHS Karachi`,
  description: "Bespoke hair styling, radiant skin facials, and signature bridal makeup in PECHS Block 2, Karachi. Book your appointment on WhatsApp.",
  keywords: ["Beauty Saloon Karachi", "Saloon in PECHS", "Bridal Makeup Karachi", "Hair Salon PECHS", "Saba & Muntaha Saloon"],
  openGraph: {
    title: siteConfig.name,
    description: "Beauty care, close to home in PECHS Karachi. Premium bridal makeup, hair styling & skin therapy.",
    url: siteConfig.googleMapsLink,
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A0B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hind.variable}`}>
      <body className="bg-plum-dark text-blush-soft antialiased">
        <GSAPRegister />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
