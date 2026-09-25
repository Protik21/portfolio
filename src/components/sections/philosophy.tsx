import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { principles } from "@/data/philosophy";
import { sections } from "@/data/sections";

export function Philosophy() {
  return (
    <Section copy={sections.philosophy}>
      <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {principles.map((principle, i) => (
          <li key={principle.title} className="bg-background">
            <Reveal delay={i * 80} className="h-full p-6 sm:p-8">
              <span className="font-mono text-sm text-brand-text">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{principle.title}</h3>
              <p className="mt-3 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
