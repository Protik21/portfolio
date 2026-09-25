import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-8 place-items-center rounded-lg bg-brand font-mono text-[11px] font-semibold tracking-tight text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.15)]",
        className,
      )}
    >
      PB
    </span>
  );
}
