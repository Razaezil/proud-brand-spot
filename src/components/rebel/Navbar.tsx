import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#drop", label: "Shop" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#join", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <a href="#top" className="font-display text-2xl tracking-tight">
          REBEL<span className="text-ember">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-widest text-foreground/80 hover:text-ember transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#drop"
          className="hidden md:inline-flex items-center gap-2 bg-ember text-primary-foreground px-5 py-2 text-sm font-semibold uppercase tracking-widest hover:bg-ember-glow transition-colors"
        >
          The Drop
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium uppercase tracking-widest text-foreground/90 hover:text-ember"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#drop"
                onClick={() => setOpen(false)}
                className="block text-center bg-ember text-primary-foreground px-5 py-3 text-sm font-semibold uppercase tracking-widest"
              >
                The Drop
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
