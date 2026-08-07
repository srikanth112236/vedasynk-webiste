"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { useLeadModal } from "@/components/forms/lead-modal";
import { Logo } from "@/components/layout/logo";

export function FinalCta({
  title = "Ready to ship software, brand, and growth that convert?",
  description = "Book a discovery call with Vedasynk. We’ll clarify goals, recommend a scoped path for your website, app, or brand, and tell you honestly if we’re the right fit.",
}: {
  title?: string;
  description?: string;
}) {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="relative overflow-hidden border-t border-border bg-bg py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,87,208,0.08),transparent_60%)]"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Logo height={56} />
            </div>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <MagneticWrapper>
                <Button
                  size="lg"
                  type="button"
                  onClick={() =>
                    openLeadModal({
                      title: "Book a discovery conversation",
                      description:
                        "Tell us your goal and timeline—we’ll follow up with next steps.",
                    })
                  }
                >
                  Submit a project brief
                </Button>
              </MagneticWrapper>
              <MagneticWrapper strength={0.25}>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact#book">Book a discovery call</Link>
                </Button>
              </MagneticWrapper>
              <MagneticWrapper strength={0.2}>
                <Button asChild variant="ghost" size="lg">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp us
                  </a>
                </Button>
              </MagneticWrapper>
            </div>
            <p className="mt-6 text-sm text-ink-muted">
              Or email{" "}
              <a
                href={`mailto:${SITE.emailSales}`}
                className="text-accent transition-colors hover:underline"
              >
                {SITE.emailSales}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
