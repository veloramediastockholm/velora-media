import Image from "next/image";
import Link from "next/link";

const pizzas = [
  ["Margherita", "San Marzano, mozzarella, basilika", "129 kr"],
  ["Roma Special", "Tryffel, burrata, prosciutto", "159 kr"],
  ["Diavola", "Spianata salami, chili, basilika", "145 kr"],
  ["Quattro Formaggi", "Mozzarella, gorgonzola, parmesan", "149 kr"],
  ["Prosciutto Crudo", "Prosciutto, ruccola, parmesan", "155 kr"],
];

export default function PizzeriaRomaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[100svh] overflow-hidden px-6 py-10 pb-28">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2400&q=90&auto=format&fit=crop"
          alt="Pizzeria Roma"
          fill
          priority
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        <nav className="relative z-10 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-300 hover:text-white">
            ← Tillbaka
          </Link>

          <div className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-zinc-300 md:flex">
            <a href="#meny">Meny</a>
            <a href="#om">Om oss</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[82svh] items-center">
          <div className="w-full max-w-full md:max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-orange-300">
              Pizzeria Roma
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] max-w-full text-[3rem] leading-[0.95] md:text-8xl">
              Stenugnsbakad pizza med italiensk själ.
            </h1>

            <p className="mt-6 max-w-full text-lg leading-relaxed text-zinc-200 md:max-w-xl">
              En modern italiensk pizzeria med premium råvaror, varm atmosfär
              och pizzor inspirerade av klassiska restauranger i Rom.
            </p>

            <div className="mt-8 flex w-full flex-col gap-4">
              <a
                href="#meny"
                className="w-full rounded-full bg-white px-8 py-4 text-center font-bold text-black"
              >
                Se meny
              </a>

              <a
                href="#kontakt"
                className="w-full rounded-full border border-white/30 px-8 py-4 text-center text-white"
              >
                Beställ online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="meny" className="relative overflow-hidden px-6 py-28">
        <Image
          src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=2400&q=90&auto=format&fit=crop"
          alt="Vedugn och grill"
          fill
          className="object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">
            Meny
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] mb-6 text-5xl md:text-6xl">
            Pizzameny
          </h2>

          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-40 bg-orange-300/70" />
            <div className="h-3 w-3 rotate-45 border border-orange-300" />
            <div className="h-px w-24 bg-orange-300/40" />
          </div>

          <div className="grid gap-5">
            {pizzas.map(([name, detail, price]) => (
              <div
                key={name}
                className="flex items-start justify-between gap-6 rounded-3xl border border-white/15 bg-black/70 p-6 backdrop-blur-md transition hover:border-orange-300/40 hover:bg-black/80"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
                    {name}
                  </h3>
                  <p className="mt-2 text-zinc-300">{detail}</p>
                </div>

                <p className="shrink-0 text-xl font-bold text-orange-300">
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
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">
              Om oss
            </p>

            <h2 className="text-5xl font-black">En bit av Rom i Sverige.</h2>
          </div>

          <p className="text-lg leading-relaxed text-zinc-300">
            Pizzeria Roma är en fiktiv premium-pizzeria framtagen som showcase
            för Velora Media. Sidan visar hur en modern restaurang kan presentera
            sin meny, sitt varumärke och skapa fler beställningar online.
          </p>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-center md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">
            Beställ
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Redo att beställa?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Detta är en demo. På en riktig restaurangsida kan knappen kopplas
            till Foodora, telefon, egen beställning eller bokningssystem.
          </p>

          <a
            href="tel:0738749828"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-black"
          >
            Ring restaurangen
          </a>
        </div>
      </section>
    </main>
  );
}