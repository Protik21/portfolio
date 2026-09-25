import { GraduationCap } from "lucide-react";

import { IconTile } from "@/components/shared/icon-tile";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { focusAreas } from "@/data/about";
import { profile } from "@/data/profile";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";

export function About() {
  const { about, education } = profile;

  return (
    <Section copy={sections.about}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="space-y-5">
            {about.map((paragraph, i) => (
              <p
                key={i}
                className={cn(
                  "text-pretty leading-relaxed",
                  i === 0 ? "text-xl text-foreground" : "text-base text-muted-foreground sm:text-[17px]",
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
            <IconTile icon={GraduationCap} />
            <div>
              <p className="text-sm font-medium">{education.degree}</p>
              <p className="text-sm text-muted-foreground">
                {education.institution} · {education.year}
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area, i) => (
            <li key={area.title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="group h-full rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-border-strong">
                  <IconTile icon={area.icon} className="group-hover:border-brand-line group-hover:bg-brand-soft" />
                  <h3 className="mt-5 text-[15px] font-semibold tracking-tight">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
