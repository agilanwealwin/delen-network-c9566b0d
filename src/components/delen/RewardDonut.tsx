import { motion } from "framer-motion";

/**
 * Simple SVG donut showing one share percentage of total emissions.
 */
export function RewardDonut({
  share,
  color,
  label,
}: {
  share: number; // 0-100
  color: string; // CSS color (var or hex)
  label: string;
}) {
  const radius = 70;
  const stroke = 18;
  const c = 2 * Math.PI * radius;
  const dash = (share / 100) * c;

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          initial={{ strokeDasharray: `0 ${c}` }}
          whileInView={{ strokeDasharray: `${dash} ${c}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="-mt-[112px] text-center pointer-events-none">
        <div className="text-3xl font-bold text-foreground">{share}%</div>
        <div className="text-xs font-medium text-muted-foreground">{label}</div>
      </div>
      <div className="mt-[60px]" />
    </div>
  );
}
