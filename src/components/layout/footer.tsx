import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { PRIMARY_SERVICES } from "@/content/services";
import { Logo } from "./logo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Steyzi", href: "/steyzi" },
  { label: "Process", href: "/process" },
  { label: "Technology", href: "/technology" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Logo height={120}/>
            <p className="max-w-xs text-sm leading-relaxed text-ink-secondary">
              {SITE.tagline} Based in {SITE.city}. Delivered worldwide.
            </p>
            <div className="space-y-1 text-sm text-ink-secondary">
              <a href={`mailto:${SITE.emailSales}`} className="block hover:text-accent">
                {SITE.emailSales}
              </a>
              <a href={`tel:${SITE.phone}`} className="block hover:text-accent">
                {SITE.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-accent"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink">Services</h3>
            <ul className="space-y-2.5">
              {PRIMARY_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-secondary hover:text-accent"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-accent">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink">Explore</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-secondary hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/case-studies" className="text-sm text-ink-secondary hover:text-accent">
                  Case studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-secondary hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
