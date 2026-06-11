import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontak — HYPE Media Indonesia",
  description:
    "Hubungi HYPE Media Indonesia via WhatsApp, email, atau media sosial. Kami siap membantu bisnis dan kreator Anda.",
  alternates: { canonical: `${siteConfig.url}/kontak` },
};

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

const contacts = [
  {
    IconComponent: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    href: siteConfig.contact.whatsappLink,
    external: true,
  },
  {
    IconComponent: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
  },
  {
    IconComponent: InstagramIcon,
    label: "Instagram",
    value: siteConfig.contact.instagram,
    href: siteConfig.contact.instagramLink,
    external: true,
  },
  {
    IconComponent: MapPin,
    label: "Lokasi",
    value: siteConfig.location.display,
    href: "#",
    external: false,
  },
];

export default function KontakPage() {
  return (
    <div className="min-h-screen py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-hype-white mb-4">
            Mari Bekerja Sama
          </h1>
          <p className="text-hype-gray text-lg">
            Punya pertanyaan, atau siap memulai campaign? Hubungi kami.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {contacts.map((c) => {
            const Icon = c.IconComponent;
            return (
              <Link
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-5 bg-hype-black-alt border border-hype-border hover:border-hype-yellow/40 rounded-2xl px-6 py-5 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-hype-yellow" />
                </div>
                <div>
                  <p className="text-hype-gray text-xs font-medium uppercase tracking-wide mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-hype-white font-semibold group-hover:text-hype-yellow transition-colors">
                    {c.value}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Link
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-hype-yellow/10"
          >
            <MessageCircle size={24} />
            Chat via WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
