"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = ["Meny", "Om oss", "Beställ"] as const;

type MenuItem = { name: string; detail: string; price: number };

type ShowcaseRestaurant = {
  id: string;
  name: string;
  brandTop: string;
  nameDisplay: string;
  description: string;
  bgImage: string;
  accent: string;
  borderHover: string;
  phoneGlow: string;
  menuLabel: string;
  href: string;
  menuItems: MenuItem[];
};

const restaurants: ShowcaseRestaurant[] = [
  {
    id: "roma",
    name: "Pizzeria Roma",
    brandTop: "Pizzeria",
    nameDisplay: "Roma",
    href: "/pizzeria-roma",
    description:
      "Modern italiensk pizzeria med stenugnsbakade pizzor, premium råvaror och en varm atmosfär inspirerad av klassiska restauranger i Rom.",
    bgImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2400&q=90&auto=format&fit=crop",
    accent: "text-orange-300",
    borderHover: "hover:border-orange-400/50",
    phoneGlow: "bg-orange-500/25",
    menuLabel: "Pizzameny",
    menuItems: [
      { name: "Margherita", detail: "San Marzano, mozzarella, basilika", price: 129 },
      { name: "Roma Special", detail: "Tryffel, burrata, prosciutto", price: 159 },
      { name: "Diavola", detail: "Spianata salami, chili, basilika", price: 145 },
      { name: "Quattro Formaggi", detail: "Mozzarella, gorgonzola, parmesan", price: 149 },
      { name: "Prosciutto Crudo", detail: "Prosciutto, ruccola, parmesan", price: 155 },
    ],
  },
  {
    id: "sushi",
    name: "Sushi Kyoto",
    brandTop: "Sushi",
    nameDisplay: "Kyoto",
    href: "/sushi-kyoto",
    description:
      "Elegant sushirestaurang med modern japansk design, noggrant utvalda råvaror och en exklusiv omakase-upplevelse.",
    bgImage:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=2400&q=90&auto=format&fit=crop",
    accent: "text-red-300",
    borderHover: "hover:border-red-400/45",
    phoneGlow: "bg-red-600/20",
    menuLabel: "Sushimeny",
    menuItems: [
      { name: "Dragon Roll", detail: "Lax, avokado, tobiko", price: 149 },
      { name: "Sashimi Deluxe", detail: "Kockens urval av premium sashimi", price: 189 },
      { name: "Miso Black Cod", detail: "Marinerad torsk med yuzu", price: 219 },
      { name: "Spicy Tuna Roll", detail: "Tonfisk, chili, sesam", price: 159 },
      { name: "Kyoto Nigiri Mix", detail: "10 bitar, kockens urval", price: 179 },
    ],
  },
  {
    id: "thai",
    name: "Thai Garden",
    brandTop: "Thai",
    nameDisplay: "Garden",
    href: "/thai-garden",
    description:
      "Modern thairestaurang med autentiska smaker, färska råvaror och en varm tropisk atmosfär inspirerad av Bangkok.",
    bgImage:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=2400&q=90&auto=format&fit=crop",
    accent: "text-emerald-300",
    borderHover: "hover:border-emerald-400/50",
    phoneGlow: "bg-emerald-500/25",
    menuLabel: "Thaimeny",
    menuItems: [
      { name: "Pad Thai Royal", detail: "Räkor, tamarind, jordnötter", price: 165 },
      { name: "Grön Curry", detail: "Kokosmjölk, thaibasilika", price: 155 },
      { name: "Mango Sticky Rice", detail: "Kokosgrädde, mango", price: 89 },
      { name: "Tom Yum Räkor", detail: "Räkor, lime, chili, citrongräs", price: 149 },
      { name: "Panang Curry", detail: "Kokosmjölk, röd curry, thaibasilika", price: 159 },
    ],
  },
  {
    id: "cafe",
    name: "Hörnan Café",
    brandTop: "Hörnan",
    nameDisplay: "Café",
    href: "/hornan-cafe",
    description:
      "Modernt skandinaviskt café med specialty coffee, nybakade bakverk och en varm nordisk atmosfär.",
    bgImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2400&q=90&auto=format&fit=crop",
    accent: "text-amber-100",
    borderHover: "hover:border-amber-200/40",
    phoneGlow: "bg-amber-400/15",
    menuLabel: "Cafémeny",
    menuItems: [
      { name: "Flat White", detail: "Single origin-espresso", price: 52 },
      { name: "Kanelbulle", detail: "Nygräddad med kardemumma", price: 38 },
      { name: "Affogato", detail: "Espresso och vaniljglass", price: 58 },
      { name: "Räksmörgås", detail: "Handskalade räkor, ägg, dillmajonnäs", price: 129 },
      { name: "Croissant", detail: "Smörbakad fransk croissant", price: 45 },
    ],
  },
];

