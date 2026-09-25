import { SiteLayout } from "@/components/layout/site-layout";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Cycling } from "@/components/sections/cycling";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Payments } from "@/components/sections/payments";
import { Philosophy } from "@/components/sections/philosophy";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Seo } from "@/components/shared/seo";

export default function HomePage() {
  return (
    <>
      <Seo />
      <SiteLayout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Payments />
        <Skills />
        <Achievements />
        <Philosophy />
        <Cycling />
        <Contact />
      </SiteLayout>
    </>
  );
}
