import { Link } from "@tanstack/react-router";
import { ArrowLeft, Zap } from "lucide-react";
import type { RoleConfig } from "@/lib/roles";

export function Navbar({ role }: { role?: RoleConfig }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-md group-hover:scale-105 transition-transform">
            <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            DeLen
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          {role && (
            <a
              href="#login"
              className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${role.ctaClass}`}
            >
              Login as {role.label}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
