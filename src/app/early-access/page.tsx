import { Metadata } from "next";
import EarlyAccessClient from "@/components/early-access/EarlyAccessClient";

export const metadata: Metadata = {
  title: "Early Access: Secure Your Regional Monopoly | Barekyne",
  description:
    "Barekyne is introducing India's most advanced clinical skincare ecosystem. We are currently allocating exclusive district-level PCD franchise rights.",
  alternates: { canonical: "/early-access" },
};

export default function EarlyAccessPage() {
  return <EarlyAccessClient />;
}
