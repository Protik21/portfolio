import { BadgeCheck, CreditCard, PackageCheck, ShoppingCart } from "lucide-react";

import type { FlowStep, PaymentIntegration } from "@/types/portfolio";

export const paymentIntegrations: PaymentIntegration[] = [
  {
    gateway: "GoKwik",
    type: "Checkout solution",
    client: "Haldiram",
    project: "iLoveHaldiram",
    market: "India",
    marketCode: "IN",
    summary:
      "Implemented the GoKwik checkout solution on Haldiram's e-commerce platform, alongside the other third-party integrations delivered for the client.",
  },
  {
    gateway: "Mollie",
    type: "Payment gateway",
    client: "Sense of Lanka",
    project: "Sense of Lanka",
    market: "Netherlands",
    marketCode: "NL",
    summary:
      "Implemented Mollie payments for a Netherlands-based restaurant ordering platform that handles dine-in, takeaway and delivery orders.",
  },
  {
    gateway: "Razorpay",
    type: "Payment gateway",
    client: "Netaji Research Bureau",
    project: "NRB",
    market: "India",
    marketCode: "IN",
    summary:
      "Integrated the Razorpay payment gateway into the NRB platform, a public knowledge platform about Netaji Subhas Chandra Bose.",
  },
];

/** The order flow every integration above plugs into. */
export const paymentFlow: FlowStep[] = [
  {
    title: "Checkout",
    description: "The customer confirms their order in the application.",
    icon: ShoppingCart,
  },
  {
    title: "Gateway",
    description: "Payment is handed off to the provider to complete.",
    icon: CreditCard,
  },
  {
    title: "Confirmation",
    description: "The payment result comes back to the application.",
    icon: BadgeCheck,
  },
  {
    title: "Order",
    description: "The order is updated and the customer sees the outcome.",
    icon: PackageCheck,
  },
];
