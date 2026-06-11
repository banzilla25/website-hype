import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — HYPE Media Indonesia",
  description: "Syarat dan ketentuan layanan PT HYPE MEDIA INDONESIA.",
};

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl font-black text-hype-white mb-6">
          Syarat &amp; Ketentuan
        </h1>
        <p className="text-hype-gray mb-8">
          Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <div className="space-y-6 text-hype-gray leading-relaxed">
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">1. Penerimaan Syarat</h2>
            <p>
              Dengan menggunakan layanan {siteConfig.legalName} (&quot;HYPE&quot;), Anda menyetujui syarat dan ketentuan yang berlaku. Jika Anda tidak setuju, mohon untuk tidak menggunakan layanan kami.
            </p>
          </section>
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">2. Layanan HYPE</h2>
            <p>
              HYPE menyediakan layanan campaign TikTok GO yang menghubungkan kreator konten dengan merchant/bisnis lokal. Detail layanan, komisi, dan ketentuan teknis akan dijelaskan dalam perjanjian terpisah antara HYPE dan pihak terkait.
            </p>
          </section>
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">3. Ketentuan Kreator</h2>
            <p>
              Kreator yang bergabung dengan HYPE wajib memenuhi persyaratan minimum akun, mematuhi panduan konten TikTok, dan menyelesaikan campaign sesuai kesepakatan. Komisi dan fee dibayarkan sesuai ketentuan yang berlaku.
            </p>
          </section>
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">4. Ketentuan Merchant</h2>
            <p>
              Merchant yang bekerjasama dengan HYPE wajib menyediakan informasi bisnis yang akurat, menghormati kreator yang berkunjung, dan memenuhi kewajiban pembayaran sesuai perjanjian campaign.
            </p>
          </section>
          <section>
            <h2 className="text-hype-white font-bold text-xl mb-3">5. Hubungi Kami</h2>
            <p>
              Pertanyaan terkait syarat dan ketentuan dapat dikirimkan ke{" "}
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
