import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us", // Isse browser mein "Contact Us | AC Service Bareilly" dikhega
  description: "Need AC or Fridge repair in Bareilly? Contact Unique Refrigeration for 24/7 emergency services. Visit our workshop in Civil Lines or call us now.",
  alternates: {
    canonical: "https://uniquerefrigerationservice.com/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}