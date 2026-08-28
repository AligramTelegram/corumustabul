export function SunHeading({
  children,
  as = "h2",
  hint,
  className = "",
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  hint?: string;
  className?: string;
}) {
  const Tag = as;
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-end justify-between gap-4">
        <Tag className="font-display text-2xl font-semibold text-ink">
          {children}
        </Tag>
        {hint && (
          <span className="hidden shrink-0 text-sm text-muted sm:block">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}