function MockupNav() {
  return (
    <div className="flex items-center justify-center gap-3 border-b border-white/10 bg-zinc-950 px-2 py-2">
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

function PhoneMockup({ restaurant }: { restaurant: ShowcaseRestaurant }) {
  return (
    <div className="absolute bottom-5 right-5 z-30 hidden w-[138px] md:block xl:right-8 xl:w-[150px]">
      <div className={`absolute -inset-6 rounded-full blur-3xl ${restaurant.phoneGlow} opacity-50`} />

      <div className="relative rotate-[-3deg] transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
        <div className="h-[292px] w-[138px] rounded-[1.8rem] bg-black p-[3px] shadow-[0_35px_80px_-25px_rgba(0,0,0,1)] xl:h-[318px] xl:w-[150px]">
          <div className="flex h-full flex-col overflow-hidden rounded-[1.55rem] bg-zinc-950">
            <div className="shrink-0 border-b border-white/10 bg-zinc-950 px-3 py-2">
              <span className="font-[family-name:var(--font-playfair)] text-[9px] text-white">
                {restaurant.name}
              </span>
            </div>

            <MockupNav />

            <div className="shrink-0 bg-zinc-950 px-3 pb-1 pt-2">
              <p className={`text-[7px] font-semibold uppercase tracking-[0.16em] ${restaurant.accent}`}>
                {restaurant.menuLabel}
              </p>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto bg-zinc-950 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="space-y-1.5 pb-3">
                {restaurant.menuItems.map((item) => (
                  <div key={item.name} className="rounded-lg bg-zinc-900/95 px-2 py-1.5">
                    <div className="flex items-start justify-between gap-1.5">
                      <p className="text-[7.5px] font-semibold leading-tight text-white">
                        {item.name}
                      </p>
                      <span className={`shrink-0 text-[7px] font-semibold ${restaurant.accent}`}>
                        {item.price} kr
                      </span>
                    </div>
                    <p className="mt-0.5 text-[6px] leading-snug text-zinc-500">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 bg-zinc-950 px-3 pb-3 pt-1">
              <div className="rounded-full bg-white py-2 text-center text-[7px] font-bold tracking-wide text-black">
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
    <div className="hidden gap-7 text-[10px] uppercase tracking-[0.25em] text-zinc-400 md:flex">
      {NAV_LINKS.map((link, i) => (
        <span key={link} className={i === 0 ? "text-amber-200" : ""}>
          {link}
        </span>
      ))}
    </div>
  );
}

function GoldButton() {
  return (
    <>
      <span className="hidden rounded-full border border-amber-400/50 bg-black/25 px-6 py-3 text-xs font-medium tracking-wide text-amber-50 backdrop-blur-xl transition-all duration-500 group-hover:border-amber-300 group-hover:bg-amber-400/12 group-hover:scale-[1.03] md:inline-flex">
        Beställ online
      </span>

      <span className="inline-flex items-center gap-4 border-b border-amber-400 pb-2 text-lg font-medium text-amber-300 md:hidden">
        Visa showcase <span className="text-2xl">→</span>
      </span>
    </>
  );
}

function ShowcaseCard({ restaurant }: { restaurant: ShowcaseRestaurant }) {
  return (
    <Link
      href={restaurant.href}
      className={`group relative block min-h-[430px] overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-zinc-950 shadow-[0_45px_110px_-50px_rgba(0,0,0,1)] transition-all duration-700 md:min-h-[430px] ${restaurant.borderHover} hover:-translate-y-1.5`}
    >
      <Image
        src={restaurant.bgImage}
        alt={restaurant.name}
        fill
        className="object-cover object-center opacity-100 transition-transform duration-[1.8s] ease-out group-hover:scale-[1.05]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-black/15 md:from-black/92 md:via-black/35 md:to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/25" />

      <div className="absolute inset-x-0 top-0 z-20 px-6 py-8 md:px-8 md:py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col font-[family-name:var(--font-playfair)] leading-none text-white">
            <span className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
              {restaurant.brandTop}
            </span>
            <span className="mt-3 text-5xl uppercase tracking-[0.08em] md:mt-1 md:text-4xl">
              {restaurant.nameDisplay}
            </span>
          </div>

          <CardNav />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[430px] max-w-[82%] flex-col justify-end p-6 pb-10 pt-44 md:min-h-[430px] md:max-w-[36%] md:justify-between md:p-8 md:pt-40">
        <div className="space-y-5">
          <h3 className="hidden font-[family-name:var(--font-playfair)] text-3xl leading-[1.05] text-white md:block md:text-[2rem]">
            {restaurant.name}
          </h3>

          <p className="max-w-[330px] text-[17px] leading-[1.65] text-zinc-100/95 md:max-w-[270px] md:text-sm md:leading-[1.75]">
            {restaurant.description}
          </p>
        </div>

        <div className="relative z-10 mt-8">
          <GoldButton />
        </div>
      </div>

      <PhoneMockup restaurant={restaurant} />
    </Link>
  );
}

export default function CinematicShowcase() {
  return (
    <section id="showcase" className="relative overflow-hidden bg-black px-4 py-20 md:px-6 md:py-32">
      <div className="relative mx-auto max-w-[1500px]">
        <header className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.45em] text-amber-400">
            Showcases
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            Digitala upplevelser som får{" "}
            <br className="hidden md:block" />
            restauranger att växa.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm text-zinc-400 md:text-base">
            Vi skapar moderna hemsidor, menyer och digitala upplevelser som
            ökar beställningar och stärker varumärken.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {restaurants.map((restaurant) => (
            <ShowcaseCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}