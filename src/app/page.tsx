import { HeroSection } from "@/components/sections/hero";
import {
  TrustMarquee,
  ServicesPreview,
  SolutionsPreview,
  WhySection,
  SteyziFlagshipPreview,
  SteyziDepthPreview,
  IndustriesPreview,
  PortfolioPreview,
  TechPreview,
  FaqPreview,
  FinalCta,
} from "@/components/sections/home-sections";
import {
  StickyProcess,
  StickyDelivery,
  StickyEngage,
} from "@/components/sections/sticky-process";
import {
  ManifestoSection,
  AudienceSection,
  GrowthSignalsSection,
} from "@/components/sections/home-interactive";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { HOME_FAQS } from "@/content/home";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: `${SITE.name} | Custom Software, Brand & Digital Growth`,
  description:
    "Vedasynk Technologies is a Bangalore software and digital agency building custom websites, web apps, mobile apps, branding, SEO, and digital marketing for startups and growing businesses worldwide.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <HeroSection />
      <TrustMarquee />
      <ManifestoSection />
      <ServicesPreview />
      <AudienceSection />
      <SolutionsPreview />
      <WhySection />
      <SteyziFlagshipPreview />
      <SteyziDepthPreview />
      <StickyProcess />
      <StickyDelivery />
      <StickyEngage />
      <GrowthSignalsSection />
      <IndustriesPreview />
      <PortfolioPreview />
      <TechPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
