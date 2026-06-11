import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy — HYPE Media Indonesia",
  description: "Kebijakan privasi PT HYPE MEDIA INDONESIA.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
        <h1 className="font-display text-4xl sm:text-5xl font-black text-hype-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-hype-gray">
          Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <div className="mt-8 space-y-6 text-hype-gray leading-relaxed">
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p>
              {siteConfig.legalName} (&quot;HYPE&quot;, &quot;kami&quot;) mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, nomor telepon, dan email saat Anda menghubungi kami atau mendaftar sebagai kreator maupun merchant.
            </p>
          </section>
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">2. Penggunaan Informasi</h2>
            <p>
              Informasi yang dikumpulkan digunakan untuk menghubungi Anda terkait layanan, mengelola kampanye TikTok GO, dan meningkatkan pengalaman layanan kami.
            </p>
          </section>
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">3. Keamanan Data</h2>
            <p>
              Kami berkomitmen menjaga keamanan data Anda dan tidak akan menjual atau berbagi informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda.
            </p>
          </section>
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">4. Hubungi Kami</h2>
            <p>
              Pertanyaan terkait kebijakan privasi dapat dikirimkan ke{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-hype-yellow hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
