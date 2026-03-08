import ACRepairClient from "./ACRepairClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast AC Repair in Bareilly | Emergency Doorstep Fixing",
  description: "Get expert AC repair in Bareilly within 30 mins. We fix Split, Window, and Inverter ACs. Professional PCB repair, gas charging, and 90-day warranty. Call now!",
  keywords: [
    "AC repair Bareilly",
    "AC gas charging Bareilly",
    "PCB repair Bareilly",
    "Window AC repair Bareilly",
    "Split AC repair Bareilly",
    "Emergency AC fix Bareilly"
  ],
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/services/ac-repair-bareilly",
  },
};

export default function Page() {
  return <ACRepairClient />;
}