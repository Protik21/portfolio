import { Building2 } from "lucide-react";

import { IconTile } from "@/components/shared/icon-tile";
import { Reveal } from "@/components/shared/reveal";
import { RichText } from "@/components/shared/rich-text";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";
import type { Role } from "@/types/portfolio";

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-strong sm:p-7">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h4 className="text-lg font-semibold tracking-tight">{role.title}</h4>
        <div className="flex items-center gap-2.5">
          {role.current ? <Badge variant="brand">Current</Badge> : null}
          <span className="font-mono text-xs text-subtle-foreground">{role.period}</span>
        </div>
      </header>

      <ul className="mt-5 space-y-3">
        {role.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
            <span aria-hidden className="mt-[0.7rem] size-1 shrink-0 rounded-full bg-brand-text" />
            <span>
              <RichText text={highlight} />
            </span>
          </li>
        ))}
      </ul>

      {role.tagGroups?.map((group) => (
        <div key={group.label} className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-5">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle-foreground">
            {group.label}
          </span>
          {group.items.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      ))}
    </article>
  );
}

export function Experience() {
  return (
    <Section copy={sections.experience}>
      {experience.map((entry) => (
        <div key={entry.company} className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <IconTile icon={Building2} className="size-12" />
              <div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{entry.company}</h3>
                <p className="mt-0.5 font-mono text-xs text-subtle-foreground">{entry.period}</p>
              </div>
            </div>
            <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
              {entry.stack.map((tech) => (
                <li key={tech}>
                  <Badge variant="outline">{tech}</Badge>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="relative">
            <span aria-hidden className="absolute bottom-6 left-[7px] top-8 w-px bg-border" />
            <ol className="space-y-6">
              {entry.roles.map((role, i) => (
                <li key={role.title} className="relative pl-9">
                  <span
                    aria-hidden
                    className="absolute left-0 top-8 grid size-[15px] place-items-center rounded-full border border-border-strong bg-background"
                  >
                    <span
                      className={cn(
                        "size-[7px] rounded-full",
                        role.current ? "bg-brand-text animate-pulse-dot" : "bg-subtle-foreground/60",
                      )}
                    />
                  </span>
                  <Reveal delay={i * 100}>
                    <RoleCard role={role} />
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </Section>
  );
}
