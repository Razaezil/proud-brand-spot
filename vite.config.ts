// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Multi-platform deploy support.
// - Inside Lovable's sandbox the preset is FORCED to Cloudflare (this override
//   is ignored), so Lovable deploys keep working untouched.
// - When self-hosting / deploying from your own CI (Vercel, Netlify, Node,
//   Bun, Deno, etc.) set DEPLOY_TARGET to a Nitro preset name to switch the
//   build output. Common values: "vercel", "netlify", "node-server",
//   "bun", "deno-deploy", "cloudflare-module" (default).
// Nitro preset reference: https://nitro.build
const deployTarget = process.env.DEPLOY_TARGET?.trim();

export default defineConfig({
  // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR
  // error wrapper). @cloudflare/vite-plugin builds from this — wrangler.jsonc
  // main alone is insufficient.
  tanstackStart: {
    server: { entry: "server" },
  },
  // Force-on nitro with the chosen preset only when DEPLOY_TARGET is set.
  // Leaving it undefined preserves the original auto-detect behaviour used
  // by Lovable.
  ...(deployTarget && { nitro: { preset: deployTarget } }),
});
