import { Database, Layers, MonitorSmartphone, Wrench } from "lucide-react";

import type { SkillGroup, TagGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      "React",
      "Next.js (App & Pages Router)",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
    ],
  },
  {
    title: "ERP & Backend",
    icon: Layers,
    skills: ["ERPNext 16", "Frappe Framework", "REST APIs", "PHP", "Python"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Oracle"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Bitbucket"],
  },
];

export const erpDepth: TagGroup[] = [
  {
    label: "ERPNext modules",
    items: ["Sales", "Purchase", "Inventory", "Manufacturing", "Accounting"],
  },
  {
    label: "Frappe customization",
    items: ["DocTypes", "Workflows", "Reports", "Print Formats", "Server Scripts"],
  },
];
