import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-muted text-brand-text transition-colors duration-300",
        className,
      )}
    >
      <Icon className="size-[18px]" strokeWidth={1.75} />
    </span>
  );
}
