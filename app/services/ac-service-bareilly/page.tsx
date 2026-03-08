import ACServiceClient from "./ACServiceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional AC Service in Bareilly | Deep Jet Cleaning @ ₹299",
  description: "Top-rated AC service in Bareilly. Expert jet cleaning, gas filling, and installation for all brands. Book now for 60-min doorstep arrival and 90-day warranty.",
  keywords: [
    "AC service in Bareilly", 
    "AC jet cleaning Bareilly", 
    "AC gas refill Bareilly", 
    "Split AC service Bareilly",
    "Window AC service Bareilly"
  ],
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/services/ac-service-bareilly",
  },
};

export default function Page() {
  return <ACServiceClient />;
}