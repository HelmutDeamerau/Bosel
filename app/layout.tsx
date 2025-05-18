import { ReactNode } from "react";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import RouteLoader from "@/hooks/RouteLoader";
import AppReadyWrapper from "@/hooks/AppReadyWrapper";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-german",
});

export const metadata: Metadata = {
  title: "Reitanlage Bosel",
  description: "Die Reitsportanlage an der Bosel bietet Reitanlagen, Pferdepensionen und eine Reitschule in Coswig bei Meißen in der Nähe von Dresden.",
  keywords: [
    "Pferdepension Dresden",
    "Reitanlage Dresden",
    "Reitschule Dresden",
    "PferdePensionen Dresden",
    "Reiten lernen Dresden",
    "Reiterferien Dresden",
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
    title: "Reitanlage Bosel",
    description: "Reiten lernen & Pferdepension in Coswig bei Dresden.",
    type: "website",
    url: "https://bosel-reitanlage.de",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Reitanlage Bosel",
      },
    ],
  },
  metadataBase: new URL("https://bosel-reitanlage.de"), 
  alternates: {
    canonical: "/",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="de" className="scroll-smooth">
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
