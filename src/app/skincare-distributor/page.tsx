import { Metadata } from "next";
import DistributorHubClient from "@/components/distributor/DistributorHubClient";

export const metadata: Metadata = {
  title: "Skincare Distributor & Derma PCD Franchise Opportunities | Barekyne",
  description:
    "Explore exclusive Barekyne clinical skincare distributor and Derma PCD franchise opportunities across 15 high-growth Indian cities. Secure your monopoly territory.",
  alternates: { canonical: "https://barekyne.in/skincare-distributor" },
};

export default function SkincareDistributorHub() {
  return <DistributorHubClient />;
}
