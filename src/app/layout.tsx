import type { Metadata } from "next";
import { Syne, Figtree, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { LeadModalProvider } from "@/components/forms/lead-modal";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: SITE.name,
    description: SITE.description,
    path: "/",
  }),
  title: {
    default: `${SITE.name} | Software, Brand & Growth`,
    template: `%s | ${SITE.shortName}`,
  },
  icons: {
    icon: [{ url: "/logo-black.png", type: "image/png" }],
    apple: [{ url: "/logo-black.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <LenisProvider>
          <LeadModalProvider>
            <Header />
            <main className="flex-1 pb-20 md:pb-0">{children}</main>
            <Footer />
            <StickyCta />
          </LeadModalProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
