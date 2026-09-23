import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects personal information, including data received through Meta Lead Ads integrations.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: September 23, 2026. This policy explains how Vedasynk handles information when you use our website, contact us, or use CRM integrations including Meta Lead Ads."
        primaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-10 text-ink-secondary">
          <div>
            <h2 className="text-xl font-semibold text-ink">Who we are</h2>
            <p className="mt-3 leading-relaxed">
              {SITE.name} (“Vedasynk”, “we”, “us”) operates {SITE.url}. We are
              based in {SITE.address}. For privacy questions, email{" "}
              <a href={`mailto:${SITE.emailSales}`} className="text-accent hover:underline">
                {SITE.emailSales}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Scope of this policy</h2>
            <p className="mt-3 leading-relaxed">
              This policy covers information we process when you visit our
              website or contact us, and information our CRM software receives
              through customer-authorized third-party integrations, including
              Meta/Facebook Lead Ads. Where a customer connects their own Meta
              business assets to our CRM, that customer controls their lead
              data and we process it on their behalf to operate the
              integration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
            <p className="mt-3 leading-relaxed">
              When you submit a contact form or email us, we collect the details
              you provide—such as name, email, company, phone, and message
              content. We may also collect basic technical data such as IP
              address, browser type, and pages visited through standard analytics
              tools.
            </p>
            <p className="mt-3 leading-relaxed">
              When a customer authorizes a Meta integration, we also receive the
              Meta Platform Data described in the “Meta Platform &amp; Facebook
              Lead Ads Data” section below, limited to what is necessary to
              operate that integration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">How we use information</h2>
            <p className="mt-3 leading-relaxed">
              We use inquiry data to respond to your request, prepare proposals,
              and improve our services. Analytics help us understand which
              content is useful. We do not sell personal information.
            </p>
            <p className="mt-3 leading-relaxed">
              Meta Platform Data is used only to provide and operate the
              customer-authorized CRM integration—such as connecting Meta
              assets, retrieving leads, preventing duplicates, and displaying
              leads to authorized users of that customer account. It is not
              used for unrelated purposes.
            </p>
          </div>

          <div id="meta-lead-ads" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-ink">
              Meta Platform &amp; Facebook Lead Ads Data
            </h2>
            <p className="mt-3 leading-relaxed">
              Our CRM software may allow authorized customers to connect their
              Meta/Facebook business assets—including Facebook Pages,
              advertising accounts, Lead Forms, and Meta Lead Ads—to import and
              manage leads. This section explains what Meta data we receive,
              how we process it, and how to request deletion.
            </p>

            <h3 className="mt-6 text-base font-semibold text-ink">
              1. Data we may receive
            </h3>
            <p className="mt-2 leading-relaxed">
              When a customer connects their Meta account and authorizes our
              application, we may receive only the information made available
              through Meta&apos;s APIs for the approved permissions and
              features, such as:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
              <li>Facebook Page, ad account, Lead Form, and campaign identifiers and metadata</li>
              <li>Lead information submitted through Meta Lead Forms, such as name, phone number, email address, and other form fields the lead provided</li>
              <li>Meta lead identifiers and lead creation/submission timestamps</li>
              <li>Information needed to identify the source of a lead</li>
              <li>Access tokens and credentials required to operate the authorized integration</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              We request and process only information necessary for the CRM
              functionality the customer authorized.
            </p>

            <h3 className="mt-6 text-base font-semibold text-ink">
              2. How we use Meta data
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed">
              <li>Connecting a customer&apos;s Meta Page or advertising assets to the CRM</li>
              <li>Receiving Meta Lead Ads webhook notifications and retrieving leads from Meta Lead Forms</li>
              <li>Validating, normalizing, and de-duplicating leads, then associating them with the correct customer/company and branch account</li>
              <li>Displaying leads to authorized users of that customer account for lead management</li>
              <li>Maintaining integration status and connection health, troubleshooting, securing the integration, and keeping necessary audit and technical records</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              We do not sell Meta Platform Data. We do not use it for purposes
              unrelated to the authorized CRM integration, and we do not use it
              to build or augment personal profiles for unrelated purposes.
            </p>

            <h3 className="mt-6 text-base font-semibold text-ink">
              3. Customer authorization
            </h3>
            <p className="mt-2 leading-relaxed">
              A customer must authorize the connection between their Meta
              business assets and Vedasynk before we access the relevant Meta
              data. The customer is responsible for ensuring it has the rights
              to connect those Pages, ad accounts, and Lead Forms. We never ask
              for a customer&apos;s Meta/Facebook password; authentication is
              performed through Meta&apos;s supported authorization mechanisms.
            </p>

            <h3 className="mt-6 text-base font-semibold text-ink">
              4. Lead processing flow
            </h3>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5 leading-relaxed">
              <li>A person submits the customer&apos;s Meta Lead Form on Meta&apos;s platform.</li>
              <li>Meta sends a webhook notification to our integration.</li>
              <li>We retrieve the lead through Meta&apos;s API, validate and normalize it, and check for duplicates.</li>
              <li>The lead is stored in the CRM under the correct customer/company and branch, with tenant separation so one customer&apos;s Meta data is not made available to another customer.</li>
              <li>Authorized users of that customer account can view and manage the lead.</li>
            </ol>

            <h3 className="mt-6 text-base font-semibold text-ink">
              5. Tokens, credentials, and security
            </h3>
            <p className="mt-2 leading-relaxed">
              Meta access tokens, app credentials, and webhook credentials are
              handled server-side and are not intentionally exposed through the
              public frontend. We maintain administrative, technical, and
              organizational safeguards—including authentication and role-based
              access controls, company and branch-level tenant isolation,
              encryption in transit, secure webhook handling, access logging,
              monitoring, and restricted database access—designed to protect
              Platform Data against unauthorized access, loss, alteration, or
              disclosure.
            </p>

            <h3 className="mt-6 text-base font-semibold text-ink">
              6. Service providers
            </h3>
            <p className="mt-2 leading-relaxed">
              We may use infrastructure and technology providers—such as cloud
              hosting, database, storage, security, and monitoring
              providers—necessary to operate the CRM and Meta integration. Where
              such providers process Meta Platform Data on our behalf, they are
              required to process it only as necessary to provide services to
              us and subject to applicable contractual and security
              requirements.
            </p>

            <h3 className="mt-6 text-base font-semibold text-ink">
              7. Access to Meta lead data
            </h3>
            <p className="mt-2 leading-relaxed">
              Meta leads imported into the CRM are made available only to
              authorized users of the customer account for which the
              integration was established, under company and branch-level access
              controls. Users should access lead information only for legitimate
              business purposes and in accordance with applicable laws and the
              customer&apos;s own privacy obligations.
            </p>

            <h3 className="mt-6 text-base font-semibold text-ink">
              8. Changes to Meta integrations
            </h3>
            <p className="mt-2 leading-relaxed">
              Meta may change its APIs, permissions, or policies from time to
              time. We may modify, suspend, or discontinue parts of the Meta
              integration when required for security, compliance, technical, or
              operational reasons.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Sharing</h2>
            <p className="mt-3 leading-relaxed">
              We may share data with trusted processors that help us operate the
              site and CRM (for example hosting, email, database, security,
              monitoring, or analytics providers), under appropriate agreements.
              We may disclose information if required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Retention</h2>
            <p className="mt-3 leading-relaxed">
              We keep inquiry records for as long as needed to manage the
              relationship and meet legal or accounting requirements, then delete
              or anonymise them when no longer required.
            </p>
            <p className="mt-3 leading-relaxed">
              Meta Platform Data is retained only for as long as reasonably
              necessary to provide the CRM functionality, maintain legitimate
              business operations, comply with legal obligations, resolve
              disputes, and maintain security. Where it is no longer necessary
              for a legitimate purpose, we take reasonable steps to delete or
              de-identify it, subject to applicable legal requirements. We also
              act on valid Meta deletion requests concerning Platform Data.
            </p>
          </div>

          <div id="data-deletion" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-ink">Data deletion requests</h2>
            <p className="mt-3 leading-relaxed">
              You may request access, correction, or deletion of personal data
              we hold about you—including personal information processed through
              our Meta integration—by emailing{" "}
              <a href={`mailto:${SITE.emailSales}`} className="text-accent hover:underline">
                {SITE.emailSales}
              </a>{" "}
              with the subject line “Data Deletion Request”. This page serves as
              our data-deletion instructions for Meta platform review.
            </p>
            <p className="mt-3 leading-relaxed">
              To help us locate the data without collecting unnecessary
              information, please include:
            </p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 leading-relaxed">
              <li>The name and email address or phone number associated with the data.</li>
              <li>Whether the request concerns website inquiry data or a Meta Lead Ads lead, and the approximate date of submission.</li>
              <li>If you are writing on behalf of a customer account, the company name and evidence of your authority to act for that account.</li>
            </ol>
            <p className="mt-3 leading-relaxed">
              We may need to verify your identity or authority before acting on
              a request. We aim to acknowledge requests promptly and complete
              verified deletions within 30 days, unless a longer period is
              required or permitted by law. Where deletion is not technically
              possible or legally required to be retained, we will explain why
              and restrict further processing where appropriate. You can also
              unsubscribe from marketing communications at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Updates</h2>
            <p className="mt-3 leading-relaxed">
              We may update this policy from time to time. The latest version will
              always be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about this policy or our processing of Meta Platform
              Data:{" "}
              <a href={`mailto:${SITE.emailSales}`} className="text-accent hover:underline">
                {SITE.emailSales}
              </a>
              . Website:{" "}
              <a href={SITE.url} className="text-accent hover:underline">
                {SITE.url}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
