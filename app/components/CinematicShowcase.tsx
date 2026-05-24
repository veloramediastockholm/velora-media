"use client";

import Image from "next/image";

const NAV_LINKS = ["Meny", "Om oss", "Beställ"] as const;

type MenuItem = {
  name: string;
  detail: string;
  price: number;
};

type ShowcaseRestaurant = {
  id: string;
  name: string;
  description: string;
  bgImage: string;
  overlay: string;
  glow: string;
  glowSecondary: string;
  borderHover: string;
  accent: string;
  phoneGlow: string;
  menuLabel: string;
  menuItems: MenuItem[];
};

const restaurants: ShowcaseRestaurant[] = [
  {
    id: "roma",
    name: "Pizzeria Roma",
    description:
      "Modern italiensk pizzeria med stenugnsbakade pizzor, premium råvaror och en varm atmosfär inspirerad av klassiska restauranger i Rom.",
    bgImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=2400&q=80&auto=format&fit=crop",
    overlay:
      "from-orange-900/50 via-black/60 to-black/80",
    glow: "from-orange-600/55 via-red-600/30 to-transparent",
    glowSecondary: "from-amber-500/25 to-transparent",
    borderHover: "hover:border-orange-400/50",
    accent: "text-orange-300",
    phoneGlow: "bg-orange-500/25",
    menuLabel: "Pizzameny",
    menuItems: [
      {
        name: "Margherita",
        detail: "San Marzano, mozzarella, basilika",
        price: 129,
      },
      {
        name: "Roma Special",
        detail: "Tryffel, burrata, prosciutto",
        price: 159,
      },
      {
        name: "Diavola",
        detail: "Spianata salami, chili, basilika",
        price: 145,
      },
      {
        name: "Quattro Formaggi",
        detail: "Mozzarella, gorgonzola, parmesan, taleggio",
        price: 149,
      },
      {
        name: "Prosciutto Crudo",
        detail: "Prosciutto, ruccola, parmesan",
        price: 155,
      },
    ],
  },
  {
    id: "sushi",
    name: "Sushi Kyoto",
    description:
      "Elegant sushirestaurang med modern japansk design, noggrant utvalda råvaror och en exklusiv omakase-upplevelse.",
    bgImage:
      "https://images.unsplash.com/photo-1617195737496-874a38f2d2f0?w=2400&q=80&auto=format&fit=crop",
    overlay:
      "from-red-950/55 via-black/65 to-black/85",
    glow: "from-red-700/50 via-rose-950/35 to-transparent",
    glowSecondary: "from-red-500/20 to-transparent",
    borderHover: "hover:border-red-400/45",
    accent: "text-red-300",
    phoneGlow: "bg-red-600/20",
    menuLabel: "Sushimeny",
    menuItems: [
      { name: "Dragon Roll", detail: "Lax, avokado, tobiko", price: 149 },
      {
        name: "Sashimi Deluxe",
        detail: "Kockens urval av premium sashimi",
        price: 189,
      },
      {
        name: "Miso Black Cod",
        detail: "Marinerad torsk med yuzu",
        price: 219,
      },
      {
        name: "Spicy Tuna Roll",
        detail: "Tonfisk, chili, sesam",
        price: 159,
      },
      {
        name: "Kyoto Nigiri Mix",
        detail: "10 bitar, kockens urval",
        price: 179,
      },
    ],
  },
  {
    id: "thai",
    name: "Thai Garden",
    description:
      "Modern thairestaurang med autentiska smaker, färska råvaror och en varm tropisk atmosfär inspirerad av Bangkok.",
    bgImage:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=2400&q=80&auto=format&fit=crop",
    overlay:
      "from-emerald-900/45 via-black/55 to-black/80",
    glow: "from-emerald-500/50 via-amber-500/35 to-transparent",
    glowSecondary: "from-lime-400/20 to-transparent",
    borderHover: "hover:border-emerald-400/50",
    accent: "text-emerald-300",
    phoneGlow: "bg-emerald-500/25",
    menuLabel: "Thaimeny",
    menuItems: [
      {
        name: "Pad Thai Royal",
        detail: "Räkor, tamarind, jordnötter",
        price: 165,
      },
      { name: "Grön Curry", detail: "Kokosmjölk, thaibasilika", price: 155 },
      { name: "Mango Sticky Rice", detail: "Kokosgrädde, mango", price: 89 },
      {
        name: "Tom Yum Räkor",
        detail: "Räkor, lime, chili, citrongräs",
        price: 149,
      },
      {
        name: "Panang Curry",
        detail: "Kokosmjölk, röd curry, thaibasilika",
        price: 159,
      },
    ],
  },
  {
    id: "cafe",
    name: "Hörnan Café",
    description:
      "Modernt skandinaviskt café med specialty coffee, nybakade bakverk och en varm nordisk atmosfär.",
    bgImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2400&q=80&auto=format&fit=crop",
    overlay:
      "from-amber-950/40 via-stone-900/50 to-black/80",
    glow: "from-amber-200/40 via-stone-500/30 to-transparent",
    glowSecondary: "from-orange-200/15 to-transparent",
    borderHover: "hover:border-amber-200/40",
    accent: "text-amber-100",
    phoneGlow: "bg-amber-400/15",
    menuLabel: "Cafémeny",
    menuItems: [
      { name: "Flat White", detail: "Single origin-espresso", price: 52 },
      { name: "Kanelbulle", detail: "Nygräddad med kardemumma", price: 38 },
      { name: "Affogato", detail: "Espresso och vaniljglass", price: 58 },
      {
        name: "Räksmörgås",
        detail: "Handskalade räkor, ägg, dillmajonnäs",
        price: 129,
      },
      {
        name: "Croissant",
        detail: "Smörbakad fransk croissant",
        price: 45,
      },
    ],
  },
];

