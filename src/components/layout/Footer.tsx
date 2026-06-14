import Link from "next/link";
import { MessageCircle, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const footerNav = [
  { label: "Beranda", href: "/" },
  { label: "Untuk Kreator", href: "/untuk-kreator" },
  { label: "Untuk Merchant", href: "/untuk-merchant" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-hype-yellow text-hype-black">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="HYPE Media Indonesia">
              {/*
                Uncomment saat logo siap — hapus <span> di bawah:
                import Image from "next/image";
                <Image
                  src="/images/logo/hype-logo-dark.svg"
                  alt="HYPE Media Indonesia"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              */}
              <span className="font-display text-3xl font-black tracking-tight text-hype-black leading-none">
                HYPE
              </span>
            </Link>
            <p className="mt-3 text-sm font-medium text-hype-black/80 leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm font-semibold text-hype-black">
              {siteConfig.legalName}
            </p>
            <div className="mt-3 flex items-start gap-2 text-sm text-hype-black/70">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>{siteConfig.location.display}</span>
            </div>
          </div>

          {/* Col 2 — Navigasi */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-hype-black/60 mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-hype-black hover:text-hype-black/60 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kontak */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-hype-black/60 mb-4">
              Hubungi
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-medium text-hype-black hover:text-hype-black/60 transition-colors"
                >
                  <MessageCircle size={16} />
                  {siteConfig.contact.whatsappDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-sm font-medium text-hype-black hover:text-hype-black/60 transition-colors"
                >
                  <Mail size={16} />
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-medium text-hype-black hover:text-hype-black/60 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                  {siteConfig.contact.instagram}
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.contact.tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-medium text-hype-black hover:text-hype-black/60 transition-colors"
                >
                  {/* TikTok icon via SVG since lucide doesn't have it */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.5a8.16 8.16 0 0 0 4.77 1.52V7.58a4.85 4.85 0 0 1-1-.89z" />
                  </svg>
                  {siteConfig.contact.tiktok}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Lokasi */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-hype-black/60 mb-4">
              Lokasi
            </h3>
            <div className="text-sm font-medium text-hype-black space-y-1">
              <p>{siteConfig.legalName}</p>
              <p>{siteConfig.location.city}</p>
              <p>{siteConfig.location.province}</p>
            </div>
            {/* Google Maps slot — add embed when address is ready */}
            <div className="mt-4 w-full h-28 bg-hype-black/10 rounded-lg flex items-center justify-center text-xs text-hype-black/50 border border-hype-black/20">
              <MapPin size={14} className="mr-1.5" />
              Google Maps — segera hadir
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hype-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-hype-black/70">
          <span>© 2026 {siteConfig.legalName}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-hype-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="hover:text-hype-black transition-colors"
            >
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
