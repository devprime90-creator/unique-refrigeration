import FridgeRepairClient from "./FridgeRepairClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheap Fridge Repair in Bareilly | Refrigerator Service @ ₹199",
  description: "Get affordable fridge repair in Bareilly. We fix LG, Samsung, Whirlpool & more. Expert gas filling and compressor repair at low cost with 90-day warranty.",
  keywords: [
    "Cheap fridge repair Bareilly",
    "Fridge repair service near me",
    "Refrigerator gas filling Bareilly",
    "Low cost fridge service Bareilly",
    "Double door fridge repair Bareilly"
  ],
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/services/fridge-repair-bareilly",
  },
};

export default function Page() {
  return <FridgeRepairClient />;
}