import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ArrowRight,
  Sun,
  Server,
  ShieldCheck,
  Search,
  Cpu,
  Vault,
  Coins,
  Radio,
} from "lucide-react";
import { Footer } from "@/components/delen/Footer";
import { FadeUp } from "@/components/delen/FadeUp";
import { SectionHeading } from "@/components/delen/SectionHeading";
import { StatCountUp } from "@/components/delen/StatCountUp";
import { ROLE_LIST } from "@/lib/roles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DeLen — Unlock the Hidden Value of Real-World Energy Assets" },
      {
        name: "description",
        content:
          "Connect solar asset owners, infrastructure partners, and validators in a decentralized energy network powered by blockchain.",
      },
    ],
  }),
  component: HomePage,
});

const ROLE_ICONS = {
  "asset-owner": Sun,
  "infra-partner": Server,
  validator: ShieldCheck,
} as const;

const ROLE_DESCRIPTIONS = {
  "asset-owner": {
    subtitle: "You own solar panels, inverters, or ground-mounted plants.",
    description:
      "Connect your real-world energy assets to the DeLen protocol. Earn $DLN tokens based on verified energy output, uptime, and environmental impact.",
    teaser: "Earn 17–22% of vault deposit over 208 weeks",
    accent: "from-primary to-primary-end",
    edgeClass: "border-l-4 border-l-primary",
  },
  "infra-partner": {
    subtitle: "You deploy and maintain edge node hardware on-site.",
    description:
      "Install and manage DePIN edge nodes at solar plants. Earn a 15% share of weekly $DLN reward emissions for keeping the network alive.",
    teaser: "15% of weekly protocol rewards",
    accent: "from-[var(--accent-cyan)] to-primary",
    edgeClass: "border-l-4 border-l-[var(--accent-cyan)]",
  },
  validator: {
    subtitle: "You verify on-chain data integrity and fund DePIN vaults.",
    description:
      "Fund DePIN Vaults using NPV calculations, stake $DLNv tokens, and earn 60% of weekly reward emissions while protecting capital via smart contract.",
    teaser: "60% of all weekly reward emissions",
    accent: "from-[var(--accent-green)] to-primary",
    edgeClass: "border-l-4 border-l-[var(--accent-green)]",
  },
} as const;

const STEPS = [
  {
    icon: Search,
    title: "Asset Audit",
    desc: "An approved partner audits your plant for capacity and connectivity.",
  },
  {
    icon: Cpu,
    title: "Edge Node Install",
    desc: "Hardware node installed, begins transmitting real-time data.",
  },
  {
    icon: Vault,
    title: "DePIN Vault Created",
    desc: "Smart contract vault funded equal to 4-year NPV of plant earnings.",
  },
  {
    icon: Coins,
    title: "Stake & Earn",
    desc: "$DLNv tokens staked for 208 weeks, rewards flow weekly.",
  },
  {
    icon: Radio,
    title: "Go Live",
    desc: "Asset live on network, weekly $DLN rewards distributed automatically.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden delen-hero-purple">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur ring-1 ring-white/20">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <Zap className="h-3 w-3 text-white" strokeWidth={2.8} />
              </span>
              DeLen Protocol
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Unlock the Hidden Value of{" "}
              <span className="bg-gradient-to-r from-white to-[var(--primary-end)] bg-clip-text text-transparent">
                Real-World Energy Assets
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
              DeLen connects solar asset owners, infrastructure partners, and
              validators in a decentralized energy network powered by
              blockchain.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <a
              href="#roles"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary btn-glow shadow-lg"
            >
              Explore DePIN
              <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ROLE SELECTION */}
      <section id="roles" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Choose Your Path"
            title="Who Are You?"
            subtitle="Select your role to explore your dedicated portal."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ROLE_LIST.map((role, i) => {
              const Icon = ROLE_ICONS[role.key];
              const meta = ROLE_DESCRIPTIONS[role.key];
              return (
                <FadeUp key={role.key} delay={i * 0.1}>
                  <Link
                    to={role.path}
                    className={`card-lift group block h-full rounded-2xl bg-card p-7 shadow-sm border border-border ${meta.edgeClass}`}
                  >
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${meta.accent} text-white shadow-md`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground">
                      {role.label}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {meta.subtitle}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {meta.description}
                    </p>
                    <div className="mt-5 rounded-lg bg-muted px-3 py-2 text-xs font-semibold text-foreground">
                      {meta.teaser}
                    </div>
                    <div
                      className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${role.accentText} group-hover:gap-2.5 transition-all`}
                    >
                      Explore {role.label}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="How DeLen Works"
            subtitle="From real-world asset to on-chain rewards in five steps."
          />

          {/* Desktop horizontal */}
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
              <div className="grid grid-cols-5 gap-6">
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <FadeUp key={s.title} delay={i * 0.08}>
                      <div className="relative text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-card border-2 border-primary text-primary shadow-md relative z-10">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="mt-2 text-xs font-bold uppercase tracking-wider text-primary">
                          Step {i + 1}
                        </div>
                        <div className="mt-2 text-base font-semibold text-foreground">
                          {s.title}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {s.desc}
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/tablet horizontal scroll */}
          <div className="mt-12 lg:hidden -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="snap-start min-w-[260px] rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">
                      Step {i + 1}
                    </div>
                    <div className="mt-1 text-base font-semibold text-foreground">
                      {s.title}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {s.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF OF IMPACT */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof of Impact"
            title="Real Assets. Real Impact."
            subtitle="All calculations based on verified on-chain Proof of Impact data."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StatCountUp
              prefix="$"
              value={72000}
              suffix=" / yr"
              label="Average Year 1 Cash Flow"
              sublabel="100kW plant"
            />
            <StatCountUp
              prefix="$"
              value={22000}
              label="Average Vault Deposit"
              sublabel="100kW asset"
            />
            <StatCountUp
              value={208}
              suffix=" wks"
              label="Full Reward Period"
              sublabel="≈ 4 years on-chain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
