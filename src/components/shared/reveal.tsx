import type { CSSProperties, ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
}

/** Fades content up as it enters the viewport. No-JS and reduced-motion visitors see it immediately. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal=""
      data-visible={inView ? "" : undefined}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
