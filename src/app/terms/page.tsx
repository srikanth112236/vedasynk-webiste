import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${SITE.name} website and related communications.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Last updated: August 2026. By using ${SITE.url}, you agree to these terms.`}
        primaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-10 text-ink-secondary">
          <div>
            <h2 className="text-xl font-semibold text-ink">Website use</h2>
            <p className="mt-3 leading-relaxed">
              Content on this site is for general information about{" "}
              {SITE.shortName} and our services. It does not create a client
              relationship. Project work is governed by a separate written
              agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Intellectual property</h2>
            <p className="mt-3 leading-relaxed">
              Unless otherwise noted, site content, branding, and materials are
              owned by {SITE.name} or our licensors. You may not copy or reuse
              them without permission, except for reasonable personal reference.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">No warranties</h2>
            <p className="mt-3 leading-relaxed">
              The site is provided “as is.” We do not warrant that it will be
              uninterrupted or error-free. Case studies and examples describe past
              work and are not guarantees of future results.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              To the fullest extent permitted by law, {SITE.shortName} is not
              liable for indirect or consequential damages arising from your use
              of this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Third-party links</h2>
            <p className="mt-3 leading-relaxed">
              Links to external sites (including scheduling or messaging tools)
              are provided for convenience. We are not responsible for their
              content or privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Governing law</h2>
            <p className="mt-3 leading-relaxed">
              These terms are governed by the laws of India. Disputes will be
              subject to the courts of {SITE.city}, {SITE.region}, unless a
              client agreement specifies otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about these terms:{" "}
              <a href={`mailto:${SITE.emailSales}`} className="text-accent hover:underline">
                {SITE.emailSales}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
