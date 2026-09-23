# Deploy Vedasynk Next.js to Azure (cost-efficient)

This guide covers the lowest-cost ways to run this Next.js 16 App Router site on Azure. Pick based on traffic and whether you need the `/api/contact` server route.

## Cost ranking (cheapest → more capable)

| Option | Best for | Approx. cost | Notes |
|--------|----------|--------------|--------|
| **1. Static Web Apps (Free)** | Mostly static marketing site | **$0** Free tier | Limited SSR; API via Azure Functions |
| **2. App Service B1 / Free F1** | Full Next.js (`next start`) | F1 free (limited) / B1 ~\$13+/mo | Simplest full Node host |
| **3. Container Apps (scale-to-zero)** | Low traffic, full Node | Pay per use; can be near **$0** idle | Best “real” serverless Node |
| **4. AKS / VM** | Not recommended | Higher | Overkill for this site |

**Recommendation for Vedasynk:** start with **Azure Static Web Apps Free** if you can proxy leads elsewhere, or **Container Apps** / **App Service** if you must keep `POST /api/contact` on the same app.

You already have a working Cloudflare Workers deploy. Only move to Azure if you need Azure-specific billing, compliance, or infra.

---

## Prerequisites

- Azure account + [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli)
- Node 22+
- This repo builds with:
  - `npm ci`
  - `npm run build` (runs `prebuild` → generates blog JSON)
- Env vars (production):

```bash
LEAD_API_URL=https://YOUR_API_HOST/api/public/website/vedasynk-lead
LEAD_ORIGIN=https://vedasynk.com
NEXT_PUBLIC_SITE_URL=https://vedasynk.com
```

Do **not** use `localhost:5000` in Azure.

---

## Option A — Azure Static Web Apps (cheapest)

Good for cost. Free tier includes custom domains + SSL.

### Limits to know

- Static Web Apps uses an adapter / hybrid model. Full OpenNext-style Workers features are not 1:1.
- Prefer treating the site as **static + API Functions**, or use the official Next.js SWA pattern if you adopt `@azure/static-web-apps-cli`.

### High-level steps

1. Create a Static Web App in Azure Portal → **Static Web Apps** → Create.
2. Connect the GitHub repo: `srikanth112236/vedasynk-webiste`.
3. Build settings:

| Setting | Value |
|---------|--------|
| App location | `/` |
| Api location | (empty, or `/api` if you split Functions) |
| Output location | `.next` or adapter output (depends on setup) |
| Build command | `npm ci && npm run build` |

4. Add Application settings (env):

- `LEAD_API_URL`
- `LEAD_ORIGIN`
- `NEXT_PUBLIC_SITE_URL`

5. Custom domain: add `vedasynk.com` / `www` in SWA → Custom domains (DNS TXT/CNAME as Azure shows).

### Cost tips

- Stay on **Free** tier until you need more bandwidth.
- Put images on a CDN / keep using Unsplash remote URLs (already configured).
- Don’t run a always-on App Service “just because”.

---

## Option B — Azure App Service (simplest full Next.js)

Runs `next start` like a normal Node server. Easy, not the absolute cheapest at scale, but fine for low–medium traffic.

### Create + deploy (CLI)

```bash
az login
az group create -n rg-vedasynk -l eastus

# Free tier (F1) — limited; good for testing
az appservice plan create -g rg-vedasynk -n plan-vedasynk --sku F1 --is-linux

# Or cheap always-on: B1
# az appservice plan create -g rg-vedasynk -n plan-vedasynk --sku B1 --is-linux

az webapp create -g rg-vedasynk -p plan-vedasynk -n vedasynk-web --runtime "NODE:22-lts"
```

### App settings

```bash
az webapp config appsettings set -g rg-vedasynk -n vedasynk-web --settings \
  SCM_DO_BUILD_DURING_DEPLOYMENT=true \
  LEAD_API_URL="https://YOUR_API_HOST/api/public/website/vedasynk-lead" \
  LEAD_ORIGIN="https://vedasynk.com" \
  NEXT_PUBLIC_SITE_URL="https://vedasynk.com" \
  NODE_ENV=production
```

### Start command

In App Service → Configuration → General settings → Startup Command:

```bash
npm run start
```

Or set:

