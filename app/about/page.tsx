import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Unique Refrigeration | 14+ Years in Bareilly",
  description: "Since 2010, Unique Refrigeration has been the most trusted AC and Fridge repair expert in Bareilly. Learn about our 14-year journey and 10,000+ happy customers.",
  keywords: [
    "Best AC mechanic in Bareilly",
    "Trusted fridge repair Bareilly",
    "Unique Refrigeration story",
    "Oldest AC service shop Bareilly"
  ],
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/about",
  },
};

export default function Page() {
  return <AboutClient />;
}