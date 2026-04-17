import { createFileRoute } from "@tanstack/react-router";
import {
  Sun,
  Zap,
  Radio,
  Clock,
  Leaf,
  BarChart3,
  Vault,
  Lock,
  RefreshCcw,
  Play,
  FileText,
  ArrowRight,
  ShieldCheck,
  Search,
  Cpu,
  Coins,
} from "lucide-react";
import { Navbar } from "@/components/delen/Navbar";
import { Footer } from "@/components/delen/Footer";
import { FadeUp } from "@/components/delen/FadeUp";
import { SectionHeading } from "@/components/delen/SectionHeading";
import { RewardDonut } from "@/components/delen/RewardDonut";
import { RoleLoginCard } from "@/components/delen/RoleLoginCard";
import { ROLES } from "@/lib/roles";

export const Route = createFileRoute("/asset-owner")({
  head: () => ({
    meta: [
      { title: "Asset Owner — DeLen" },
      {
        name: "description",
        content:
          "Connect your solar asset to the DeLen DePIN protocol and earn weekly $DLN rewards based on real verified energy output.",
      },
      { property: "og:title", content: "Asset Owner — DeLen" },
      {
        property: "og:description",
        content:
          "Your solar asset. Your token. Your earnings. Connect with DeLen.",
      },
    ],
  }),
  component: AssetOwnerPage,
});

const FEATURES = [
  { icon: Zap, title: "Energy Generation", desc: "Real kWh output verified on-chain." },
  { icon: Radio, title: "Grid Export Data", desc: "Net metering data streamed via edge node." },
  { icon: Clock, title: "Uptime", desc: "Asset availability tracked 24/7." },
  { icon: Leaf, title: "CO₂ Offset", desc: "Environmental impact verified and tokenized." },
  { icon: BarChart3, title: "Performance Score", desc: "Quality metrics rewarded with higher emissions." },
];

const VAULT_CARDS = [
  {
    icon: Vault,
    title: "What is the Vault?",
    desc: "A smart contract holding funds equal to your plant's 4-year projected earnings (NPV). Not controlled by DeLen — it's yours.",
  },
  {
    icon: ShieldCheck,
    title: "Who Funds It?",
    desc: "Validators fund your vault with ~$22,000 equivalent. You receive $DLNv tokens 1:1 for the deposit value.",
  },
  {
    icon: RefreshCcw,
    title: "When Do You Get It Back?",
    desc: "At the end of 208 weeks (4 years), the principal is fully returned. You keep all rewards earned.",
  },
];

const JOURNEY = [
  { icon: Search, title: "Apply & Audit", desc: "Submit your plant details. An approved partner audits capacity and connectivity." },
  { icon: Cpu, title: "Edge Node Installed", desc: "Hardware is installed. Real-time data begins flowing to the protocol." },
  { icon: Vault, title: "Vault Created", desc: "Your smart contract vault is funded. You receive $DLNv tokens." },
  { icon: Coins, title: "Go Live", desc: "Your asset is live. Weekly $DLN rewards start flowing." },
  { icon: RefreshCcw, title: "Renew or Exit", desc: "At 208 weeks, vault deposit returned. Option to renew if uptime > 94%." },
];

function AssetOwnerPage() {
  const role = ROLES["asset-owner"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar role={role} />

      {/* HERO */}
      <section className="relative overflow-hidden delen-hero-purple">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <FadeUp>
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
              For Asset Owners
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Solar Asset. Your Token. Your Earnings.
            </h1>
            <p className="mt-5 text-base text-white/85 sm:text-lg max-w-xl">
              Connect your rooftop or ground-mounted solar plant to the DeLen
              DePIN protocol and earn weekly $DLN rewards based on your real
              energy output.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#login"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary btn-glow shadow-md"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Learn How It Works
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -m-8 rounded-[3rem] bg-white/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-white/15">
                  <Sun className="h-16 w-16 text-white" strokeWidth={1.6} />
                </div>
                <div className="mt-6 text-center text-white">
                  <div className="text-3xl font-bold">100 kW</div>
                  <div className="text-sm text-white/75">
                    Average plant size connected
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHAT YOU CONTRIBUTE */}
      <section id="how" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Contribution"
            title="What You Bring to the Network"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeUp key={f.title} delay={i * 0.05}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
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

      {/* EARNINGS MODEL */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Earnings Model"
            title="Your Earnings Model"
            subtitle="From a $22,000 vault deposit (100kW plant)."
          />

          <FadeUp>
            <div className="mt-12 grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-2 md:p-12">
              <div className="flex justify-center">
                <RewardDonut
                  share={20}
                  color="var(--primary)"
                  label="Asset Owner"
                />
              </div>
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Asset Owner Share
                </div>
                <div className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                  $18,700 – $24,200
                </div>
                <div className="text-sm text-muted-foreground">
                  Total earnings over 208 weeks
                </div>
                <ul className="mt-6 space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <Coins className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    Rewards emitted <strong>weekly</strong>, not as a lump sum.
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    Better uptime + data quality = higher weekly share.
                  </li>
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VAULT EXPLAINED */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vault"
            title="Your DePIN Vault — Simply Explained"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VAULT_CARDS.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeUp key={c.title} delay={i * 0.08}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--accent-green)]/30 bg-[var(--accent-green)]/10 p-5">
              <Lock className="mt-0.5 h-5 w-5 text-[var(--accent-green)] shrink-0" />
              <p className="text-sm text-foreground">
                Your vault deposit is <strong>non-custodial</strong>. Governed
                by smart contract, not held by DeLen.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Journey"
            title="Your Journey as an Asset Owner"
          />

          <div className="relative mt-14">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            <div className="space-y-8">
              {JOURNEY.map((j, i) => {
                const Icon = j.icon;
                return (
                  <FadeUp key={j.title} delay={i * 0.05}>
                    <div className="relative flex gap-5">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="card-lift flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary">
                          Step {i + 1}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold text-foreground">
                          {j.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {j.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LEARN MORE */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Resources" title="Learn More About DePIN" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FadeUp>
              <div className="card-lift rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                  <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-white btn-glow shadow-lg">
                    <Play className="h-6 w-6 ml-1" fill="currentColor" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    What is DePIN? — DeLen Explainer
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Watch our protocol overview.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  DeLen Whitepaper 2025
                </h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">
                  Read the full protocol documentation.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Read the full protocol documentation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get Started"
            title="Ready to Connect Your Asset?"
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
