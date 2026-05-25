"use client";

import Image from "next/image";

const HERO_BG = {
  pizza:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2200&q=90&auto=format&fit=crop",
  sushi:
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=2200&q=90&auto=format&fit=crop",
  coffee:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=90&auto=format&fit=crop",
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-28 text-center">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-y-0 left-0 w-[44%]">
          <Image
            src={HERO_BG.pizza}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-95"
          />
        </div>

        <div className="absolute inset-y-0 left-[32%] w-[40%]">
          <Image
            src={HERO_BG.sushi}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-90"
          />
        </div>

        <div className="absolute inset-y-0 right-0 w-[38%]">
          <Image
            src={HERO_BG.coffee}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-90"
          />
        </div>

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.35)_55%,#000_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/16 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-200/90">
          Premium Restaurang Upplevelse Stockholm
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.25rem,9vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)]">
          Velora <span className="text-white/60">Media</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-100 md:text-xl">
          Vi hjälper restauranger att få fler beställningar genom moderna
          hemsidor, bättre synlighet på Google och premium mobilupplevelser.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="rounded-full border border-amber-400/50 bg-black/35 px-9 py-4 text-base font-semibold text-amber-50 backdrop-blur-xl transition-all duration-500 hover:bg-amber-400/15"
          >
            Boka Gratis Demo
          </a>
        </div>
      </div>
    </section>
  );
}