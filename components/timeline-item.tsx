interface TimelineItemProps {
  dot: "active" | "default";
  title: string;
  sub: string;
  year: string;
  isLast?: boolean;
}

export function TimelineItem({ dot, title, sub, year, isLast }: TimelineItemProps) {
  return (
    <div className={`flex items-start gap-3 py-3 ${isLast ? "" : "border-b border-border"}`}>
      <div className="mt-1.5 flex-shrink-0">
        <div
          className={`size-2 rounded-full ${
            dot === "active" ? "bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.5)]" : "bg-muted-foreground/40"
          }`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-foreground">{title}</p>
        <p className="text-[11px] text-muted-foreground">{sub}</p>
      </div>
      <span className="flex-shrink-0 text-[11px] tabular-nums text-muted-foreground">{year}</span>
    </div>
  );
}
