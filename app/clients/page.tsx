import ClientsClient from "./ClientsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Trusted Clients & Partners", // Browser: Our Trusted Clients & Partners | AC Service Bareilly
  description: "Join 5,000+ satisfied customers in Bareilly. We are the official repair partners for Sagar Ratna, Phoenix Mall, Clara Hospital, and thousands of homes.",
  keywords: [
    "AC repair for restaurants Bareilly",
    "Commercial AC service Bareilly",
    "Phoenix Mall Bareilly AC service",
    "Corporate repair maintenance Bareilly"
  ],
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/clients",
  },
};

export default function Page() {
  return <ClientsClient />;
}