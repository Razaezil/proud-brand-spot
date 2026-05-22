export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">
            / Manifesto
          </div>
          <blockquote className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.9]">
            "We don't <br />
            follow <br />
            <span className="text-ember">the line</span>. <br />
            We <span className="text-stroke">cross</span> it."
          </blockquote>
        </div>

        <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
          <p>
            REBEL was born in a back-alley studio, somewhere between a spray-paint
            riot and a half-finished song. It's not a label — it's a permission
            slip to be louder, sharper, and harder to ignore.
          </p>
          <p>
            Every drop is small. Every piece is heavyweight. Every print is
            burned, scratched, and wrapped in barbed wire because pretty doesn't
            last — but conviction does.
          </p>
          <p>
            If you've ever been told to <em className="text-ember not-italic">tone it down</em>,
            this is for you. Defy the status quo.
          </p>
          <div className="pt-4 border-t border-border">
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              — Founders, REBEL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
