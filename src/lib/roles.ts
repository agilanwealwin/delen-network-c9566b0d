export type RoleKey = "asset-owner" | "infra-partner" | "validator";

export interface RoleConfig {
  key: RoleKey;
  label: string;
  path: "/asset-owner" | "/infra-partner" | "/validator";
  badgeClass: string; // pill bg/text
  accentText: string;
  accentBg: string;
  accentBorder: string;
  ctaClass: string; // gradient/solid + glow
  share: number; // % of weekly emissions
  shareUsdRange: string;
  helper: string;
  ctaLabel: string;
}

export const ROLES: Record<RoleKey, RoleConfig> = {
  "asset-owner": {
    key: "asset-owner",
    label: "Asset Owner",
    path: "/asset-owner",
    badgeClass: "bg-primary/10 text-primary",
    accentText: "text-primary",
    accentBg: "bg-primary",
    accentBorder: "border-primary",
    ctaClass: "bg-gradient-brand text-primary-foreground btn-glow",
    share: 20,
    shareUsdRange: "$18,700 – $24,200",
    helper: "Connect your solar asset and start earning weekly $DLN rewards.",
    ctaLabel: "Continue as Asset Owner",
  },
  "infra-partner": {
    key: "infra-partner",
    label: "Infra Partner",
    path: "/infra-partner",
    badgeClass: "bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]",
    accentText: "text-[var(--accent-cyan)]",
    accentBg: "bg-[var(--accent-cyan)]",
    accentBorder: "border-[var(--accent-cyan)]",
    ctaClass:
      "bg-[var(--accent-cyan)] text-white btn-glow btn-glow-cyan",
    share: 15,
    shareUsdRange: "$14,025 – $18,150",
    helper: "Deploy and maintain edge nodes — earn 15% of weekly emissions.",
    ctaLabel: "Continue as Infra Partner",
  },
  validator: {
    key: "validator",
    label: "Validator",
    path: "/validator",
    badgeClass: "bg-[var(--accent-green)]/10 text-[var(--accent-green)]",
    accentText: "text-[var(--accent-green)]",
    accentBg: "bg-[var(--accent-green)]",
    accentBorder: "border-[var(--accent-green)]",
    ctaClass:
      "bg-[var(--accent-green)] text-white btn-glow btn-glow-green",
    share: 60,
    shareUsdRange: "$56,100 – $72,600",
    helper: "Fund DePIN vaults, attest data, earn the largest reward share.",
    ctaLabel: "Continue as Validator",
  },
};

export const ROLE_LIST: RoleConfig[] = [
  ROLES["asset-owner"],
  ROLES["infra-partner"],
  ROLES.validator,
];

export function isRoleKey(v: string): v is RoleKey {
  return v === "asset-owner" || v === "infra-partner" || v === "validator";
}
