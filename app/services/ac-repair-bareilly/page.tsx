import ACRepairClient from "./ACRepairClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Hum 'absolute' title use karenge taaki Google layout wala title piche na chipkaye
  // Isse Google Search me exact yahi title dikhega
  title: {
    absolute: "AC Repair & Gas Charging in Bareilly | Unique Refrigeration"
  },
  description: "Get expert AC repair in Bareilly within 30 mins. We fix Split, Window, and Inverter ACs. Professional PCB repair, gas charging, and 90-day warranty. Call now!",
  keywords: [
    "AC repair Bareilly",
    "AC gas charging Bareilly",
    "PCB repair Bareilly",
    "Window AC repair Bareilly",
    "Split AC repair Bareilly",
    "Emergency AC fix Bareilly",
    "Unique Refrigeration Bareilly"
  ],
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/services/ac-repair-bareilly",
  },
  // OpenGraph tags (Social Media sharing ke liye best hain)
  openGraph: {
    title: "AC Repair & Gas Charging in Bareilly | Unique Refrigeration",
    description: "Expert doorstep AC service in 30 minutes.",
    url: "https://uniquerefrigerationservice.com/services/ac-repair-bareilly",
    siteName: "Unique Refrigeration",
    images: [
      {
        url: "/images/ac-repair.png", // Aapka main image path
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <ACRepairClient />;
}