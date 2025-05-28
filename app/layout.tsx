import { ReactNode } from "react";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import RouteLoader from "@/hooks/RouteLoader";
import AppReadyWrapper from "@/hooks/AppReadyWrapper";
import BusinessSchema from "@/components/BusinessSchema";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-german",
});

export const metadata: Metadata = {
  title: "Reiterferien in Dresden | Reitanlage Bosel",
  description: "Erleben Sie unvergessliche Reiterferien in Dresden bei der Reitanlage Bosel. Professioneller Reitunterricht, Pferdepension und Reitschule in Coswig bei Meißen. Ideal für Kinder und Erwachsene.",
  keywords: [
    "Reiterferien in Dresden",
    "Reitferien für Kinder",
    "Reitunterricht Dresden",
    "Reiterhof Dresden",
    "Reitstall Sachsen",
    "Pferdepension Dresden",
    "Reitanlage Dresden",
    "Reitschule Dresden",
    "PferdePensionen Dresden",
    "Reiten lernen Dresden",
    "Reiten Dresden",
    "Pferdepension Meißen",
    "Reitanlage Meißen",
    "Reitschule Meißen",
    "PferdePensionen Meißen",
    "Reiten lernen Meißen",
    "Reiterferien Meißen",
    "Reiten Meißen",
    "Pferdepension Sachsen",
    "Reitanlage Sachsen",
    "Reitschule Sachsen",
    "PferdePensionen Sachsen",
    "Reiten lernen Sachsen",
    "Reiterferien Sachsen",
    "Reiten Sachsen",
  ],
  openGraph: {
    title: "Reiterferien in Dresden | Reitanlage Bosel",
    description: "Professioneller Reitunterricht & Pferdepension in Coswig bei Dresden. Erleben Sie unvergessliche Reiterferien für die ganze Familie.",
    type: "website",
    url: "https://reitanlage-bosel.de",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Reiterferien in Dresden - Reitanlage Bosel",
      },
    ],
  },
  metadataBase: new URL("https://reitanlage-bosel.de"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <BusinessSchema />
      </head>
      <body
        className={`${firaSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <AppReadyWrapper>
          <RouteLoader />
          {children}
          <Footer />
        </AppReadyWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
