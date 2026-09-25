import { paymentIntegrations } from "@/data/payments";
import { projects } from "@/data/projects";
import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Protik Biswas",
  role: "Application Developer",
  company: "Indware Technologies Pvt. Ltd.",
  location: "Howrah, West Bengal, India",
  email: "protikb2003@gmail.com",
  phone: { display: "+91 89102 91178", href: "tel:+918910291178" },
  resume: {
    href: "/resume/Protik-Biswas-Resume.pdf",
    fileName: "Protik-Biswas-Resume.pdf",
  },
  hero: {
    status: "Application Developer at Indware Technologies",
    headline: "Building scalable web experiences with",
    headlineEmphasis: "React, Next.js & ERPNext.",
    subtitle:
      "Application Developer experienced in enterprise e-commerce, ERP solutions and payment gateway integrations.",
  },
  about: [
    "I'm an Application Developer at Indware Technologies, based in Howrah, India. I build production web applications with React, Next.js and TypeScript, and since November 2025 I've also worked as an ERPNext / Frappe developer on enterprise ERP implementations.",
    "Most of my work sits where the interface meets the business: responsive, fast user interfaces up front, with REST APIs and third-party services behind them. That includes GoKwik, Razorpay and Mollie payment integrations for clients in India and the Netherlands.",
    "I work directly with product owners and enterprise clients, which keeps me product-oriented: understand the requirement, ship a production-ready feature, and support it once it's live.",
  ],
  education: {
    degree: "Bachelor of Computer Application",
    institution: "Techno Main Salt Lake, Kolkata",
    year: "2024",
  },
  facts: [
    { label: "Role", value: "Application Developer" },
    { label: "Also", value: "ERPNext | Frappe Developer" },
    { label: "Company", value: "Indware Technologies" },
    { label: "Since", value: "June 2024" },
    { label: "Stack", value: "React · Next.js · TypeScript" },
    { label: "ERP", value: "ERPNext 16 · Frappe" },
    { label: "Payments", value: "GoKwik · Mollie · Razorpay" },
  ],
  stats: [
    { value: "2024", label: "Shipping production code since" },
    { value: String(projects.length), label: "Featured client projects" },
    { value: String(paymentIntegrations.length), label: "Payment gateways integrated" },
    { value: "2", label: "Countries — India & the Netherlands" },
  ],
  // Add profile links here (e.g. LinkedIn, GitHub) and they render in the contact section.
  socials: [],
};
