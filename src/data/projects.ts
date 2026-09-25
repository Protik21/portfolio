import {
  Factory,
  Landmark,
  Lightbulb,
  ShoppingBag,
  ShoppingCart,
  Truck,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

import type { Project, ProjectCategory } from "@/types/portfolio";

export const projectCategories: ProjectCategory[] = ["E-commerce", "ERP", "Platforms"];

export const projects: Project[] = [
  {
    name: "iLoveHaldiram",
    category: "E-commerce",
    region: "India",
    summary: "E-commerce platform for the renowned Haldiram brand.",
    highlights: ["GoKwik checkout", "Third-party integrations", "Implementation support"],
    payment: "GoKwik",
    icon: ShoppingBag,
  },
  {
    name: "Sense of Lanka",
    category: "E-commerce",
    region: "Netherlands",
    summary:
      "Restaurant e-commerce web application where customers order food for dine-in, takeaway or delivery, with complete order and delivery management.",
    highlights: ["Dine-in · Takeaway · Delivery", "Order management", "Delivery management"],
    payment: "Mollie",
    icon: UtensilsCrossed,
  },
  {
    name: "NRB",
    category: "Platforms",
    region: "India",
    summary:
      "A dedicated platform for public knowledge about Netaji Subhas Chandra Bose, built for the Netaji Research Bureau.",
    highlights: ["Public knowledge platform", "Online payments"],
    payment: "Razorpay",
    icon: Landmark,
  },
  {
    name: "Aonemart",
    category: "E-commerce",
    summary:
      "Grocery e-commerce web application with delivery management, covering order placement, tracking and admin control.",
    highlights: ["Order tracking", "Offers & coupons", "Wallet system", "Admin control"],
    icon: ShoppingCart,
  },
  {
    name: "Jayesh TMS",
    category: "Platforms",
    summary:
      "A logistics management system: a complete solution for logistics and tracking in the transport industry.",
    highlights: ["Logistics management", "Tracking", "Transport industry"],
    icon: Truck,
  },
  {
    name: "Macrotech ERP",
    category: "ERP",
    summary:
      "ERPNext-based ERP system for Macrotech Equipment Pvt. Ltd., developed to streamline core business operations.",
    highlights: ["ERPNext", "Implementation & support", "Client recognition"],
    icon: Warehouse,
  },
  {
    name: "Rashmi LED",
    category: "ERP",
    summary:
      "ERP system for an LED manufacturing and selling company, supporting its production and sales operations.",
    highlights: ["Production", "Sales"],
    icon: Lightbulb,
  },
  {
    name: "Manaksia Steel",
    category: "ERP",
    region: "India · Nigeria · Overseas",
    summary:
      "ERP system for a steel manufacturer and seller with operations across India, Nigeria and overseas markets.",
    highlights: ["Manufacturing", "Sales", "Multi-country operations"],
    icon: Factory,
  },
];
