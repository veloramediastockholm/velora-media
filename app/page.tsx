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
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
          <h1 className="text-2xl font-black tracking-tight">Velora Media</h1>

          <div className="hidden gap-8 text-zinc-400 md:flex">
            <a href="#showcase" className="transition hover:text-white">
              Showcases
            </a>

            <a href="#services" className="transition hover:text-white">
              Tjänster
            </a>

            <a href="#contact" className="transition hover:text-white">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />

      <CinematicShowcase />

      {/* SERVICES */}
      <section
        id="services"
        className="bg-black px-4 py-24 md:py-32 sm:px-6"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-12 text-4xl font-black md:mb-16 md:text-5xl">
            Tjänster
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-10">
              <h3 className="mb-4 text-2xl font-bold">Hemsidor</h3>
              <p className="text-zinc-400">
                Premium moderna hemsidor byggda för restauranger.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-10">
              <h3 className="mb-4 text-2xl font-bold">Google Synlighet</h3>
              <p className="text-zinc-400">
                Få fler kunder genom bättre Google-optimering.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-10">
              <h3 className="mb-4 text-2xl font-bold">Digital Meny</h3>
              <p className="text-zinc-400">
                Interaktiva menyer för mobil och onlinebeställningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="relative overflow-hidden bg-zinc-950 px-4 py-24 md:py-32 sm:px-6">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-amber-400">
              Resultat
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Så hjälper vi restauranger
              <br />
              att växa online.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              En modern hemsida kan bidra till fler direktbeställningar,
              starkare varumärke och bättre synlighet när kunder söker efter
              restauranger i närheten.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
              <div className="mb-5 text-5xl">📈</div>

              <h3 className="mb-4 text-2xl font-bold">
                Fler direktbeställningar
              </h3>

              <p className="leading-relaxed text-zinc-400">
                Minska beroendet av tredjepartsappar och låt fler kunder
                beställa direkt från restaurangen.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
              <div className="mb-5 text-5xl">⭐</div>

              <h3 className="mb-4 text-2xl font-bold">Starkare förtroende</h3>

              <p className="leading-relaxed text-zinc-400">
                Kunder bedömer ofta restauranger online innan de väljer var de
                ska äta eller beställa.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
              <div className="mb-5 text-5xl">📱</div>

              <h3 className="mb-4 text-2xl font-bold">Mobiloptimerat</h3>

              <p className="leading-relaxed text-zinc-400">
                Majoriteten av besök sker via mobil. Snabb laddning och tydlig
                meny gör det enklare att ta beslut.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
              <div className="mb-5 text-5xl">🔍</div>

              <h3 className="mb-4 text-2xl font-bold">Synlighet på Google</h3>

              <p className="leading-relaxed text-zinc-400">
                Hjälper restauranger att synas bättre lokalt genom modern
                struktur, tydlig information och bättre närvaro.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-[2rem] border border-amber-400/20 bg-gradient-to-r from-amber-500/10 to-transparent p-8 text-center md:p-10">
            <h3 className="text-3xl font-black">
              Din hemsida är ofta kundens första intryck.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-zinc-300">
              Vi bygger moderna restauranghemsidor med fokus på upplevelse,
              beställningar och varumärke — så restaurangen känns professionell
              redan innan kunden kliver in genom dörren.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-zinc-950 px-4 py-24 md:py-32 sm:px-6"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-6 text-4xl font-black md:text-5xl">Kontakt</h2>

            <p className="text-base text-zinc-400 md:text-lg">
              Boka en gratis demo för din restaurang.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
            {/* INFO */}
            <div className="w-full rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-10">
              <h3 className="mb-8 text-3xl font-black">
                Kontaktinformation
              </h3>

              <div className="space-y-6 text-zinc-400">
                <div>
                  <p className="mb-1 font-semibold text-white">E-post</p>

                  <p className="break-words">
                    Velora.media.stockholm@gmail.com
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">Telefon</p>

                  <p>0738749828</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">Plats</p>

                  <p>Stockholm, Sverige</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="w-full rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-10">
              <form
                action="https://formsubmit.co/Velora.media.stockholm@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Ny förfrågan från Velora Media"
                />

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_template" value="table" />

                <input
                  type="text"
                  name="Namn"
                  placeholder="Namn"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <input
                  type="email"
                  name="E-post"
                  placeholder="E-post"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <textarea
                  name="Meddelande"
                  placeholder="Berätta om din restaurang..."
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-white py-4 font-bold text-black transition-all hover:scale-[1.02]"
                >
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