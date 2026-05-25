import Image from "next/image";
import Link from "next/link";

const cafeMenu = [
  ["Flat White", "Single origin-espresso", "52 kr"],
  ["Kanelbulle", "Nygräddad med kardemumma", "38 kr"],
  ["Affogato", "Espresso & vaniljglass", "58 kr"],
  ["Räksmörgås", "Handskalade räkor, dillmajonnäs", "129 kr"],
  ["Croissant", "Smörbakad fransk croissant", "45 kr"],
];

export default function HornanCafePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative min-h-screen overflow-hidden px-6 py-10">

        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2400&q=90&auto=format&fit=crop"
          alt="Hörnan Café"
          fill
          priority
          className="object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-stone-900/40"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/75"/>

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-300/15 blur-[150px]"/>

        <nav className="relative z-10 flex items-center justify-between">

          <Link
            href="/"
            className="text-sm text-zinc-300 hover:text-white"
          >
            ← Tillbaka
          </Link>

          <div className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-zinc-300 md:flex">

            <a href="#meny">
              Meny
            </a>

            <a href="#om">
              Om oss
            </a>

            <a href="#kontakt">
              Kontakt
            </a>

          </div>

        </nav>


        <div className="relative z-10 flex min-h-[80vh] items-center">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-amber-200">

              Hörnan Café

            </p>


            <h1 className="font-[family-name:var(--font-playfair)] text-6xl leading-none md:text-8xl">

              Nordisk elegans
              <br/>
              med kaffe i världsklass.

            </h1>


            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-200">

              Ett modernt skandinaviskt café med premiumkaffe,
              nybakade bakverk och en varm atmosfär inspirerad
              av Stockholms mest exklusiva caféer.

            </p>


            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#meny"
                className="rounded-full bg-white px-8 py-4 font-bold text-black"
              >
                Se meny
              </a>


              <a
                href="#kontakt"
                className="rounded-full border border-white/30 px-8 py-4"
              >
                Besök caféet
              </a>

            </div>

          </div>

        </div>

      </section>



      <section
        id="meny"
        className="relative overflow-hidden px-6 py-28"
      >

        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=2400&q=90&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/65"/>

        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-300/15 blur-[140px]"/>


        <div className="relative z-10 mx-auto max-w-5xl">

          <p className="mb-4 uppercase tracking-[0.45em] text-amber-200 text-sm">

            ☕ Specialty Coffee • Stockholm

          </p>


          <h2 className="font-[family-name:var(--font-playfair)] text-6xl text-amber-50">

            Cafémeny

          </h2>


          <div className="mt-12 grid gap-5">

            {cafeMenu.map(([name, detail, price]) => (

              <div
                key={name}
                className="flex justify-between rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-md hover:border-amber-200/40 transition"
              >

                <div>

                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl">

                    {name}

                  </h3>

                  <p className="mt-2 text-zinc-300">

                    {detail}

                  </p>

                </div>


                <p className="font-bold text-xl text-amber-100">

                  {price}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      <section
        id="om"
        className="px-6 py-28 bg-zinc-950"
      >

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          <div>

            <p className="mb-4 uppercase tracking-[0.35em] text-amber-200 text-sm">

              Om oss

            </p>


            <h2 className="font-[family-name:var(--font-playfair)] text-5xl">

              Nordisk minimalism möter premiumkaffe.

            </h2>

          </div>


          <p className="text-lg leading-relaxed text-zinc-300">

            Hörnan Café är en fiktiv showcase skapad av Velora Media
            för att visa hur moderna caféer kan presentera meny,
            varumärke och atmosfär digitalt.

          </p>

        </div>

      </section>



      <section
        id="kontakt"
        className="px-6 py-28"
      >

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-zinc-950 p-10 text-center">

          <p className="uppercase tracking-[0.35em] text-amber-200 text-sm">

            Besök

          </p>


          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-5xl">

            Välkommen till Hörnan.

          </h2>


          <p className="mx-auto mt-5 max-w-xl text-zinc-400">

            Demo. Kan kopplas till bokning,
            Google Maps eller beställning.

          </p>


          <a
            href="tel:0738749828"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-black"
          >

            Ring caféet

          </a>

        </div>

      </section>

    </main>
  );
}