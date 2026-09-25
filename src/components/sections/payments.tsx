import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { paymentFlow, paymentIntegrations } from "@/data/payments";
import { sections } from "@/data/sections";
import type { PaymentIntegration } from "@/types/portfolio";

function GatewayCard({ integration, number }: { integration: PaymentIntegration; number: number }) {
  return (
    <article className="group relative flex flex-col p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-8">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand-text transition-transform duration-500 group-hover:scale-x-100"
      />
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-subtle-foreground">{String(number).padStart(2, "0")}</span>
        <Badge variant="outline" className="font-mono tracking-wider" title={integration.market}>
          {integration.marketCode}
        </Badge>
      </div>

      <h3 className="mt-10 text-3xl font-semibold tracking-tight">{integration.gateway}</h3>
      <p className="mt-1.5 text-sm font-medium text-brand-text">{integration.type}</p>
      <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">{integration.summary}</p>

      <div className="mt-auto pt-6">
        <dl className="grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle-foreground">Client</dt>
            <dd className="mt-1 font-medium">{integration.client}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle-foreground">Market</dt>
            <dd className="mt-1 font-medium">{integration.market}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function PaymentFlow() {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-sm font-semibold">Where each integration sits</h3>
        <p className="text-sm text-muted-foreground">The order flow every gateway above plugs into.</p>
      </div>

      <div className="relative mt-8">
        {/* Connector: vertical on mobile, horizontal between step markers from `sm` up. */}
        <span aria-hidden className="absolute bottom-5 left-5 top-5 w-px bg-border sm:hidden" />
        <span
          aria-hidden
          className="absolute left-5 right-[calc(25%-2rem)] top-5 hidden h-px bg-border sm:block"
        >
          <span className="animate-flow absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-text shadow-[0_0_10px_2px_var(--brand-line)]" />
        </span>

        <ol className="relative grid gap-6 sm:grid-cols-4 sm:gap-4">
          {paymentFlow.map((step, i) => (
            <li key={step.title} className="flex gap-4 sm:flex-col">
              <span className="relative grid size-10 shrink-0 place-items-center rounded-full border border-border-strong bg-card text-brand-text">
                <step.icon className="size-4" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[11px] text-subtle-foreground">Step {i + 1}</p>
                <p className="mt-0.5 text-sm font-medium">{step.title}</p>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Payments() {
  return (
    <Section copy={sections.payments}>
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {paymentIntegrations.map((integration, i) => (
              <GatewayCard key={integration.gateway} integration={integration} number={i + 1} />
            ))}
          </div>
          <div className="border-t border-border bg-background/50 p-6 sm:p-8">
            <PaymentFlow />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
