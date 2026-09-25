import type { ExperienceEntry } from "@/types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    company: "Indware Technologies Pvt. Ltd.",
    period: "Jun 2024 – Present",
    summary:
      "Building web applications and ERP systems for enterprise clients across e-commerce, manufacturing and logistics.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "ERPNext",
      "Frappe",
      "REST APIs",
    ],
    roles: [
      {
        title: "ERPNext | Frappe Developer",
        period: "Nov 2025 – Present",
        current: true,
        highlights: [
          "Customized and implemented ERPNext modules including Sales, Purchase, Inventory, Manufacturing and Accounting.",
          "Developed custom DocTypes, Workflows, Reports, Print Formats and Server Scripts using the Frappe Framework.",
          "Configured client-specific ERP workflows and resolved production issues during implementation.",
          "Provided technical consultation and post-deployment support for enterprise ERP clients, including manufacturing and logistics organizations.",
        ],
        tagGroups: [
          {
            label: "Modules",
            items: ["Sales", "Purchase", "Inventory", "Manufacturing", "Accounting"],
          },
        ],
      },
      {
        title: "Application Developer",
        period: "2024 – 2026",
        highlights: [
          "Developed and maintained production web applications using React.js, Next.js, TypeScript and JavaScript.",
          "Built responsive, high-performance user interfaces and integrated RESTful APIs for enterprise applications.",
          "Implemented the **GoKwik** checkout solution for Haldiram's e-commerce platform.",
          "Integrated the **Razorpay** payment gateway for Netaji Research Bureau (NRB).",
          "Implemented the **Mollie** payment gateway for Sense of Lanka, a Netherlands-based restaurant e-commerce platform.",
          "Integrated third-party libraries and optimized application performance across multiple client projects.",
          "Collaborated directly with product owners and enterprise clients to gather requirements and deliver production-ready features.",
        ],
      },
    ],
  },
];
