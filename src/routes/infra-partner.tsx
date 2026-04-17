import { createFileRoute } from "@tanstack/react-router";
import {
  Server,
  Wrench,
  Radio,
  Activity,
  Coins,
  Cpu,
  Database,
  Tag,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/delen/Navbar";
import { Footer } from "@/components/delen/Footer";
import { FadeUp } from "@/components/delen/FadeUp";
import { SectionHeading } from "@/components/delen/SectionHeading";
import { RewardDonut } from "@/components/delen/RewardDonut";
import { RoleLoginCard } from "@/components/delen/RoleLoginCard";
import { ROLES } from "@/lib/roles";

export const Route = createFileRoute("/infra-partner")({
  head: () => ({
    meta: [
      { title: "Infrastructure Partner — DeLen" },
      {
        name: "description",
        content:
          "Install and maintain DePIN edge nodes at solar plants. Earn 15% of all weekly $DLN reward emissions.",
      },
      { property: "og:title", content: "Infrastructure Partner — DeLen" },
      {
        property: "og:description",
        content:
          "Power the network. Earn from every asset you support — 15% of weekly emissions.",
      },
    ],
  }),
  component: InfraPartnerPage,
});

const FEATURES = [
  { icon: Wrench, title: "Install Edge Nodes", desc: "Deploy hardware (DEN-2026001 series) at solar plant sites." },
  { icon: Radio, title: "Maintain Connectivity", desc: "Ensure continuous data transmission to the protocol." },
  { icon: Activity, title: "Monitor Performance", desc: "Track node uptime and data delivery quality." },
  { icon: Coins, title: "Earn Rewards", desc: "15% share of all weekly $DLN emissions." },
];

const SPECS = [
  { icon: Tag, title: "Model", desc: "DEN-2026001" },
  { icon: Cpu, title: "Function", desc: "Reads and transmits real-time performance data from solar plants." },
  { icon: Database, title: "Data Streamed", desc: "Energy output, uptime, environmental metrics, grid telemetry." },
];

function InfraPartnerPage() {
  const role = ROLES["infra-partner"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar role={role} />

      {/* HERO */}
      <section className="relative overflow-hidden delen-hero-cyan">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <FadeUp>
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
              For Infra Partners
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Power the Network. Earn from Every Asset You Support.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              As an Infrastructure Partner, you install and maintain DePIN edge
              nodes at solar plants — keeping data flowing and earning 15% of
              all weekly protocol rewards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#login"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--accent-cyan)] btn-glow shadow-md"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#what"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See What You Do
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -m-8 rounded-[3rem] bg-white/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-white/15">
                  <Server className="h-16 w-16 text-white" strokeWidth={1.6} />
                </div>
                <div className="mt-6 text-center text-white">
                  <div className="text-3xl font-bold">DEN-2026001</div>
                  <div className="text-sm text-white/75">
                    Edge node hardware series
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHAT YOU DO */}
      <section id="what" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Your Role" title="What You Do" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeUp key={f.title} delay={i * 0.06}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
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

      {/* REWARD BREAKDOWN */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reward Breakdown"
            title="Your Share of the Network"
            subtitle="From every $22,000 vault funded by validators."
          />

          <FadeUp>
            <div className="mt-12 grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-2 md:p-12">
              <div className="flex justify-center">
                <RewardDonut
                  share={15}
                  color="var(--accent-cyan)"
                  label="Infra Partner"
                />
              </div>
              <div>
                <div className="inline-flex items-center rounded-full bg-[var(--accent-cyan)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-cyan)]">
                  Infra Partner Share
                </div>
                <div className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                  $14,025 – $18,150
                </div>
                <div className="text-sm text-muted-foreground">
                  Total earnings over 208 weeks
                </div>
                <p className="mt-6 text-sm text-foreground">
                  15% of all weekly $DLN emissions distributed to nodes
                  maintaining uptime and high data quality.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* EDGE NODE */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hardware"
            title="The Edge Node — Your Tool"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SPECS.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeUp key={s.title} delay={i * 0.08}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get Started"
            title="Ready to Power the Network?"
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
