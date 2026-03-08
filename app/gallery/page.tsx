import GalleryClient from "./GalleryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Gallery", // Template ki wajah se ye "Service Gallery | AC Service Bareilly" dikhega
  description: "Checkout our AC and Fridge repair work portfolio in Bareilly. Real photos of our expert services at customer locations.",
};

export default function Page() {
  return <GalleryClient />;
}