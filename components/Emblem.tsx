/**
 * Çorum Usta Bul amblemi - logo rozetinin sadeleştirilmiş hâli.
 * Güneş ışınları, Çorum Saat Kulesi silüeti, antrasit hilal, bordo şerit.
 */
export function Emblem({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Çorum Usta Bul amblemi"
    >
      <circle cx="50" cy="50" r="48" fill="var(--surface)" />
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />
      {/* güneş ışınları */}
      <g fill="var(--orange)">
        {Array.from({ length: 11 }).map((_, i) => {
          const a = (-90 + (i - 5) * 15) * (Math.PI / 180);
          const x = 50 + Math.cos(a) * 30;
          const y = 50 + Math.sin(a) * 30;
          return (
            <circle key={i} cx={x} cy={y} r={i % 2 ? 2.4 : 3.4} />
          );
        })}
      </g>
      {/* turuncu disk */}
      <circle cx="50" cy="52" r="24" fill="var(--orange)" />
      {/* antrasit hilal */}
      <path
        d="M26 58 A24 24 0 0 0 74 58 A30 30 0 0 1 26 58 Z"
        fill="var(--ink)"
        opacity="0.85"
      />
      {/* saat kulesi silüeti */}
      <g fill="var(--surface)">
        <rect x="45" y="34" width="10" height="30" />
        <rect x="43.5" y="60" width="13" height="4" />
        <path d="M50 26 L54 34 L46 34 Z" />
        <circle cx="50" cy="45" r="3.4" fill="var(--orange)" />
      </g>
      {/* bordo şerit */}
      <path
        d="M8 74 A48 48 0 0 0 92 74 A48 48 0 0 1 8 74 Z"
        fill="var(--bordo)"
      />
      <path
        d="M12 78 A44 44 0 0 0 88 78 L88 74 A48 48 0 0 1 12 74 Z"
        fill="var(--bordo)"
      />
    </svg>
  );
}

import Image from "next/image";

export function EmblemImg({
  className = "h-8 w-8",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/emblem.png"
      alt="Çorum Usta Bul"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <EmblemImg className="h-9 w-9 shrink-0" size={72} />
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        Çorum<span className="text-orange">UstaBul</span>
      </span>
    </span>
  );
}
