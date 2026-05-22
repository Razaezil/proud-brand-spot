import cap from "@/assets/product-cap.jpg";
import tee from "@/assets/product-tee.jpg";
import lanyard from "@/assets/product-lanyard.jpg";

export function Lookbook() {
  return (
    <section id="lookbook" className="py-24 sm:py-32 px-4 sm:px-6 bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">
            / Lookbook
          </div>
          <h2 className="font-display text-5xl sm:text-7xl uppercase max-w-3xl">
            Forged in the <span className="text-ember">underground</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-6">
          {/* Tall: lanyard */}
          <div className="relative sm:col-span-2 sm:row-span-2 aspect-[3/4] sm:aspect-auto overflow-hidden group bg-black">
            <img
              src={lanyard}
              alt="REBEL barbed-wire lanyards with ember accents"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ember mb-2">
                /R-003 · Accessory
              </div>
              <div className="font-display text-2xl sm:text-3xl uppercase">
                Wear the <span className="text-ember">wire</span>.
              </div>
            </div>
          </div>

          {/* Wide: cap */}
          <div className="relative sm:col-span-4 aspect-[16/9] overflow-hidden group bg-black">
            <img
              src={cap}
              alt="REBEL barbed-wire snapback cap with ember accents"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-10 max-w-xs">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ember mb-2">
                /R-001 · Headwear
              </div>
              <div className="font-display text-3xl sm:text-4xl uppercase leading-none">
                Crown of <span className="text-ember">fire</span>.
              </div>
            </div>
          </div>

          {/* Square: tee */}
          <div className="relative sm:col-span-4 aspect-square overflow-hidden group bg-black">
            <img
              src={tee}
              alt="REBEL black tee front and back"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-ember mb-2">
                  /R-002 · Tee
                </div>
                <div className="font-display text-3xl sm:text-4xl uppercase">
                  Heavyweight <span className="text-ember">rebellion</span>.
                </div>
              </div>
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-foreground/60 text-right">
                280gsm
                <br />
                cotton
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
