import { AboutPageContent } from "@/components/sections/about-page";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Vedasynk Technologies | Bangalore Software & Digital Studio",
  description: `About ${SITE.name}—Bangalore software development company and digital agency founded in ${SITE.foundedYear}. Custom web apps, MVP development, branding, UI/UX, SEO, and growth for startups and SMEs across India and globally.`,
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
