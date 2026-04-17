import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Zap } from "lucide-react";
import { Footer } from "@/components/delen/Footer";
import { RoleLoginCard } from "@/components/delen/RoleLoginCard";
import { ROLES, ROLE_LIST, isRoleKey, type RoleKey } from "@/lib/roles";

export const Route = createFileRoute("/login/$role")({
  head: () => ({
    meta: [
      { title: "Login — DeLen" },
      {
        name: "description",
        content:
          "Sign in to the DeLen DePIN protocol as Asset Owner, Infra Partner, or Validator.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { role: roleParam } = Route.useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRoleKey(roleParam)) {
      navigate({ to: "/", replace: true });
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("delen.lastRole", roleParam);
    }
  }, [roleParam, navigate]);

  if (!isRoleKey(roleParam)) return null;

  const role = ROLES[roleParam as RoleKey];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold text-foreground">DeLen</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sign in to <span className="text-gradient-brand">DeLen</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose your role to continue.
            </p>
          </div>

          {/* Role switcher pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {ROLE_LIST.map((r) => {
              const active = r.key === role.key;
              return (
                <Link
                  key={r.key}
                  to="/login/$role"
                  params={{ role: r.key }}
                  replace
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors border ${
                    active
                      ? `${r.badgeClass} ${r.accentBorder}`
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {r.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <RoleLoginCard role={role} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
