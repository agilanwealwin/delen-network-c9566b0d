import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Vault,
  Lock,
  CheckCircle2,
  Gem,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/delen/Navbar";
import { Footer } from "@/components/delen/Footer";
import { FadeUp } from "@/components/delen/FadeUp";
import { SectionHeading } from "@/components/delen/SectionHeading";
import { RewardDonut } from "@/components/delen/RewardDonut";
import { RoleLoginCard } from "@/components/delen/RoleLoginCard";
import { ROLES } from "@/lib/roles";

export const Route = createFileRoute("/validator")({
  head: () => ({
    meta: [
      { title: "Validator — DeLen" },
      {
        name: "description",
        content:
          "Fund DePIN Vaults, verify on-chain data integrity, and earn 60% of all weekly $DLN reward emissions.",
      },
      { property: "og:title", content: "Validator — DeLen" },
      {
        property: "og:description",
        content:
          "Validate. Stake. Earn. Protect. Validators earn the largest share of weekly emissions.",
      },
    ],
  }),
  component: ValidatorPage,
});

const FEATURES = [
  { icon: Vault, title: "Fund DePIN Vaults", desc: "Deposit ~$22,000 equivalent per 100kW asset into smart contract vaults." },
  { icon: Lock, title: "Stake $DLNv Tokens", desc: "Tokens locked for 208 weeks, principal fully protected." },
  { icon: CheckCircle2, title: "Attest Data Integrity", desc: "Verify asset performance data on-chain." },
  { icon: Gem, title: "Earn 60% Rewards", desc: "Largest share of weekly $DLN emissions." },
];

const PROTECTION = [
  "All locked capital is non-custodial — governed by smart contract, not held by DeLen.",
  "Principal returned at end of 208-week commitment.",
  "Slashing only applies if fraud or intentional data manipulation is proven.",
  "Vault holds BTC + tokenized gold (stable, yield-generating assets).",
  "BTC + tokenized gold accumulation via surplus yield.",
];

function ValidatorPage() {
  const role = ROLES.validator;

  return (
    <div className="min-h-screen bg-background">
      <Navbar role={role} />

      {/* HERO */}
      <section className="relative overflow-hidden delen-hero-deep">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <FadeUp>
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
              For Validators
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Validate. Stake. Earn. Protect.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              Validators are the backbone of the DeLen protocol. You fund DePIN
              Vaults, verify on-chain data integrity, and earn 60% of all
              weekly $DLN reward emissions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#login"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--accent-green)] btn-glow shadow-md"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#protection"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Capital Protection
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -m-8 rounded-[3rem] bg-white/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-white/15">
                  <ShieldCheck className="h-16 w-16 text-white" strokeWidth={1.6} />
                </div>
                <div className="mt-6 text-center text-white">
                  <div className="text-3xl font-bold">60%</div>
                  <div className="text-sm text-white/75">
                    Of all weekly emissions
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHAT VALIDATORS DO */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Your Role" title="What Validators Do" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeUp key={f.title} delay={i * 0.06}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-green)]/10 text-[var(--accent-green)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* NPV FORMULA */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Math"
            title="How Vault Deposits Are Calculated"
          />

          <FadeUp>
            <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">
                NPV Formula
              </div>
              <div className="mt-3 rounded-xl bg-foreground/95 p-5 font-mono text-sm text-background sm:text-base overflow-x-auto">
                <div>NPV = C₁ × (1 − ((1−d) / (1+r)^n)) / (r + d)</div>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["C₁", "Year 1 cash flow (~$72,000 USD)"],
                  ["d", "Annual degradation rate (0.5%)"],
                  ["r", "Discount rate (9%)"],
                  ["n", "4 years (vault window)"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                  >
                    <span className="font-mono text-sm font-bold text-primary">
                      {k}
                    </span>
                    <span className="text-sm text-muted-foreground">{v}</span>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-gradient-brand p-5 text-white">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-80">
                    Result
                  </div>
                  <div className="mt-1 text-2xl font-bold">
                    NPV ≈ $22,000 USD
                  </div>
                </div>
                <div className="text-sm opacity-90">
                  Exact amount you deposit into the vault.
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CAPITAL PROTECTION */}
      <section
        id="protection"
        className="bg-background py-20 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="rounded-3xl border-2 border-[var(--accent-green)]/40 bg-[var(--accent-green)]/8 p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-green)] text-white shadow-md">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent-green)]">
                    Guarantee
                  </div>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Capital Protection Guarantee
                  </h2>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {PROTECTION.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--accent-green)] shrink-0" />
                    <span className="text-sm text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* REWARD BREAKDOWN */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reward Breakdown"
            title="Your Share of the Network"
          />
          <FadeUp>
            <div className="mt-12 grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-2 md:p-12">
              <div className="flex justify-center">
                <RewardDonut
                  share={60}
                  color="var(--accent-green)"
                  label="Validator"
                />
              </div>
              <div>
                <div className="inline-flex items-center rounded-full bg-[var(--accent-green)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-green)]">
                  Validator Share
                </div>
                <div className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                  $56,100 – $72,600
                </div>
                <div className="text-sm text-muted-foreground">
                  Total earnings over 208 weeks per $22,000 vault
                </div>
                <p className="mt-6 text-sm text-foreground">
                  Validators receive the largest weekly emission share for
                  funding vaults and securing data integrity.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* LOGIN */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get Started"
            title="Ready to Validate?"
          />
          <div className="mt-12">
            <RoleLoginCard role={role} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
