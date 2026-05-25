import Image from "next/image";
import Link from "next/link";

const thaiMenu = [
  ["Pad Thai Royal", "Räkor, tamarind, jordnötter", "165 kr"],
  ["Grön Curry", "Kokosmjölk, thaibasilika", "155 kr"],
  ["Mango Sticky Rice", "Kokosgrädde, mango", "89 kr"],
  ["Tom Yum Räkor", "Räkor, lime, chili, citrongräs", "149 kr"],
  ["Panang Curry", "Kokosmjölk, röd curry, thaibasilika", "159 kr"],
];

export default function ThaiGardenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden px-6 py-10">
        <Image
          src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=2400&q=90&auto=format&fit=crop"
          alt="Thai Garden"
          fill
          priority
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-emerald-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
        <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[150px]" />

        <nav className="relative z-10 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-300 hover:text-white">
            ← Tillbaka
          </Link>

          <div className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-zinc-300 md:flex">
            <a href="#meny">Meny</a>
            <a href="#om">Om oss</a>
            <a href="#kontakt">Beställ</a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[80vh] items-center">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-emerald-300">
              Thai Garden
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] text-6xl leading-none md:text-8xl">
              Autentiska smaker från Thailand med en tropisk känsla.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-200">
              En modern thairestaurang med färska råvaror, aromatiska kryddor
              och en varm atmosfär inspirerad av Bangkok.
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
                Beställ online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="meny" className="relative overflow-hidden px-6 py-28">
        <Image
          src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=2400&q=90&auto=format&fit=crop"
          alt="Premium thailändsk curry och räkor"
          fill
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/35 to-emerald-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />
        <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[130px]" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-amber-300/20 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-300">
            🇹🇭 Thailand • Premium Kitchen
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] mb-6 text-5xl text-amber-100 md:text-6xl">
            Thaimeny
          </h2>

          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-40 bg-amber-300/80" />
            <div className="h-3 w-3 rotate-45 border border-amber-300" />
            <div className="h-px w-24 bg-amber-300/50" />
          </div>

          <div className="grid gap-5">
            {thaiMenu.map(([name, detail, price]) => (
              <div
                key={name}
                className="flex items-start justify-between gap-6 rounded-3xl border border-white/15 bg-black/70 p-6 shadow-[0_20px_70px_-35px_rgba(0,0,0,1)] backdrop-blur-md transition hover:border-amber-300/40 hover:bg-black/80"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-amber-50">
                    {name}
                  </h3>
                  <p className="mt-2 text-zinc-300">{detail}</p>
                </div>

                <p className="shrink-0 text-xl font-bold text-amber-200">
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
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-300">
              Om oss
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-5xl">
              Bangkok-känsla i modern tappning.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-zinc-300">
            Thai Garden är en fiktiv premiumrestaurang framtagen som showcase
            för Velora Media. Sidan visar hur en restaurang kan presentera sin
            mat, atmosfär och onlinebeställning på ett modernt sätt.
          </p>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-center md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-300">
            Beställ
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
            Smakerna är redo.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Detta är en demo. På en riktig restaurangsida kan beställningen
            kopplas till Foodora, telefon, eget system eller digital meny.
          </p>

          <a
            href="tel:0738749828"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-black"
          >
            Beställ via telefon
          </a>
        </div>
      </section>
    </main>
  );
}