import { SteyziPageContent } from "@/components/sections/steyzi-page";
import { STEYZI } from "@/content/steyzi";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Steyzi | Vedasynk Flagship PG & Hostel Management SaaS",
  description: `${STEYZI.description} Explore how ${SITE.name} planned, designed, and is growing Steyzi for PG owners, hostels, students, and future vendor collaborations across Indian cities.`,
  path: "/steyzi",
});

export default function SteyziPage() {
  return <SteyziPageContent />;
}
