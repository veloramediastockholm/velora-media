"use client";

import Image from "next/image";

const HERO_BG = {
  pizza:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2000&q=85&auto=format&fit=crop",
  pizzaOven:
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=2000&q=85&auto=format&fit=crop",
  sushi:
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=2000&q=85&auto=format&fit=crop",
  coffee:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=85&auto=format&fit=crop",
  pastry:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=85&auto=format&fit=crop",
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 py-28 text-center">
      {/* Cinematic luxury food collage — background only */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* Left — Italian pizza / wood oven */}
        <div className="absolute inset-y-0 left-0 w-[46%] sm:w-[42%]">
          <Image
            src={HERO_BG.pizzaOven}
            alt=""
            fill
            className="object-cover object-left scale-110 blur-[1px] sm:blur-0"
            style={{ animation: "hero-drift 28s ease-in-out infinite alternate" }}
            sizes="45vw"
            priority
          />
          <Image
            src={HERO_BG.pizza}
            alt=""
            fill
            className="object-cover object-center opacity-40 mix-blend-soft-light"
            sizes="45vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/25 via-orange-900/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/80" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-orange-500/30 blur-[90px]" />
        </div>

        {/* Center / right — sushi */}
        <div className="absolute inset-y-0 left-[24%] w-[52%] sm:left-[30%] sm:w-[48%]">
          <Image
            src={HERO_BG.sushi}
            alt=""
            fill
            className="object-cover object-center scale-105"
            style={{
              animation: "hero-drift 32s ease-in-out 2s infinite alternate",
            }}
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/50" />
        </div>

        {/* Top right — specialty coffee */}
        <div className="absolute top-0 right-0 h-[46%] w-[34%] sm:w-[30%]">
          <Image
            src={HERO_BG.coffee}
            alt=""
            fill
            className="object-cover object-center"
            sizes="30vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />
        </div>

        {/* Far right — pastries / kanelbulle */}
        <div className="absolute bottom-0 right-0 h-[58%] w-[34%] sm:w-[30%]">
          <Image
            src={HERO_BG.pastry}
            alt=""
            fill
            className="object-cover object-center scale-105"
            style={{
              animation: "hero-drift 26s ease-in-out 1s infinite alternate",
            }}
            sizes="30vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-200/10 via-black/35 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/75 to-transparent" />
          <div className="absolute -right-8 bottom-0 h-56 w-56 rounded-full bg-amber-300/15 blur-[80px]" />
        </div>

        {/* Global blend — readability + vignette */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[5px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_45%,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.75)_55%,#000_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/65" />
        <div className="absolute inset-[0_15%] bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08)_0%,transparent_70%)]" />

        {/* Warm gold lighting */}
        <div className="absolute left-1/2 top-[42%] h-[520px] w-[min(900px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/18 blur-[150px]" />
        <div className="absolute bottom-[8%] left-[12%] h-80 w-80 rounded-full bg-orange-600/20 blur-[110px]" />
        <div className="absolute right-[5%] top-[18%] h-72 w-72 rounded-full bg-amber-400/12 blur-[100px]" />

        {/* Edge vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.85)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-200/80">
          Premium Restaurang Upplevelse Stockholm
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3.25rem,9vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          Velora
          <span className="text-white/55"> Media</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-xl md:leading-relaxed">
          Vi hjälper restauranger att få fler beställningar genom moderna
          hemsidor, bättre synlighet på Google och premium mobilupplevelser.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="rounded-full border border-amber-400/45 bg-amber-400/10 px-9 py-4 text-base text-amber-50 backdrop-blur-xl transition-all duration-500 hover:border-amber-300/70 hover:bg-amber-400/15 hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]"
          >
            Boka Gratis Demo
          </a>
        </div>
      </div>
    </section>
  );
}
