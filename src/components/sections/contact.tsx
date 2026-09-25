import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Download, Link2, Mail, MapPin, Phone } from "lucide-react";

import { CopyEmailButton } from "@/components/shared/copy-button";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { sections } from "@/data/sections";

interface ContactRow {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

const contactRows: ContactRow[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone.display, href: profile.phone.href, icon: Phone },
  { label: "Location", value: profile.location, icon: MapPin },
  ...profile.socials.map((social) => ({
    label: social.label,
    value: social.href.replace(/^https?:\/\/(www\.)?/, ""),
    href: social.href,
    icon: Link2,
  })),
];

export function Contact() {
  return (
    <Section copy={sections.contact}>
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-2xl border border-border bg-card">
          <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:p-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start with an email.</h3>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Share a little about what you&apos;re building and where you need help. The more context, the
                better.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="group">
                  <a href={`mailto:${profile.email}`}>
                    <Mail aria-hidden />
                    Email me
                    <ArrowUpRight
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                </Button>
                <CopyEmailButton email={profile.email} />
                <Button asChild size="lg" variant="ghost">
                  <a href={profile.resume.href} download={profile.resume.fileName}>
                    <Download aria-hidden />
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            <dl className="divide-y divide-border self-center rounded-xl border border-border bg-background/70">
              {contactRows.map((row) => (
                <div key={row.label} className="flex items-center gap-4 px-5 py-4">
                  <row.icon className="size-4 shrink-0 text-brand-text" strokeWidth={1.75} aria-hidden />
                  <div className="min-w-0">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-0.5 truncate text-sm">
                      {row.href ? (
                        <a
                          href={row.href}
                          className="rounded-sm underline decoration-border-strong underline-offset-4 transition-colors hover:text-brand-text hover:decoration-brand-line"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
