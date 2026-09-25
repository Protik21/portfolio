import type { ReactNode } from "react";

import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { SectionCopy } from "@/types/portfolio";

interface SectionProps {
  copy: SectionCopy;
  children: ReactNode;
  className?: string;
  /** Optional element aligned to the right of the heading on wide screens. */
  aside?: ReactNode;
}

export function Section({ copy, children, className, aside }: SectionProps) {
  const titleId = `${copy.id}-title`;

  return (
    <section id={copy.id} aria-labelledby={titleId} className={cn("relative border-t border-border py-24 sm:py-32", className)}>
      <Container>
        <Reveal className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-subtle-foreground">
              <span className="text-brand-text">{copy.index}</span>
              <span aria-hidden className="h-px w-8 bg-border-strong" />
              {copy.eyebrow}
            </p>
            <h2
              id={titleId}
              className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {copy.title}
            </h2>
            {copy.description ? (
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {copy.description}
              </p>
            ) : null}
          </div>
          {aside}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
