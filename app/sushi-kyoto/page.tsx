import Image from "next/image";
import Link from "next/link";

const sushiMenu = [
  ["Dragon Roll", "Lax, avokado, tobiko", "149 kr"],
  ["Sashimi Deluxe", "Kockens urval av premium sashimi", "189 kr"],
  ["Miso Black Cod", "Marinerad torsk med yuzu", "219 kr"],
  ["Spicy Tuna Roll", "Tonfisk, chili, sesam", "159 kr"],
  ["Kyoto Nigiri Mix", "10 bitar, kockens urval", "179 kr"],
];

export default function SushiKyotoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden px-6 py-10">
        <Image
          src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=2400&q=90&auto=format&fit=crop"
          alt="Sushi Kyoto"
          fill
          priority
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-700/20 blur-[150px]" />

        <nav className="relative z-10 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-300 hover:text-white">
            ← Tillbaka
          </Link>

          <div className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-zinc-300 md:flex">
            <a href="#meny">Meny</a>
            <a href="#om">Om oss</a>
            <a href="#kontakt">Boka bord</a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[80vh] items-center">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-red-300">
              Sushi Kyoto
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] text-6xl leading-none md:text-8xl">
              Japansk precision i modern luxury-stil.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-200">
              En elegant sushirestaurang med noggrant utvalda råvaror,
              exklusiv omakase-känsla och en lugn premiumupplevelse.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#meny"
                className="rounded-full bg-white px-8 py-4 text-center font-bold text-black"
              >
                Se meny
              </a>

              <a
                href="#kontakt"
                className="rounded-full border border-white/30 px-8 py-4 text-center text-white"
              >
                Boka bord
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="meny" className="relative overflow-hidden px-6 py-28">
        <Image
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=2400&q=90&auto=format&fit=crop"
          alt="Lyxig sushi"
          fill
          className="object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/35 to-red-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-red-700/20 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-300/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-300">
            Meny
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] mb-6 text-5xl md:text-6xl">
            Sushimeny
          </h2>

          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-40 bg-red-300/70" />
            <div className="h-3 w-3 rotate-45 border border-red-300" />
            <div className="h-px w-24 bg-red-300/40" />
          </div>

          <div className="grid gap-5">
            {sushiMenu.map(([name, detail, price]) => (
              <div
                key={name}
                className="flex items-start justify-between gap-6 rounded-3xl border border-white/15 bg-black/70 p-6 shadow-[0_20px_70px_-35px_rgba(0,0,0,1)] backdrop-blur-md transition hover:border-red-300/40 hover:bg-black/80"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
                    {name}
                  </h3>
                  <p className="mt-2 text-zinc-300">{detail}</p>
                </div>

                <p className="shrink-0 text-xl font-bold text-red-300">
                  {price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="om" className="px-6 py-28 bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-300">
              Om oss
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-5xl">
              Tradition möter modern design.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-zinc-300">
            Sushi Kyoto är en fiktiv premiumrestaurang framtagen som showcase
            för Velora Media. Sidan visar hur en modern restaurang kan skapa en
            exklusiv känsla online med meny, bokning och stark visuell identitet.
          </p>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-center md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-300">
            Bokning
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
            Boka en kväll hos Kyoto.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Detta är en demo. På en riktig restaurangsida kan bokningen kopplas
            till telefon, formulär, bokningssystem eller egen onlinebokning.
          </p>

          <a
            href="tel:0738749828"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-black"
          >
            Boka bord
          </a>
        </div>
      </section>
    </main>
  );
}