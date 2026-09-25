import type { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
}

export interface SectionCopy {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  company: string;
  location: string;
  email: string;
  phone: { display: string; href: string };
  resume: { href: string; fileName: string };
  hero: {
    status: string;
    headline: string;
    headlineEmphasis: string;
    subtitle: string;
  };
  about: string[];
  education: Education;
  facts: Fact[];
  stats: Stat[];
  socials: SocialLink[];
}

export interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TagGroup {
  label: string;
  items: string[];
}

export interface Role {
  title: string;
  period: string;
  current?: boolean;
  /** Supports **bold** segments for inline emphasis. */
  highlights: string[];
  tagGroups?: TagGroup[];
}

export interface ExperienceEntry {
  company: string;
  period: string;
  summary: string;
  roles: Role[];
  stack: string[];
}

export type ProjectCategory = "E-commerce" | "ERP" | "Platforms";

export interface Project {
  name: string;
  category: ProjectCategory;
  region?: string;
  summary: string;
  highlights: string[];
  payment?: string;
  icon: LucideIcon;
}

export interface PaymentIntegration {
  gateway: string;
  type: string;
  client: string;
  project: string;
  market: string;
  marketCode: string;
  summary: string;
}

export interface FlowStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Recognition {
  client: string;
  title: string;
  description: string;
}

export interface Milestone {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Principle {
  title: string;
  description: string;
}

export interface Ride {
  name: string;
  detail: string;
  distanceKm: number;
}
