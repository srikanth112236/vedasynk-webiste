export const SITE = {
  name: "Vedasynk Technologies",
  shortName: "Vedasynk",
  tagline: "Custom software, brands, and growth systems for ambitious teams.",
  description:
    "Vedasynk Technologies builds custom websites, web apps, mobile apps, brands, and digital marketing systems for startups and growing businesses. Bangalore-based, globally delivered.",
  url: "https://vedasynk.com",
  locale: "en_IN",
  city: "Bangalore",
  region: "Karnataka",
  country: "India",
  address: "Bangalore, Karnataka, India",
  phone: "+918217643370",
  phoneDisplay: "+91 82176 43370",
  whatsapp: "919036227317",
  whatsappDisplay: "+91 90362 27317",
  emailSales: "sales@vedasynk.com",
  emailHr: "hr@vedasynk.com",
  calendlyUrl: "https://calendly.com/srikanth-vedasynk/30min",
  foundedYear: 2025,
  social: {
    linkedin: "https://www.linkedin.com/company/vedasynk",
    twitter: "https://twitter.com/vedasynk",
    instagram: "https://www.instagram.com/vedasynk",
  },
} as const;

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Branding", href: "/services/branding" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "MVP Development", href: "/solutions/mvp-development" },
      { label: "SaaS Products", href: "/solutions/saas-product-development" },
      { label: "Enterprise Software", href: "/solutions/enterprise-software" },
      {
        label: "Digital Transformation",
        href: "/solutions/digital-transformation",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/portfolio" },
  { label: "Steyzi", href: "/steyzi" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const FOUNDER = {
  srikan: {
    name: "Srikanth",
    role: "CEO and Founder",
    bio: "Six years building applications, websites, and mobile products. Leads architecture, delivery, and technical quality across every Vedasynk engagement.",
  },
  manikaysm: {
    name: "Manikayam",
    role: "Founder · Brand and Growth",
    bio: "Specialist in brand identity, logo and visual design, social media, and digital marketing. Connects product craft with go-to-market clarity.",
  },
} as const;
