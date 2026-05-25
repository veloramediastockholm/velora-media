"use client";

import { useEffect } from "react";
import CinematicShowcase from "./components/CinematicShowcase";
import HeroSection from "./components/HeroSection";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-6 py-5">
          <h1 className="text-2xl font-black tracking-tight">Velora Media</h1>

          <div className="hidden md:flex gap-8 text-zinc-400">
            <a href="#showcase" className="hover:text-white transition">
              Showcases
            </a>

            <a href="#services" className="hover:text-white transition">
              Tjänster
            </a>

            <a href="#contact" className="hover:text-white transition">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />

      <CinematicShowcase />

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 md:mb-16">
            Tjänster
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Hemsidor</h3>
              <p className="text-zinc-400">
                Premium moderna hemsidor byggda för restauranger.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Google Synlighet</h3>
              <p className="text-zinc-400">
                Få fler kunder genom bättre Google-optimering.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Digital Meny</h3>
              <p className="text-zinc-400">
                Interaktiva menyer för mobil och onlinebeställningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 py-24 md:py-32 px-4 sm:px-6 bg-zinc-950"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Kontakt</h2>

            <p className="text-zinc-400 text-base md:text-lg">
              Boka en gratis demo för din restaurang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="w-full bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-white/10">
              <h3 className="text-3xl font-black mb-8">
                Kontaktinformation
              </h3>

              <div className="space-y-6 text-zinc-400">
                <div>
                  <p className="text-white font-semibold mb-1">E-post</p>
                  <p className="break-words">
                    Velora.media.stockholm@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-1">Telefon</p>
                  <p>0738749828</p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-1">Plats</p>
                  <p>Stockholm, Sverige</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-white/10">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Namn"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  type="email"
                  placeholder="E-post"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

                <textarea
                  placeholder="Berätta om din restaurang..."
                  rows={5}
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

                <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition-all">
                  Skicka Förfrågan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}