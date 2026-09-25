import { useState } from "react";
import { CreditCard } from "lucide-react";

import { IconTile } from "@/components/shared/icon-tile";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { projectCategories, projects } from "@/data/projects";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types/portfolio";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

const countFor = (filter: Filter) =>
  filter === "All" ? projects.length : projects.filter((p) => p.category === filter).length;

function ProjectCard({ project, number }: { project: Project; number: number }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_20px_40px_-28px_rgb(0_0_0/0.55)]">
      <div className="flex items-start justify-between">
        <IconTile icon={project.icon} className="group-hover:border-brand-line group-hover:bg-brand-soft" />
        <span className="font-mono text-xs text-subtle-foreground">{String(number).padStart(2, "0")}</span>
      </div>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle-foreground">
        {project.category}
        {project.region ? ` · ${project.region}` : null}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.name} highlights`}>
        {project.highlights.map((highlight) => (
          <li key={highlight}>
            <Badge variant="outline" className="font-normal">
              {highlight}
            </Badge>
          </li>
        ))}
      </ul>

      {project.payment ? (
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t border-border pt-4 text-xs">
            <span className="text-subtle-foreground">Payments</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-brand-text">
              <CreditCard className="size-3.5" aria-hidden />
              {project.payment}
            </span>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const filterBar = (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex max-w-full shrink-0 self-start overflow-x-auto rounded-lg border border-border bg-card p-1 lg:self-auto"
    >
      {filters.map((option) => {
        const active = option === filter;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => setFilter(option)}
            className={cn(
              "flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors duration-200",
              active ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option}
            <span className="font-mono text-[11px] text-subtle-foreground">{countFor(option)}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <Section copy={sections.projects} aside={filterBar}>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {filter === "All" ? "" : filter} projects
      </p>
      <Reveal>
        <ul key={filter} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((project, i) => (
            <li key={project.name} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <ProjectCard project={project} number={projects.indexOf(project) + 1} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
