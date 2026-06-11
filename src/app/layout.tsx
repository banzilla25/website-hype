import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/lib/site-config";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Agensi TikTok GO Indonesia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "TikTok GO",
    "agensi TikTok GO",
    "kreator TikTok Indonesia",
    "TikTok marketing Indonesia",
    "HYPE Media Indonesia",
    "voucher TikTok",
    "O2O marketing",
    "kreator kuliner",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Agensi TikTok GO Indonesia`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Agensi TikTok GO`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Agensi TikTok GO Indonesia`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingLocation: {
    "@type": "Place",
    name: siteConfig.location.display,
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${siteConfig.contact.whatsapp}`,
    contactType: "customer service",
    availableLanguage: "Indonesian",
  },
  sameAs: [
    siteConfig.contact.instagramLink,
    siteConfig.contact.tiktokLink,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${anton.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-hype-black text-hype-white antialiased">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
