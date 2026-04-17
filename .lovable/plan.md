
## DeLen — Decentralized Energy Network (Multi-Page Web3 SaaS)

A premium, conversion-focused marketing + onboarding site for a DePIN energy protocol with 3 distinct audience funnels (Asset Owner, Infra Partner, Validator), each ending in a role-aware login/register form.

### Tech & Design System
- **Stack**: TanStack Router (project's router — equivalent of React Router), Tailwind v4, Framer Motion, Lucide React icons.
- **No emojis anywhere** — only Lucide icons (Zap, Sun, ShieldCheck, Server, Cpu, etc.).
- **Currency**: USD only across all pages (vault ~$22,000, year-1 cash flow shown as USD equivalent).
- **Login**: Pure UI demo — 1.5s spinner, then success toast (no redirect, no dashboard).
- **Tokens** (added to `styles.css`): primary `#7B61FF`, primary-end `#A78BFA`, accent-cyan `#06B6D4`, accent-green `#10B981`, bg `#F8F7FF`, ink `#1E1B4B`, muted `#6B7280`, border `#E5E7EB`.
- **Font**: Inter via Google Fonts.
- **Reusable primitives**: animated CSS gradient hero background, glow-on-hover button, lift-on-hover card, scroll fade-up wrapper, count-up stat, donut/share bar, vertical & horizontal step timeline, role-aware login card.
- **Page transitions**: Framer Motion fade+slide on route change.

### Routes & Pages

**`/` — Root Landing**
- Hero with animated purple→indigo gradient, DeLen wordmark + Zap icon, headline + sub, "Explore DePIN" CTA scrolling to role selection.
- "Who Are You?" — 3 role cards (purple/cyan/green accent borders) → link to `/asset-owner`, `/infra-partner`, `/validator`.
- "How DeLen Works" — 5-step horizontal timeline (scrollable on mobile), animated connecting line on scroll.
- "Real Assets. Real Impact." — 3 count-up stat cards.
- Global footer (placeholder `#` links).

**`/asset-owner`**
- Sticky navbar (logo, Back to Home, "Login as Asset Owner").
- Purple-indigo gradient hero, solar-panel Lucide icon, dual CTAs.
- "What You Bring to the Network" — 5-feature icon grid.
- "Your Earnings Model" — 20% share visualization (donut + range "$18,700–$24,200 over 208 weeks").
- "Your DePIN Vault — Simply Explained" — 3 info cards + green non-custodial note.
- "Your Journey" — 5-step vertical timeline.
- "Learn More" — YouTube embed placeholder card + Whitepaper card.
- Inline login/register card (purple "Asset Owner" badge, Login/Register tabs, email + password, Connect Wallet outline, glow CTA, error state).

**`/infra-partner`**
- Same navbar pattern, cyan-purple gradient hero, server-rack icon.
- "What You Do" — 4-feature grid.
- "Reward Breakdown" — 15% donut, range "$14,025–$18,150 over 208 weeks".
- "The Edge Node" — 3 spec cards (DEN-2026001, function, data streamed).
- Inline login card with cyan "Infra Partner" badge.

**`/validator`**
- Same navbar pattern, deep purple→indigo gradient, shield-check icon.
- "What Validators Do" — 4-feature grid.
- "How Vault Deposits Are Calculated" — clean math/formula card with NPV breakdown (USD result ~$22,000).
- "Capital Protection Guarantee" — green info box with 5 bullets.
- "Reward Breakdown" — 60% donut, range "$56,100–$72,600 over 208 weeks".
- Inline login card with green "Validator" badge.

**`/login/$role`** (TanStack uses `$` for params)
- Standalone login portal as fallback for direct navigation.
- Reads role from URL, role switcher pills at top (Asset Owner / Infra Partner / Validator).
- Reuses the same login card; updates badge color, helper copy, and CTA label dynamically.
- Persists last-used role to `localStorage`.
- Invalid role param → redirect to `/`.

### Login Card Behavior (shared component)
- Controlled inputs (email/wallet, password).
- Tab toggle Login ↔ Register (no separate page).
- Submit: 1.5s simulated delay, button shows spinner.
- Success: green toast "Welcome — connected as {role}". Form stays put.
- Error trigger: empty fields or invalid email → red border + "Invalid credentials. Please try again."
- "Connect Wallet" (MetaMask Lucide icon) → same simulated flow with wallet-style toast.

### Responsive
- Mobile: single column, stacked cards, full-width buttons, horizontal-scroll timeline.
- Tablet: 2-col grids.
- Desktop ≥1024: 3-col grids, full horizontal 5-step timeline.

### File Plan
- `src/styles.css` — add design tokens, Inter import, gradient keyframes, glow/lift utilities.
- `src/routes/__root.tsx` — global font, page-transition wrapper, scroll-to-top on route change.
- `src/routes/index.tsx` — root landing (replaces placeholder).
- `src/routes/asset-owner.tsx`, `infra-partner.tsx`, `validator.tsx` — role pages.
- `src/routes/login.$role.tsx` — fallback login portal.
- `src/components/delen/` — `Navbar`, `Footer`, `RoleLoginCard`, `GradientHero`, `StatCountUp`, `RewardDonut`, `StepTimeline`, `FeatureGrid`, `SectionHeading`, `FadeUp`.
- `src/lib/roles.ts` — role config (label, color, badge, copy, share %, USD range).

