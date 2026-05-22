import look1 from "@/assets/lookbook-1.jpg";
import look2 from "@/assets/lookbook-2.jpg";
import look3 from "@/assets/lookbook-3.jpg";

export function Lookbook() {
  return (
    <section id="lookbook" className="py-24 sm:py-32 px-4 sm:px-6 bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">
            / Lookbook
          </div>
          <h2 className="font-display text-5xl sm:text-7xl uppercase max-w-3xl">
            Shot in the <span className="text-ember">underground</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-6">
          <div className="sm:col-span-2 sm:row-span-2 aspect-[3/4] sm:aspect-auto overflow-hidden">
            <img
              src={look1}
              alt="Model in dark hooded streetwear in alley"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="sm:col-span-4 aspect-[16/9] overflow-hidden">
            <img
              src={look3}
              alt="Crew walking through graffiti alley with sparks"
              loading="lazy"
              width={1280}
              height={1024}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="sm:col-span-4 aspect-square overflow-hidden">
            <img
              src={look2}
              alt="Close-up portrait wearing REBEL tee"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
