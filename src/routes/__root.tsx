import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { PageTransition } from "@/components/delen/PageTransition";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground btn-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DeLen — Decentralized Energy Network" },
      {
        name: "description",
        content:
          "DeLen connects solar asset owners, infrastructure partners, and validators in a decentralized energy network powered by blockchain.",
      },
      { property: "og:title", content: "DeLen — Decentralized Energy Network" },
      {
        property: "og:description",
        content:
          "Unlock the hidden value of real-world energy assets with the DeLen DePIN protocol.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      <Toaster position="top-right" richColors />
    </>
  );
}
