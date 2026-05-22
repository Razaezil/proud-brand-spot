import { Instagram, Music2, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <div className="font-display text-3xl">
              REBEL<span className="text-ember">.</span>
            </div>
            <p className="mt-3 text-sm text-foreground/60 max-w-sm">
              Defy the status quo. Streetwear forged in fire and barbed wire.
            </p>
          </div>

          <div className="flex sm:justify-end items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="border border-border w-11 h-11 flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="border border-border w-11 h-11 flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
            >
              <Music2 size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="border border-border w-11 h-11 flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center text-xs uppercase tracking-widest text-foreground/40">
          <div>© {new Date().getFullYear()} REBEL — All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ember">Privacy</a>
            <a href="#" className="hover:text-ember">Terms</a>
            <a href="#join" className="hover:text-ember">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
