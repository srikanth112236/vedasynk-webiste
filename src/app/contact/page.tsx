import { CalendlyEmbed } from "@/components/forms/calendly-embed";
import { ContactForm } from "@/components/forms/contact-form";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Vedasynk Technologies—book a discovery call, send a project brief, or reach us on WhatsApp, phone, and email.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build"
        description="Share a short brief or book a discovery call. We typically respond within one to two business days with questions and a recommended next step."
        primaryCta={{ label: "Book a call", href: "#book" }}
        secondaryCta={{ label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp}` }}
      />

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              title="Reach us directly"
              description="Prefer a conversation over a form? Use any channel below."
            />
            <ul className="mt-8 space-y-5 text-sm">
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  Sales
                </p>
                <a
                  href={`mailto:${SITE.emailSales}`}
                  className="mt-1 block text-ink hover:text-accent"
                >
                  {SITE.emailSales}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  Phone
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-1 block text-ink hover:text-accent"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-ink hover:text-accent"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  Careers
                </p>
                <a
                  href={`mailto:${SITE.emailHr}`}
                  className="mt-1 block text-ink hover:text-accent"
                >
                  {SITE.emailHr}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  Location
                </p>
                <p className="mt-1 text-ink-secondary">{SITE.address}</p>
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading title="Project inquiry" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            title="Book a discovery call"
            description="Choose a 30-minute slot with Srikanth. We’ll clarify goals, constraints, and whether we’re a fit."
          />
          <div className="mt-10 rounded-xl border border-border bg-bg p-3 shadow-sm md:p-5">
            <CalendlyEmbed height={780} />
          </div>
        </div>
      </section>

      <FinalCta
        title="Prefer email?"
        description={`Write to ${SITE.emailSales} with your goal and timeline.`}
      />
    </>
  );
}
