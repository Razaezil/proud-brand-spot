import logo from "@/assets/rebel-logo.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* ember glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-ember/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-ember/15 via-ember/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 border border-ember/40 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 bg-ember rounded-full animate-flicker" />
            <span className="text-xs uppercase tracking-[0.3em] text-ember">
              Drop 001 — Live
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.85] uppercase">
            Defy <br />
            the <span className="text-ember">status</span> <br />
            quo<span className="text-ember">.</span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-foreground/70 leading-relaxed">
            Born to break the rules. Built to outlast trends. REBEL is streetwear
            forged in fire and barbed wire — for those who refuse to blend in.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#drop"
              className="group inline-flex items-center justify-center gap-2 bg-ember text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-ember-glow transition-all"
            >
              Shop The Drop
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#manifesto"
              className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-ember hover:text-ember transition-colors"
            >
              Read Manifesto
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-xs uppercase tracking-widest text-foreground/50">
            <div>
              <div className="font-display text-2xl text-foreground">/01</div>
              <div className="mt-1">Limited Drop</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">100%</div>
              <div className="mt-1">Heavyweight</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-2xl text-foreground">∞</div>
              <div className="mt-1">Rebellion</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <img
            src={logo}
            alt="REBEL logo in concrete and barbed wire with ember flames"
            width={1536}
            height={1024}
            className="w-full h-auto drop-shadow-[0_20px_60px_rgba(232,93,58,0.4)]"
          />
        </div>
      </div>
    </section>
  );
}
