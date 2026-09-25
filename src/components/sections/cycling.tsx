import type { CSSProperties } from "react";
import { Bike } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { cyclingIntro, otherInterests, rides } from "@/data/cycling";
import { sections } from "@/data/sections";
import { useInView } from "@/hooks/use-in-view";

const longest = Math.max(...rides.map((ride) => ride.distanceKm));
const scaleMax = Math.ceil(longest / 20) * 20;

/** Single-series horizontal bars; every value is labelled at the bar tip, so no axis is needed. */
function RideChart() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.3 });

  return (
    <figure
      ref={ref}
      data-chart=""
      data-visible={inView ? "" : undefined}
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <figcaption className="flex items-center justify-between">
        <span className="text-sm font-medium">Distance per ride</span>
        <span className="font-mono text-xs text-subtle-foreground">km</span>
      </figcaption>

      <ol className="mt-8 space-y-6">
        {rides.map((ride, i) => (
          <li key={`${ride.name}-${ride.detail}`}>
            <p className="text-sm">
              <span className="font-medium text-foreground">{ride.name}</span>
              <span className="text-muted-foreground"> · {ride.detail}</span>
            </p>
            <div className="mt-2.5 flex items-center gap-3">
              <span
                aria-hidden
                data-bar=""
                className="h-2 shrink-0 rounded-r-[4px] bg-brand"
                style={
                  {
                    width: `calc((100% - 4rem) * ${ride.distanceKm / scaleMax})`,
                    "--bar-delay": `${i * 110}ms`,
                  } as CSSProperties
                }
              />
              <span className="text-sm font-medium">
                {ride.distanceKm}
                <span className="sr-only"> kilometres</span>
                <span aria-hidden className="ml-0.5 text-muted-foreground">
                  km
                </span>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function Cycling() {
  return (
    <Section copy={sections.cycling}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{cyclingIntro}</p>

          <div className="mt-10 flex items-end gap-5">
            <span
              aria-hidden
              className="grid size-12 place-items-center rounded-xl border border-brand-line bg-brand-soft text-brand-text"
            >
              <Bike className="size-5" strokeWidth={1.75} />
            </span>
            <p className="flex flex-col-reverse">
              <span className="text-sm text-muted-foreground">Longest single ride</span>
              <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                {longest}
                <span className="ml-1.5 text-xl font-medium text-muted-foreground sm:text-2xl">km</span>
              </span>
            </p>
          </div>

          <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Also into </span>
            {otherInterests.join(" · ").toLowerCase()}.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <RideChart />
        </Reveal>
      </div>
    </Section>
  );
}
