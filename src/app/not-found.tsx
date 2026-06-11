import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="bg-hype-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Big 404 */}
          <div>
            <p className="font-display text-[clamp(6rem,20vw,14rem)] font-black leading-none text-hype-yellow/15 select-none">
              404
            </p>
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Page Not Found
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight mb-5">
              Views-nya Nol.{" "}
              <span className="text-hype-yellow italic">
                Halamannya Hilang.
              </span>
            </h1>

            <p className="text-hype-gray text-lg leading-relaxed mb-8 max-w-md">
              Halaman yang kamu cari sepertinya sudah move on. Tapi kami masih
              di sini — siap bantu kreator dan merchant lokal Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold px-7 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Balik ke Beranda
              </Link>
              <Link
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-hype-border hover:border-hype-yellow/40 text-hype-white font-bold px-7 py-4 rounded-xl transition-all hover:bg-hype-black-alt"
              >
                <MessageCircle size={18} />
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
