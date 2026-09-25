import { Check } from "lucide-react";

import { IconTile } from "@/components/shared/icon-tile";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { sections } from "@/data/sections";
import { erpDepth, skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section copy={sections.skills}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <li key={group.title}>
            <Reveal delay={i * 70} className="h-full">
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-strong">
                <div className="flex items-center gap-3">
                  <IconTile icon={group.icon} className="group-hover:border-brand-line group-hover:bg-brand-soft" />
                  <h3 className="text-[15px] font-semibold tracking-tight">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge className="px-2.5 py-1 text-[13px] font-normal text-foreground/85">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-4">
        <div className="grid gap-8 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div>
            <Badge variant="brand">ERPNext 16 · Frappe</Badge>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">Hands-on ERP depth.</h3>
            <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              Module customization and framework-level development on live implementations for enterprise
              clients, including manufacturing and logistics organizations.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {erpDepth.map((group) => (
              <div key={group.label}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle-foreground">
                  {group.label}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <Check className="size-3.5 text-brand-text" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
