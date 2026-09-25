import Head from "next/head";

import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { skillGroups } from "@/data/skills";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Howrah",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: profile.company },
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.institution },
  knowsAbout: skillGroups.flatMap((group) => group.skills),
  ...(siteConfig.url ? { url: siteConfig.url } : {}),
  ...(profile.socials.length ? { sameAs: profile.socials.map((s) => s.href) } : {}),
};

export function Seo({
  title = siteConfig.title,
  description = siteConfig.description,
  path = "/",
  noindex = false,
}: SeoProps) {
  const url = siteConfig.url ? `${siteConfig.url}${path}` : undefined;
  const image = siteConfig.url ? `${siteConfig.url}/api/og` : undefined;

  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta key="author" name="author" content={siteConfig.name} />
      <meta key="robots" name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      {url ? <link key="canonical" rel="canonical" href={url} /> : null}

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={siteConfig.name} />
      <meta key="og:locale" property="og:locale" content={siteConfig.locale} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      {url ? <meta key="og:url" property="og:url" content={url} /> : null}
      {image ? <meta key="og:image" property="og:image" content={image} /> : null}
      {image ? <meta key="og:image:width" property="og:image:width" content="1200" /> : null}
      {image ? <meta key="og:image:height" property="og:image:height" content="630" /> : null}
      {image ? <meta key="og:image:alt" property="og:image:alt" content={siteConfig.title} /> : null}

      <meta key="twitter:card" name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      {image ? <meta key="twitter:image" name="twitter:image" content={image} /> : null}

      {noindex ? null : (
        <script
          key="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      )}
    </Head>
  );
}
