export function Marquee() {
  const phrases = [
    "Born to break",
    "Built to last",
    "Rebel always",
    "No rules",
    "No apology",
    "Defy",
  ];

  const items = [...phrases, ...phrases, ...phrases];

  return (
    <div className="border-y border-border bg-charcoal py-6 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-3xl sm:text-5xl uppercase text-foreground/90">
              {p}
            </span>
            <span className="text-ember text-3xl sm:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
