import { ArrowUp } from "lucide-react";

import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { profile } from "@/data/profile";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="size-7 text-[10px]" />
          <p className="text-sm text-muted-foreground">
            © <span suppressHydrationWarning>{year}</span> {profile.name}. Built with Next.js, TypeScript &amp;
            Tailwind CSS.
          </p>
        </div>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 self-start rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
        >
          Back to top
          <ArrowUp
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </a>
      </Container>
    </footer>
  );
}
