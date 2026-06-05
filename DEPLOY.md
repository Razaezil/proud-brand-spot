# Deployment Guide

This project is built with TanStack Start + Nitro, so it can be deployed to
any platform Nitro supports. The build target is controlled by the
`DEPLOY_TARGET` environment variable, which maps to a Nitro preset.

> Inside Lovable the preset is always forced to Cloudflare — `DEPLOY_TARGET`
> only takes effect when you build the project yourself (your own CI, Vercel,
> Netlify, a VPS, etc.). Lovable deploys keep working without any extra setup.

## Quick commands

```bash
bun run build              # default (Cloudflare on Lovable, plain Vite elsewhere)
bun run build:vercel       # Vercel
bun run build:netlify      # Netlify
bun run build:node         # Node.js server
bun run build:bun          # Bun server
bun run build:cloudflare   # Cloudflare Workers (self-hosted)
```

## Vercel

1. Push the repo to GitHub.
2. Import into Vercel — it will read `vercel.json`.
3. Add your environment variables (`VITE_SUPABASE_URL`,
   `VITE_SUPABASE_PUBLISHABLE_KEY`, and any server-only secrets like
   `SUPABASE_SERVICE_ROLE_KEY`) in **Project Settings → Environment Variables**.
4. Deploy.

## Netlify

1. Push the repo to GitHub.
2. Import into Netlify — it will read `netlify.toml`.
3. Add the same environment variables in **Site settings → Environment variables**.
4. Deploy.

## Node.js / Bun / VPS (Railway, Render, Fly.io, self-hosted)

```bash
bun install
bun run build:node     # or build:bun
node .output/server/index.mjs
```

Set environment variables on the host before starting.

## Cloudflare Workers (outside Lovable)

```bash
bun run build:cloudflare
bunx wrangler deploy
```

`wrangler.jsonc` is already configured.

## Environment variables to set on every platform

| Name | Where | Notes |
|------|-------|-------|
| `VITE_SUPABASE_URL` | Build + runtime | Public, bundled into client |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Build + runtime | Public anon key |
| `SUPABASE_URL` | Server runtime | Same as above, no VITE_ prefix |
| `SUPABASE_PUBLISHABLE_KEY` | Server runtime | Same as above |
| `SUPABASE_SERVICE_ROLE_KEY` | Server runtime | **Secret** — never expose to client |

Add any other secrets your server functions read via `process.env` here too.

## Nitro preset reference

See <https://nitro.build/deploy> for the full list of supported targets
(AWS Lambda, Azure, Deno Deploy, Firebase, etc.). To use one:

```bash
DEPLOY_TARGET=<preset-name> bun run build
```