```bash
az webapp config set -g rg-vedasynk -n vedasynk-web --startup-file "npm run start"
```

### Deploy from GitHub

1. App Service → Deployment Center → GitHub → select `vedasynk-webiste` → `master`.
2. Build: `npm ci && npm run build`.
3. After deploy, open `https://vedasynk-web.azurewebsites.net`.

### Custom domain

App Service → Custom domains → add `vedasynk.com` / `www` → follow DNS (A/CNAME + TXT validation).

### Cost tips

- Use **F1** only for staging (no always-on, limited CPU).
- Prefer **B1** over Premium for production unless you need scale-out.
- Turn on **ARR affinity off** if you scale later (stateless Next.js).
- Enable only what you need (no App Insights sampling overload on Free).

---

## Option C — Azure Container Apps (best cost/performance balance)

Scale to zero when idle → often cheaper than always-on App Service for a marketing site.

### Dockerfile (add at repo root if you choose this path)

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src/data ./src/data
EXPOSE 3000
CMD ["npm", "run", "start"]
```

### Deploy sketch

```bash
az group create -n rg-vedasynk -l eastus
az containerapp env create -g rg-vedasynk -n env-vedasynk -l eastus

# Build/push image to ACR, then:
az containerapp create \
  -g rg-vedasynk -n vedasynk-web \
  --environment env-vedasynk \
  --image <acr>.azurecr.io/vedasynk-web:latest \
  --target-port 3000 \
  --ingress external \
  --min-replicas 0 \
  --max-replicas 3 \
  --cpu 0.25 --memory 0.5Gi \
  --env-vars \
    LEAD_API_URL=secretref:lead-api-url \
    LEAD_ORIGIN=https://vedasynk.com \
    NEXT_PUBLIC_SITE_URL=https://vedasynk.com
```

### Cost tips

- `--min-replicas 0` = scale to zero (cold start on first hit).
- Start at **0.25 vCPU / 0.5Gi**.
- Keep max replicas low (2–3) unless traffic spikes.

---

## What this app needs in production

1. **Blog data** — already bundled via `npm run generate:blog` → `src/data/blog-posts.json`. Always run `npm run build` (prebuild handles it).
2. **Lead API** — set `LEAD_API_URL` to your public API (not localhost).
3. **Images** — Unsplash remote patterns are in `next.config.ts`; no Azure Blob required unless you self-host assets.
4. **Calendly** — iframe; no Azure config.
5. **Node version** — use **22 LTS** (or 20+).

---

## GitHub Actions example (App Service)

Save as `.github/workflows/deploy-azure.yml` if you want CI:

```yaml
name: Deploy to Azure App Service
on:
  push:
    branches: [master]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://vedasynk.com
          LEAD_ORIGIN: https://vedasynk.com
          LEAD_API_URL: ${{ secrets.LEAD_API_URL }}
      - uses: azure/webapps-deploy@v3
        with:
          app-name: vedasynk-web
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: .
```

Add secrets in GitHub:

- `AZURE_WEBAPP_PUBLISH_PROFILE` (from App Service → Get publish profile)
- `LEAD_API_URL`

---

## Cost checklist

- Prefer **scale-to-zero** (Container Apps) or **SWA Free** over always-on Premium.
- One region only (e.g. `eastus` or `centralindia` if users are mostly India).
- No unnecessary Azure SQL / Redis for this marketing site.
- Set budgets + alerts in Azure Cost Management (e.g. \$20/month).
- Keep lead API on your existing backend; don’t host a second Nest/Express stack on Azure “by default”.

---

## Stay on Cloudflare (already live)

This project is already on Cloudflare Workers:

- Live: https://vedasynk.com  
- Deploy: `npm run deploy`  
- Config: `wrangler.jsonc`

Cloudflare Workers is usually **cheaper** than Azure App Service for a content/marketing Next.js site. Use Azure only when you have a hard requirement for Azure.

---

## Quick decision

| Goal | Choose |
|------|--------|
| Lowest bill, Azure-only | Static Web Apps Free |
| Easiest full Node on Azure | App Service F1 (test) → B1 (prod) |
| Idle ≈ \$0, still full Node | Container Apps, min replicas 0 |
| Already working + cheapest overall | Keep Cloudflare Workers |
