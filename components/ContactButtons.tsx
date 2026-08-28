import { Icon } from "@/components/Icon";

export function ContactButtons({
  phone,
  phoneDisplay,
  whatsapp,
  website,
  message,
  size = "md",
}: {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  website?: string;
  message?: string;
  size?: "sm" | "md";
}) {
  const pad = size === "sm" ? "px-3.5 py-2 text-sm" : "px-5 py-2.5";
  const wa = `https://wa.me/${whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={`tel:${phone}`}
        className={`enamel inline-flex items-center gap-2 rounded-full bg-accent font-semibold text-accent-fg transition-transform hover:-translate-y-0.5 ${pad}`}
      >
        <Icon name="Phone" className="h-4 w-4" />
        {phoneDisplay}
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface font-semibold text-ink transition-colors hover:border-orange hover:text-orange ${pad}`}
      >
        <Icon name="MessageCircle" className="h-4 w-4" />
        WhatsApp
      </a>
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface font-semibold text-ink transition-colors hover:border-orange hover:text-orange ${pad}`}
        >
          <Icon name="Globe" className="h-4 w-4" />
          Web sitesi
        </a>
      )}
    </div>
  );
}
