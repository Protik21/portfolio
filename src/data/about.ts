import { Blocks, Code2, Handshake, Plug } from "lucide-react";

import type { FocusArea } from "@/types/portfolio";

export const focusAreas: FocusArea[] = [
  {
    title: "Frontend engineering",
    description:
      "React, Next.js (App & Pages Router) and TypeScript, with responsive, high-performance interfaces.",
    icon: Code2,
  },
  {
    title: "ERP implementation",
    description:
      "ERPNext 16 and Frappe: custom DocTypes, workflows, reports, print formats and server scripts.",
    icon: Blocks,
  },
  {
    title: "Integrations",
    description:
      "RESTful APIs, payment gateways and third-party libraries wired into production applications.",
    icon: Plug,
  },
  {
    title: "Client delivery",
    description:
      "Requirements gathered with product owners, followed through to production and post-deployment support.",
    icon: Handshake,
  },
];
