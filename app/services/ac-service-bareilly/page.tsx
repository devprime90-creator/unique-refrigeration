import ACServiceClient from "./ACServiceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // ✅ 'absolute' title lagane se layout wala suffix bypass ho jayega
  title: {
    absolute: "Professional AC Service in Bareilly | Deep Jet Cleaning @ ₹299"
  },
  description: "Top-rated AC service in Bareilly. Expert jet cleaning, gas filling, and installation for all brands. Book now for 60-min doorstep arrival and 90-day warranty.",
  keywords: [
    "AC service in Bareilly", 
    "AC jet cleaning Bareilly", 
    "AC gas refill Bareilly", 
    "Split AC service Bareilly",
    "Window AC service Bareilly",
    "Unique Refrigeration Bareilly"
  ],
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/services/ac-service-bareilly",
  },
  // Social Media (OpenGraph) ke liye bhi add kar dete hain taaki share karne par sundar dikhe
  openGraph: {
    title: "Professional AC Service in Bareilly | Deep Jet Cleaning",
    description: "Expert AC jet cleaning at ₹299. 60-min arrival in Bareilly.",
    url: "https://uniquerefrigerationservice.com/services/ac-service-bareilly",
    siteName: "Unique Refrigeration",
    images: [{ url: "/images/ac-repair.png" }],
    type: "website",
  },
};

export default function Page() {
  return <ACServiceClient />;
}