import type { NextApiRequest, NextApiResponse } from "next";
import { ImageResponse } from "next/og";

import { paymentIntegrations } from "@/data/payments";
import { profile } from "@/data/profile";

/** 1200×630 Open Graph card, referenced from <Seo /> when NEXT_PUBLIC_SITE_URL is set. */
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#09090b",
          color: "#ededef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#1f7a5c",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            PB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 600 }}>{profile.name}</div>
            <div style={{ fontSize: 22, color: "#a1a1aa" }}>{`${profile.role} · ${profile.location}`}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            {profile.hero.headline}
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, color: "#5cc49c" }}>
            {profile.hero.headlineEmphasis}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {paymentIntegrations.map((integration) => (
            <div
              key={integration.gateway}
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: 22,
                color: "#d4d4d8",
              }}
            >
              {integration.gateway}
            </div>
          ))}
          <div style={{ display: "flex", padding: "10px 18px", fontSize: 22, color: "#8b8b94" }}>
            ERPNext · Frappe
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400");
  res.send(Buffer.from(await image.arrayBuffer()));
}
