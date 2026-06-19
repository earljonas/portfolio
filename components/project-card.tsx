import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  stack: string;
  description: string;
  link: string;
}

export function ProjectCard({ name, stack, description, link }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-3.5">
      <div>
        <h3 className="text-[13px] font-medium text-foreground">{name}</h3>
        <p className="text-[11px] text-muted-foreground">{stack}</p>
      </div>
      <p className="text-[12px] leading-relaxed text-muted-foreground">{description}</p>
      <a
        href={`https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ExternalLink className="size-3" />
        {link}
      </a>
    </div>
  );
}
