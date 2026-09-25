import { profile } from "@/data/profile";

/** Set NEXT_PUBLIC_SITE_URL (e.g. https://protikbiswas.dev) to enable canonical, og:url and og:image tags. */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");

export const siteConfig = {
  url: siteUrl,
  name: profile.name,
  title: `${profile.name} — ${profile.role}`,
  description:
    "Protik Biswas is an Application Developer in Howrah, India, building web applications with React, Next.js and TypeScript, ERPNext / Frappe solutions, and GoKwik, Mollie and Razorpay payment integrations.",
  keywords: [
    "Protik Biswas",
    "Application Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "ERPNext Developer",
    "Frappe Developer",
    "Payment gateway integration",
    "Howrah",
    "Kolkata",
  ],
  locale: "en_IN",
  themeColor: "#09090b",
};
