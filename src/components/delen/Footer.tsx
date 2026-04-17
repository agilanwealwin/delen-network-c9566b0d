import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <div>
              <div className="text-sm font-bold text-foreground">DeLen</div>
              <div className="text-xs text-muted-foreground">
                Decentralized Energy Network
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Whitepaper
            </a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © 2025 DeLen Global Ltd. Protocol Members Only.
          </p>
        </div>
      </div>
    </footer>
  );
}
