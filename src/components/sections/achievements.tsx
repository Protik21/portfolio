import { Award } from "lucide-react";

import { IconTile } from "@/components/shared/icon-tile";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { milestones, recognitions } from "@/data/achievements";
import { sections } from "@/data/sections";

export function Achievements() {
  return (
    <Section copy={sections.achievements}>
      <ul className="grid gap-4 lg:grid-cols-2">
        {recognitions.map((recognition, i) => (
          <li key={recognition.client}>
            <Reveal delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-brand-line sm:p-8">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-text">
                  <Award className="size-4" aria-hidden />
                  Client recognition
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{recognition.title}</h3>
                <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted-foreground">
                  {recognition.description}
                </p>
                <div className="mt-auto pt-6">
                  <p className="border-t border-border pt-4 text-sm text-subtle-foreground">{recognition.client}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, i) => (
          <li key={milestone.title}>
            <Reveal delay={i * 70} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-5">
                <IconTile icon={milestone.icon} />
                <h3 className="mt-5 text-[15px] font-semibold tracking-tight">{milestone.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
