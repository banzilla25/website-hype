"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const FOLLOWER_OPTIONS = [
  "1.000 – 5.000",
  "5.000 – 10.000",
  "10.000 – 50.000",
  "50.000 – 100.000",
  "100.000+",
];

const NICHE_OPTIONS = [
  "Kuliner / F&B",
  "Travel / Wisata",
  "Lifestyle",
  "Fashion & Beauty",
  "Hiburan / Entertainment",
  "Vlog Harian",
  "Lainnya",
];

export default function JoinCommunityModal() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [domisili, setDomisili] = useState("");
  const [followers, setFollowers] = useState("");
  const [niche, setNiche] = useState("");

  // Auto-open once per session
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("hype_join_shown")) {
        setOpen(true);
        sessionStorage.setItem("hype_join_shown", "1");
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo HYPE Media Indonesia!\n\nSaya ingin mendaftar sebagai Kreator HYPE:\n\n` +
      `📱 Username TikTok: @${username}\n` +
      `📞 Nomor WhatsApp: ${whatsapp}\n` +
      `📍 Domisili: ${domisili}\n` +
      `👥 Followers: ${followers}\n` +
      `🎯 Niche: ${niche}\n\n` +
      `Mohon konfirmasi pendaftaran saya. Terima kasih! 🙏`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, "_blank");
    handleClose();
  };

  return (
    <>
      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-hype-black border border-hype-border rounded-2xl w-full max-w-md pointer-events-auto shadow-2xl shadow-black/60">

                {/* Header */}
                <div className="flex items-start justify-between p-6 pb-5 border-b border-hype-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-hype-yellow/15 border border-hype-yellow/25 flex items-center justify-center shrink-0">
                      <Users size={18} className="text-hype-yellow" />
                    </div>
                    <div>
                      <span className="text-hype-yellow text-[10px] font-bold uppercase tracking-widest block mb-0.5">
                        Join Community
                      </span>
                      <h2 className="font-display text-lg font-black text-hype-white leading-tight">
                        Daftar Jadi Kreator HYPE
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-1.5 text-hype-gray hover:text-hype-white transition-colors rounded-lg hover:bg-hype-black-alt mt-0.5"
                    aria-label="Tutup"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Username */}
                  <div>
                    <label className="text-hype-white text-sm font-semibold block mb-1.5">
                      Username TikTok <span className="text-hype-yellow">*</span>
                    </label>
                    <div className="flex items-center bg-hype-black-alt border border-hype-border rounded-xl overflow-hidden focus-within:border-hype-yellow/50 transition-colors">
                      <span className="pl-4 pr-2 text-hype-gray font-bold text-sm select-none">@</span>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.replace(/^@/, ""))}
                        placeholder="username_tiktok_kamu"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-hype-white text-sm outline-none placeholder:text-hype-gray/40"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="text-hype-white text-sm font-semibold block mb-1.5">
                      Nomor WhatsApp <span className="text-hype-yellow">*</span>
                    </label>
                    <div className="flex items-center bg-hype-black-alt border border-hype-border rounded-xl overflow-hidden focus-within:border-hype-yellow/50 transition-colors">
                      <span className="pl-4 pr-2 text-hype-gray font-bold text-sm select-none">+62</span>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ""))}
                        placeholder="8xxxxxxxxxx"
                        required
                        className="flex-1 bg-transparent py-3 pr-4 text-hype-white text-sm outline-none placeholder:text-hype-gray/40"
                      />
                    </div>
                  </div>

                  {/* Domisili */}
                  <div>
                    <label className="text-hype-white text-sm font-semibold block mb-1.5">
                      Domisili <span className="text-hype-yellow">*</span>
                    </label>
                    <input
                      type="text"
                      value={domisili}
                      onChange={(e) => setDomisili(e.target.value)}
                      placeholder="Contoh: Jakarta Selatan, Tangerang..."
                      required
                      className="w-full bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 text-hype-white text-sm outline-none focus:border-hype-yellow/50 transition-colors placeholder:text-hype-gray/40"
                    />
                  </div>

                  {/* Followers */}
                  <div>
                    <label className="text-hype-white text-sm font-semibold block mb-1.5">
                      Jumlah Followers <span className="text-hype-yellow">*</span>
                    </label>
                    <select
                      value={followers}
                      onChange={(e) => setFollowers(e.target.value)}
                      required
                      style={{ colorScheme: "dark" }}
                      className="w-full bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 text-sm outline-none focus:border-hype-yellow/50 transition-colors cursor-pointer text-hype-white"
                    >
                      <option value="" disabled className="text-hype-gray">
                        Pilih range followers...
                      </option>
                      {FOLLOWER_OPTIONS.map((f) => (
                        <option key={f} value={f} className="text-hype-white bg-hype-black">
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Niche */}
                  <div>
                    <label className="text-hype-white text-sm font-semibold block mb-1.5">
                      Niche Akun <span className="text-hype-yellow">*</span>
                    </label>
                    <select
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      required
                      style={{ colorScheme: "dark" }}
                      className="w-full bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 text-sm outline-none focus:border-hype-yellow/50 transition-colors cursor-pointer text-hype-white"
                    >
                      <option value="" disabled className="text-hype-gray">
                        Pilih niche akun kamu...
                      </option>
                      {NICHE_OPTIONS.map((n) => (
                        <option key={n} value={n} className="text-hype-white bg-hype-black">
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold py-3.5 rounded-xl text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                    >
                      {/* WhatsApp icon */}
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Submit & Konfirmasi via WhatsApp
                    </button>
                    <p className="text-hype-gray/60 text-[11px] text-center mt-2.5">
                      Gratis selamanya · Respons dalam 1×24 jam
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Floating Join Button — bottom center ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(true)}
              className="pointer-events-auto bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-sm px-6 py-3 rounded-full shadow-xl shadow-hype-yellow/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Users size={15} />
              Join Komunitas Kreator
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
