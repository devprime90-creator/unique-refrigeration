import LocationClient from "./LocationClient";
import { getAreaName } from "@/lib/constants";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// SEO UPDATE: Location wise AC Service & Repair keywords
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const areaName = getAreaName(params.slug);

  // Keywords ko variable mein rakh lete hain taaki clean dikhe
  const titleStr = `Best AC Service in ${areaName} | AC Repair & Gas Filling`;
  const descStr = `Get professional AC Service in ${areaName}, Bareilly. Unique Refrigeration offers deep jet cleaning, gas charging, and expert AC repair in ${areaName} within 60 mins. 90-day warranty guaranteed!`;

  return {
    title: titleStr,
    description: descStr,
    alternates: {
      canonical: `https://uniquerefrigerationservice.com/location/${params.slug}`,
    },
    // Search Engines (Google) ke liye keywords hints
    keywords: [
      `AC Service in ${areaName}`,
      `AC Repair ${areaName}`,
      `Air Conditioner service Bareilly`,
      `AC gas filling in ${areaName}`,
      `Best AC mechanic ${areaName}`
    ],
    openGraph: {
      title: `Expert AC Service in ${areaName}, Bareilly`,
      description: `Doorstep AC repair and service in ${areaName} by Unique Refrigeration.`,
      url: `https://uniquerefrigerationservice.com/location/${params.slug}`,
      images: [
        {
          url: '/images/ac-service-og.jpg', // Agar image hai toh uska path
          width: 1200,
          height: 630,
          alt: `AC Service in ${areaName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleStr,
      description: descStr,
    }
  };
}

export default function Page({ params }: Props) {
  return <LocationClient />;
}