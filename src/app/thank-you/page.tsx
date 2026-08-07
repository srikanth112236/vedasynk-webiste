import { PageHero } from "@/components/sections/page-hero";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank you",
  description: "Thanks for contacting Vedasynk. We’ll respond shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ m?: string; dup?: string }>;
}) {
  const sp = await searchParams;
  const apiMessage = sp.m?.trim();
  const isDuplicate = sp.dup === "1";

  const description =
    apiMessage ||
    (isDuplicate
      ? "We already received your message. Our team will get back to you shortly."
      : `Someone from ${SITE.shortName} will follow up within one to two business days. If your request is urgent, WhatsApp us or call ${SITE.phoneDisplay}.`);

  return (
    <PageHero
      eyebrow={isDuplicate ? "Already received" : "Received"}
      title={
        isDuplicate
          ? "We’ve already got your message"
          : "Thanks—we’ve got your message"
      }
      description={description}
      primaryCta={{ label: "Back to home", href: "/" }}
      secondaryCta={{
        label: "WhatsApp",
        href: `https://wa.me/${SITE.whatsapp}`,
      }}
    />
  );
}
