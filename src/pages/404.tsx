import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteLayout } from "@/components/layout/site-layout";
import { Container } from "@/components/shared/container";
import { Seo } from "@/components/shared/seo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function NotFoundPage() {
  return (
    <>
      <Seo title={`Page not found — ${siteConfig.name}`} path="/404" noindex />
      <SiteLayout>
        <section className="relative isolate flex min-h-[80dvh] items-center overflow-hidden pt-16">
          <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
          <Container>
            <p className="font-mono text-sm text-brand-text">404</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">This page doesn&apos;t exist.</h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              The link may be broken, or the page may have moved. Everything lives on the home page.
            </p>
            <Button asChild size="lg" className="group mt-8">
              <Link href="/">
                <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden />
                Back to home
              </Link>
            </Button>
          </Container>
        </section>
      </SiteLayout>
    </>
  );
}
