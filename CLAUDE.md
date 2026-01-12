# CLAUDE.md - OMNITREX Nederland Website

**Version:** 1.0
**Created:** January 12, 2026
**Domain:** omnitrex.nl
**Status:** Development

---

## PROJECT OVERVIEW

Marketing website for Omnitrex Nederland, the Dutch market arm of Omnitrex B.V.
This site serves as the landing page for Dutch-specific products and services.

### Products Featured

1. **De Vermogenskluis** (kluis.omnitrex.nl)
   - Digital estate planning vault for 60+ via notaries
   - Dutch language only

2. **Advies & Consultancy** (advies.omnitrex.nl)
   - Custom software development services
   - Powered by Claude Code
   - Dutch market focus

---

## TECHNOLOGY STACK

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Hosting | Vercel (planned) |
| Domain Registrar | TransIP |

---

## PROJECT STRUCTURE

```
omnitrex-website-nl/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Dutch landing page
│   │   ├── layout.tsx         # Root layout with Dutch metadata
│   │   └── globals.css        # Global styles (dark theme)
│   └── components/
│       ├── Header.tsx         # Navigation header (Dutch)
│       └── Footer.tsx         # Footer (Dutch)
├── CLAUDE.md                  # This file
├── package.json
└── tsconfig.json
```

---

## SITE STRUCTURE

| Route | Status | Description |
|-------|--------|-------------|
| `/` | Complete | Landing page with 2 product cards |
| `/over-ons` | Planned | About page (Dutch) |
| `/contact` | Planned | Contact form (Dutch) |
| `/privacy` | Planned | Privacy policy (Dutch) |
| `/voorwaarden` | Planned | Terms of Service (Dutch) |

---

## BRAND COLORS

| Purpose | Tailwind | Hex |
|---------|----------|-----|
| Primary (NL) | orange-500 | #f97316 |
| Secondary | cyan-500 | #06b6d4 |
| Background | slate-900 | #0f172a |
| Card | slate-800 | #1e293b |
| Text | white | #ffffff |
| Muted | slate-400 | #94a3b8 |

---

## DNS CONFIGURATION (TransIP)

```
Type    Name            Value                           Purpose
A       @               76.76.21.21                     Vercel
CNAME   www             cname.vercel-dns.com            Vercel
CNAME   kluis           cname.vercel-dns.com            Vault subdomain
CNAME   advies          cname.vercel-dns.com            Consultancy subdomain
```

---

## RELATED PROJECTS

| Project | Domain | Purpose |
|---------|--------|---------|
| omnitrex-website | omnitrex.eu | EU corporate landing |
| omnitrex-platform | grc.omnitrex.eu | GRC Platform |
| omnitrex-commerce | crm.omnitrex.eu | CRM Platform |
| omnitrex-vault | kluis.omnitrex.nl | Vault Platform (planned) |

---

## DEVELOPMENT COMMANDS

```bash
# Start development server
cd C:\Users\maxim\projects\omnitrex-website-nl
npm run dev  # localhost:3009

# Build for production
npm run build

# Start production server
npm start
```

---

## DEPLOYMENT

### Vercel Setup (Planned)

1. Create Vercel project from GitHub
2. Configure custom domain: omnitrex.nl
3. Set environment variables as needed
4. Configure DNS at TransIP

---

## FUTURE WORK

### Phase 1: Core Pages
- [ ] Create /over-ons (About) page
- [ ] Create /contact page with form
- [ ] Create /privacy page
- [ ] Create /voorwaarden page
- [ ] Add sitemap.ts

### Phase 2: Subdomain Landing Pages
- [ ] Create kluis.omnitrex.nl product info page
- [ ] Create advies.omnitrex.nl consultancy page

### Phase 3: Integration
- [ ] Contact form with Resend
- [ ] Analytics setup
- [ ] Cookie consent (AVG)

---

## CHANGELOG

### v1.0 (January 12, 2026)
- Initial project setup
- Created landing page with 2 product cards
- Created Header and Footer components
- Dutch language content

---

**Parent Project:** Omnitrex B.V. (omnitrex.eu)
**Document Location:** `C:\Users\maxim\projects\omnitrex-website-nl\CLAUDE.md`
