"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    // Template WA Bama Yaza
    const whatsappMessage = `Halo Bama, saya ${formData.name}. ${
      formData.topic ? `Topik: ${formData.topic}. ` : ""
    }${formData.message}${
      formData.contact ? ` (Kontak/Email: ${formData.contact})` : ""
    }`;

    const waUrl = `https://wa.me/6282110681473?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", contact: "", topic: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 sm:p-12 md:p-16 rounded-[3rem] border border-foreground/15 relative overflow-hidden shadow-2xl"
      >
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left Column: Direct Contact Details */}
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
                Hubungi Saya
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                Mari <span className="text-gradient-primary">Terhubung</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Terbuka untuk peluang karir di bidang Mechanical Engineering, Energy Conversion,
                Piping &amp; Fluid Systems, Maintenance &amp; Reliability, serta Project Engineering.
                Siap berdiskusi untuk kolaborasi maupun peluang profesional.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:bamayaza@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel border border-foreground/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Email</span>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    bamayaza@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-2xl glass-panel border border-foreground/10 flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Domisili</span>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    Surabaya, Jawa Timur, Indonesia
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/6282110681473"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel border border-foreground/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all shadow-sm">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">WhatsApp Chat</span>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    0821-1068-1473
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl glass-panel border border-foreground/15 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Email / No. Telepon
                </label>
                <input
                  type="text"
                  placeholder="email@example.com / 0812xxxx"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl glass-panel border border-foreground/15 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Topik / Subjek
                </label>
                <input
                  type="text"
                  placeholder="Peluang Karir / Diskusi Rekayasa / Proyek"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl glass-panel border border-foreground/15 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan pesan atau detail peluang yang ingin didiskusikan..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl glass-panel border border-foreground/15 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Membuka WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Pesan ke WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