function MockupNav() {
  return (
    <div className="flex shrink-0 items-center justify-center gap-2.5 border-b border-white/10 bg-zinc-950 px-2 py-1.5">
      {NAV_LINKS.map((link, i) => (
        <span
          key={link}
          className={`text-[7px] uppercase tracking-[0.12em] ${
            i === 0 ? "font-semibold text-white" : "text-zinc-500"
          }`}
        >
          {link}
        </span>
      ))}
    </div>
  );
}

function GoldButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`rounded-full border border-amber-400/50 bg-amber-400/5 px-7 py-3.5 text-sm font-medium tracking-wide text-amber-50 backdrop-blur-xl transition-all duration-500 hover:border-amber-300 hover:bg-amber-400/12 hover:shadow-[0_0_48px_rgba(251,191,36,0.35)] hover:scale-[1.03] ${className}`}
    >
      {children}
    </button>
  );
}

function PhoneMockup({ restaurant }: { restaurant: ShowcaseRestaurant }) {
  return (
    <div className="pointer-events-none absolute right-4 top-1/2 z-30 -translate-y-1/2 sm:right-8">
      <div
        className={`absolute -inset-10 rounded-full blur-3xl ${restaurant.phoneGlow} opacity-50 transition-opacity duration-700 group-hover:opacity-70`}
      />

      <div className="relative rotate-[-5deg] animate-[showcase-float_6s_ease-in-out_infinite] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-[-2deg] group-hover:[animation-play-state:paused]">
        {/* iPhone frame — ~9:19.5 aspect ratio */}
        <div className="h-[340px] w-[158px] rounded-[2.35rem] bg-black p-[3px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] sm:h-[360px] sm:w-[168px]">
          <div className="flex h-full flex-col overflow-hidden rounded-[2.1rem] bg-zinc-950">
            <div className="shrink-0 border-b border-white/10 bg-zinc-950 px-3 py-2">
              <span className="font-[family-name:var(--font-playfair)] text-[10px] text-white">
                {restaurant.name}
              </span>
            </div>

            <MockupNav />

            <div className="shrink-0 bg-zinc-950 px-2.5 pb-1.5 pt-2">
              <p
                className={`text-[8px] font-semibold uppercase tracking-[0.22em] ${restaurant.accent}`}
              >
                {restaurant.menuLabel}
              </p>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto bg-zinc-950 px-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="space-y-1.5 pb-2">
                {restaurant.menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-lg bg-zinc-900/95 px-2 py-1.5"
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <p className="text-[9px] font-semibold leading-tight text-white">
                        {item.name}
                      </p>
                      <span
                        className={`shrink-0 text-[8px] font-semibold ${restaurant.accent}`}
                      >
                        {item.price} kr
                      </span>
                    </div>
                    <p className="mt-0.5 text-[7px] leading-snug text-zinc-500">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 bg-zinc-950 px-2.5 pb-3 pt-1">
              <div className="rounded-full bg-white py-2 text-center text-[8px] font-bold tracking-wide text-black">
                Beställ online
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardNav() {
  return (
    <div className="hidden gap-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:flex">
      {NAV_LINKS.map((link, i) => (
        <span
          key={link}
          className={`transition-colors duration-300 group-hover:text-zinc-300 ${
            i === 0 ? "text-zinc-300" : ""
          }`}
        >
          {link}
        </span>
      ))}
    </div>
  );
}

function ShowcaseCard({ restaurant }: { restaurant: ShowcaseRestaurant }) {
  return (
    <article
      className={`group relative min-h-[640px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-zinc-950 shadow-[0_50px_120px_-45px_rgba(0,0,0,0.95)] transition-all duration-700 ${restaurant.borderHover} hover:-translate-y-2.5 hover:shadow-[0_60px_140px_-40px_rgba(0,0,0,0.9),0_0_100px_rgba(251,191,36,0.07)]`}
    >
      <Image
        src={restaurant.bgImage}
        alt={restaurant.name}
        fill
        className="object-cover opacity-90 transition-transform duration-[1.8s] ease-out group-hover:scale-[1.06]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${restaurant.overlay}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/55" />

      <div
        className={`absolute -left-28 -top-28 h-96 w-96 rounded-full bg-gradient-to-br ${restaurant.glow} blur-[110px] transition-transform duration-700 group-hover:scale-110`}
      />
      <div
        className={`absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-tl ${restaurant.glowSecondary} blur-[100px]`}
      />

      <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-black/30 px-6 py-4 backdrop-blur-2xl sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 font-[family-name:var(--font-playfair)] text-sm text-white backdrop-blur-md">
              {restaurant.name.charAt(0)}
            </div>
            <span className="font-[family-name:var(--font-playfair)] text-xl tracking-wide text-white">
              {restaurant.name}
            </span>
          </div>
          <CardNav />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[640px] flex-col justify-between p-7 pb-11 pt-28 sm:max-w-[55%] sm:p-10 sm:pt-28">
        <div className="space-y-5 pr-2">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl leading-[1.08] text-white sm:text-[2.35rem]">
            {restaurant.name}
          </h3>
          <p className="text-sm leading-[1.8] text-zinc-300/95 sm:text-[15px]">
            {restaurant.description}
          </p>
        </div>

        <div className="relative z-10 mt-10">
          <GoldButton>Beställ online</GoldButton>
        </div>
      </div>

      <PhoneMockup restaurant={restaurant} />
    </article>
  );
}

export default function CinematicShowcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-black py-36 px-6 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-amber-500/7 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-red-900/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-emerald-900/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-24 md:mb-32">
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3.75rem,11vw,8rem)] font-normal leading-[0.92] tracking-[-0.04em] text-white">
            Showcases
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          {restaurants.map((restaurant) => (
            <ShowcaseCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
