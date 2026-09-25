import type { NavItem, SectionCopy } from "@/types/portfolio";

export const sections = {
  about: {
    id: "about",
    index: "01",
    eyebrow: "About",
    title: "Product-minded, from the interface to the ERP.",
  },
  experience: {
    id: "experience",
    index: "02",
    eyebrow: "Experience",
    title: "Where I've been building.",
    description:
      "One company, two disciplines: web applications and ERP implementation, delivered for enterprise clients in India and the Netherlands.",
  },
  projects: {
    id: "projects",
    index: "03",
    eyebrow: "Projects",
    title: "Selected client work.",
    description:
      "Production systems across e-commerce, ERP and logistics, delivered as part of the team at Indware Technologies.",
  },
  payments: {
    id: "payments",
    index: "04",
    eyebrow: "Payments",
    title: "Payment integrations, live in production.",
    description:
      "Three payment providers integrated into client platforms in India and the Netherlands. This is the part of an application where a customer pays, so it's where getting things right matters most.",
  },
  skills: {
    id: "skills",
    index: "05",
    eyebrow: "Skills",
    title: "The toolkit.",
    description: "What I use day to day across frontend, ERP, backend and data.",
  },
  achievements: {
    id: "achievements",
    index: "06",
    eyebrow: "Recognition",
    title: "Recognition & milestones.",
    description: "Client recognition and the milestones my delivery work has added up to so far.",
  },
  philosophy: {
    id: "philosophy",
    index: "07",
    eyebrow: "Philosophy",
    title: "How I approach the work.",
  },
  cycling: {
    id: "cycling",
    index: "08",
    eyebrow: "Beyond the code",
    title: "Long rides, steady pace.",
  },
  contact: {
    id: "contact",
    index: "09",
    eyebrow: "Contact",
    title: "Let's build something reliable.",
    description:
      "Whether it's a web application, an ERPNext implementation or a payment integration, I'd be glad to hear about it.",
  },
} satisfies Record<string, SectionCopy>;

export const navItems: NavItem[] = [
  sections.about,
  sections.experience,
  sections.projects,
  sections.payments,
  sections.skills,
  sections.contact,
].map(({ id, eyebrow }) => ({ id, label: eyebrow }));
