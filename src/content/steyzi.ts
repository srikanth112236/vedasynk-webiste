export const STEYZI = {
  name: "Steyzi",
  tagline: "The smarter way to run PGs, hostels, and student stays.",
  productLine: "Vedasynk Flagship SaaS",
  url: "https://www.steyzi.com",
  urlAlt: "https://www.steyzi.in",
  playStore:
    "https://play.google.com/store/apps/details?id=com.steyzi.app",
  phone: "+918217643370",
  phoneDisplay: "+91 82176 43370",
  description:
    "Steyzi is Vedasynk Technologies’ flagship SaaS for PG owners, hostel managers, and resident communities—built to replace registers, spreadsheets, and WhatsApp chaos with one living operating system.",
} as const;

export const STEYZI_STATS = [
  { value: "1", label: "Operating system for your PG" },
  { value: "2", label: "Experiences: owners & residents" },
  { value: "∞", label: "Rooms, beds & properties to scale" },
  { value: "IN", label: "Built for Indian PG & hostel ops" },
] as const;

export const STEYZI_PROBLEMS = [
  {
    title: "Registers that lie",
    text: "Paper books go missing, get overwritten, and never tell you occupancy in real time.",
  },
  {
    title: "Rent chasing on chat",
    text: "WhatsApp threads bury payment history. Owners lose hours chasing dues every month.",
  },
  {
    title: "Bed chaos at check-in",
    text: "Without live bed maps, double bookings and vacant beds quietly kill revenue.",
  },
  {
    title: "Residents feel ignored",
    text: "Students and working professionals want status, receipts, and requests—not silence.",
  },
] as const;

export const STEYZI_PLANNING = [
  {
    step: "01",
    title: "Field reality first",
    text: "We mapped how Bangalore and multi-city PG operators actually work—morning collections, bed swaps, food timing, parent calls, and late-night check-ins.",
  },
  {
    step: "02",
    title: "Two audiences, one system",
    text: "Owners need control and clarity. Residents need trust and convenience. Steyzi was planned as dual product surfaces from day one—not an admin tool with a thin tenant afterthought.",
  },
  {
    step: "03",
    title: "Mobile-first operations",
    text: "Wardens and owners live on phones. Every critical flow—rent, occupancy, check-in—had to work on mobile without losing a laptop-grade dashboard.",
  },
  {
    step: "04",
    title: "Ship, learn, expand",
    text: "Core ops first. Then reminders, analytics, and a roadmap toward vendor collaborations and city-wide resident experiences.",
  },
] as const;

export const STEYZI_DESIGN_PILLARS = [
  {
    title: "Designed for beds, not hotel suites",
    text: "PG and hostel inventory is bed-level and shared. Steyzi models rooms, beds, gender wings, and stay duration the way operators think—not like a hotel PMS bolted sideways.",
  },
  {
    title: "Calm UI under pressure",
    text: "Peak admission season is noisy. Interfaces prioritise status, search, and next actions so staff can move fast without training theatre.",
  },
  {
    title: "Trust for students & parents",
    text: "Clear dues, digital trails, and request visibility reduce anxiety—and reduce the phone calls that burn owner time.",
  },
  {
    title: "Brand that feels home",
    text: "Steyzi’s product and brand were shaped for everyday hospitality businesses: approachable, reliable, and serious about money and safety.",
  },
] as const;

export const STEYZI_OWNER_FEATURES = [
  {
    title: "Resident management",
    text: "Profiles, documents, stay history, and status in one place—no folder archaeology.",
  },
  {
    title: "Rent & dues tracking",
    text: "See who paid, who is late, and what is due next—without scrolling chat history.",
  },
  {
    title: "Room & bed occupancy",
    text: "Live availability across properties so empty beds become revenue, not rumours.",
  },
  {
    title: "Check-in & check-out",
    text: "Structured handovers that protect deposits, keys, and accountability.",
  },
  {
    title: "Expense & reports",
    text: "Operational spend and occupancy analytics so you manage a business—not a guess.",
  },
  {
    title: "Reminders & alerts",
    text: "Nudge collections and stay milestones before problems become disputes.",
  },
] as const;

