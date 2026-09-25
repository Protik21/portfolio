import { Blocks, CreditCard, Globe2, ShoppingBag } from "lucide-react";

import type { Milestone, Recognition } from "@/types/portfolio";

export const recognitions: Recognition[] = [
  {
    client: "Haldiram",
    title: "Appreciated by Haldiram",
    description:
      "Recognized by the client for handling complex third-party integrations and implementation support on their e-commerce platform.",
  },
  {
    client: "Macrotech Equipment Pvt. Ltd.",
    title: "Public recognition from Macrotech",
    description:
      "Received public client recognition from Macrotech Equipment Pvt. Ltd. for ERP implementation and technical support.",
  },
];

export const milestones: Milestone[] = [
  {
    title: "Enterprise e-commerce",
    description: "Delivered enterprise e-commerce solutions for Haldiram, including the GoKwik checkout integration.",
    icon: ShoppingBag,
  },
  {
    title: "Three payment gateways",
    description: "Implemented Mollie, Razorpay and GoKwik across international and Indian platforms.",
    icon: CreditCard,
  },
  {
    title: "International delivery",
    description: "Contributed to Netherlands-based e-commerce platforms serving restaurant and grocery businesses.",
    icon: Globe2,
  },
  {
    title: "ERP implementations",
    description:
      "ERPNext implementation and support for enterprise clients, including manufacturing and logistics organizations.",
    icon: Blocks,
  },
];
