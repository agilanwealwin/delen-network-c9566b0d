import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function StatCountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  label,
  sublabel,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <div
      ref={ref}
      className="card-lift rounded-2xl border border-border bg-card p-8 shadow-sm text-center"
    >
      <div className="text-4xl font-bold tracking-tight text-gradient-brand sm:text-5xl">
        {prefix}
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-3 text-base font-semibold text-foreground">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-sm text-muted-foreground">{sublabel}</div>
      )}
    </div>
  );
}
