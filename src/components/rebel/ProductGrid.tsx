import cap from "@/assets/product-cap.jpg";
import tee from "@/assets/product-tee.jpg";
import lanyard from "@/assets/product-lanyard.jpg";
import { toast } from "sonner";

const products = [
  {
    id: "cap",
    name: "Barbed Snapback",
    code: "R-001 / CAP",
    price: "Rp 349.000",
    image: cap,
  },
  {
    id: "tee",
    name: "Ember Tee",
    code: "R-002 / TEE",
    price: "Rp 299.000",
    image: tee,
  },
  {
    id: "lanyard",
    name: "Wire Lanyard",
    code: "R-003 / ACC",
    price: "Rp 149.000",
    image: lanyard,
  },
];

export function ProductGrid() {
  return (
    <section id="drop" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">
              / Drop 001
            </div>
            <h2 className="font-display text-5xl sm:text-7xl uppercase">
              The Drop<span className="text-ember">.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 sm:text-right">
            Three pieces. Forged for the streets. Limited run — once it's gone,
            it stays gone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative bg-card border border-border hover:border-ember/60 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-charcoal">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-2">
                    {p.code}
                  </div>
                  <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                  <div className="mt-2 text-ember font-semibold">{p.price}</div>
                </div>
                <button
                  onClick={() =>
                    toast.success(`You're on the list for ${p.name}.`, {
                      description: "We'll hit you up the moment it drops.",
                    })
                  }
                  className="shrink-0 mt-1 border border-foreground/30 px-4 py-2 text-xs uppercase tracking-widest hover:bg-ember hover:border-ember hover:text-primary-foreground transition-colors"
                >
                  Notify
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
