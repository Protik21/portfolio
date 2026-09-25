import type { CSSProperties } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { GridBeams } from "@/components/shared/grid-beams";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

function GlanceCard() {
  return (
    <div
      className="animate-fade-up rounded-2xl border border-border bg-card/70 p-1.5 shadow-[0_30px_80px_-40px_rgb(0_0_0/0.55)]"
      style={delay(320)}
    >
      <div className="rounded-xl border border-border bg-background/70">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle-foreground">At a glance</h2>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-subtle-foreground">
            <MapPin className="size-3" aria-hidden />
            Howrah, IN
          </span>
        </div>
        <dl className="divide-y divide-border">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-4 px-5 py-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle-foreground">{fact.label}</dt>
              <dd className="text-sm text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function Hero() {
  const { hero, resume, stats } = profile;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <GridBeams />
        <div className="animate-glow absolute left-1/2 top-[-22rem] h-[34rem] w-[56rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
          <div>
            <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 py-1 pl-2.5 pr-3.5 text-[13px] text-muted-foreground">
              <span aria-hidden className="size-2 rounded-full bg-brand-text animate-pulse-dot" />
              {hero.status}
            </p>

            <h1
              id="hero-title"
              className="animate-fade-up mt-7 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-[4rem]"
              style={delay(80)}
            >
              {hero.headline} <span className="text-brand-text">{hero.headlineEmphasis}</span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
              style={delay(160)}
            >
              {hero.subtitle}
            </p>

            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3" style={delay(240)}>
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <a href={resume.href} download={resume.fileName}>
                  <Download className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <GlanceCard />
        </div>

        <dl
          className="animate-fade-up mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4"
          style={delay(400)}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end gap-2 bg-background p-5 sm:p-6">
              <dt className="text-sm leading-snug text-muted-foreground">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
