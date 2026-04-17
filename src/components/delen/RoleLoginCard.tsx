import { useState, type FormEvent } from "react";
import { Loader2, Wallet } from "lucide-react";
import { toast } from "sonner";
import type { RoleConfig } from "@/lib/roles";

export function RoleLoginCard({ role }: { role: RoleConfig }) {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [walletLoading, setWalletLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!email.trim() || !password.trim()) return false;
    // Accept email or wallet address (0x...) — simple check
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const isWallet = /^0x[a-fA-F0-9]{6,}$/.test(email.trim());
    return isEmail || isWallet;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validate()) {
      setError("Invalid credentials. Please try again.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(
        `Welcome — connected as ${role.label}`,
        { description: tab === "register" ? "Account created." : "Signed in successfully." },
      );
    }, 1500);
  };

  const onWallet = () => {
    setWalletLoading(true);
    setTimeout(() => {
      setWalletLoading(false);
      toast.success(`Wallet connected as ${role.label}`, {
        description: "0x7B61…FFAA",
      });
    }, 1500);
  };

  const inputBase =
    "w-full rounded-lg border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors";
  const errorRing = error ? "border-destructive focus:ring-destructive/30 focus:border-destructive" : "border-border";

  return (
    <div
      id="login"
      className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
    >
      <div className="flex justify-center">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${role.badgeClass}`}
        >
          {role.label}
        </span>
      </div>

      <h3 className="mt-4 text-center text-2xl font-bold text-foreground">
        Ready to Connect?
      </h3>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        {role.helper}
      </p>

      {/* Tabs */}
      <div className="mt-6 grid grid-cols-2 rounded-lg bg-muted p-1">
        {(["login", "register"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setTab(t);
              setError(null);
            }}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all capitalize ${
              tab === t
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Email or Wallet Address
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com or 0x..."
            className={`${inputBase} ${errorRing}`}
            autoComplete="username"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={`${inputBase} ${errorRing}`}
            autoComplete={tab === "login" ? "current-password" : "new-password"}
          />
        </div>

        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold disabled:opacity-70 ${role.ctaClass}`}
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Connecting…" : role.ctaLabel}
        </button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-card px-2 text-xs uppercase tracking-wider text-muted-foreground">
              or
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onWallet}
          disabled={walletLoading}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-70"
        >
          {walletLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Wallet className="h-4 w-4" />
          )}
          {walletLoading ? "Connecting Wallet…" : "Connect Wallet"}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          New here? We'll create your account automatically.
        </p>
      </form>
    </div>
  );
}