export const STEYZI_RESIDENT_FEATURES = [
  {
    title: "Dedicated tenant login",
    text: "Residents see their stay, dues, and updates without hunting the owner on WhatsApp.",
  },
  {
    title: "Transparent stay status",
    text: "Clarity reduces friction for students, working professionals, and parents who co-pay.",
  },
  {
    title: "Request-friendly ops",
    text: "A path for maintenance and stay questions that does not drown the owner’s personal chat.",
  },
  {
    title: "Modern first impression",
    text: "Digitised stays feel safer and more premium—helping PGs compete in crowded city markets.",
  },
] as const;

export const STEYZI_FLOW = [
  { title: "Onboard property", text: "Add rooms, beds, pricing rules, and staff access." },
  { title: "Admit residents", text: "Capture profiles, allot beds, and start the stay cleanly." },
  { title: "Run monthly ops", text: "Track rent, expenses, occupancy, and check-outs in rhythm." },
  { title: "Grow the portfolio", text: "Repeat across hostels and cities with the same operating system." },
] as const;

export const STEYZI_FUTURE = [
  {
    title: "Vendor collaborations",
    text: "Partner network for food, laundry, Wi‑Fi, movers, furniture, and essentials—accessible to owners and residents inside Steyzi.",
  },
  {
    title: "City activity discovery",
    text: "Help residents explore events, co-working, fitness, and local experiences near their PG—turning stay software into community software.",
  },
  {
    title: "Owner marketplace leverage",
    text: "Bulk-friendly vendor offers so multi-PG operators negotiate better and residents get convenient services.",
  },
  {
    title: "Cross-city network effects",
    text: "As Steyzi grows across Bangalore, Hyderabad, Chennai, Mumbai, Delhi, Pune and beyond, collaborations compound for every property on the network.",
  },
] as const;

export const STEYZI_ROADMAP = [
  { phase: "Now", title: "Core PG OS", items: ["Residents", "Rent", "Occupancy", "Reports", "Tenant login"] },
  { phase: "Next", title: "Deeper automation", items: ["Smarter reminders", "Richer analytics", "Multi-staff roles", "Ops playbooks"] },
  { phase: "Soon", title: "Ecosystem layer", items: ["Vendor partners", "Resident perks", "City activities", "Owner offers"] },
  { phase: "Horizon", title: "Network scale", items: ["Multi-city density", "Brand partnerships", "Data-led insights", "New stay verticals"] },
] as const;

export const STEYZI_AUDIENCES = [
  {
    title: "PG owners",
    text: "Single-property operators who want control without hiring an ops team.",
  },
  {
    title: "Hostel & co-living managers",
    text: "Multi-bed properties that need live occupancy and clean monthly collections.",
  },
  {
    title: "Multi-city operators",
    text: "Portfolios that need one system across locations—not five spreadsheets.",
  },
  {
    title: "Students & residents",
    text: "People who deserve transparent stays, dues clarity, and modern digital access.",
  },
] as const;

export const STEYZI_FAQS = [
  {
    question: "What is Steyzi?",
    answer:
      "Steyzi is a PG and hostel management SaaS built by Vedasynk Technologies. It helps owners manage residents, rent, occupancy, check-ins, expenses, and reports—while giving residents a dedicated login experience.",
  },
  {
    question: "Who is Steyzi for?",
    answer:
      "PG owners, hostel managers, co-living operators, and multi-property portfolios across Indian cities—plus the students and working professionals who live with them.",
  },
  {
    question: "How is Steyzi related to Vedasynk?",
    answer:
      "Steyzi is Vedasynk’s flagship SaaS product. It showcases how we design, engineer, and grow real products—not only client projects—from our Bangalore studio.",
  },
  {
    question: "Can residents use Steyzi too?",
    answer:
      "Yes. Steyzi includes a dedicated tenant experience so residents can stay informed without relying only on informal chat threads.",
  },
  {
    question: "What is coming next for Steyzi?",
    answer:
      "Beyond core ops, the roadmap includes vendor collaborations and city activity discovery—so owners and residents can access services and experiences across cities as the network grows.",
  },
  {
    question: "How do I get a demo?",
    answer:
      "Visit steyzi.com / steyzi.in, call the demo line, or contact Vedasynk—we can walk you through owner and resident flows.",
  },
] as const;
