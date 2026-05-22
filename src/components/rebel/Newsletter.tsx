import { useState } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're in.", {
      description: "Welcome to the rebellion. Watch your inbox.",
    });
    setEmail("");
  };

  return (
    <section id="join" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ember/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">
          / Drop List
        </div>
        <h2 className="font-display text-5xl sm:text-7xl uppercase">
          Join the <span className="text-ember">rebellion</span>.
        </h2>
        <p className="mt-6 text-lg text-foreground/70 max-w-xl mx-auto">
          Early access to drops. Behind-the-scenes from the studio. No spam — only
          fire.
        </p>

        <form
          onSubmit={submit}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-card border border-border px-5 py-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-ember transition-colors"
          />
          <button
            type="submit"
            className="bg-ember text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-ember-glow transition-colors"
          >
            Enlist
          </button>
        </form>
      </div>
    </section>
  );
}
