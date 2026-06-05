import type { NavItem } from "@/types/content";

// Main navigation with mega-menu dropdowns (from daswell.com header).
export const navItems: NavItem[] = [
  { text: "Home", href: "https://daswell.com/" },
  {
    text: "Construction Equipment",
    href: "https://daswell.com/construction/",
    children: [
      { text: "Concrete Mixer Pumps", href: "/concrete-pumps/concrete-mixer-pump/" },
      { text: "Trailer Concrete Pumps", href: "/concrete-pumps/trailer-concrete-pump/" },
      { text: "Self Loading Concrete Mixers", href: "https://daswell.com/concrete-mixers/self-loading-concrete-mixer/" },
      { text: "Concrete Batching Plants", href: "https://daswell.com/concrete-mixers/concrete-batch-plant/" },
      { text: "Twin Shaft Concrete Mixer Pump", href: "https://daswell.com/concrete-pumps/twin-shaft-concrete-mixer-pump/" },
      { text: "Concrete Pumps", href: "https://daswell.com/concrete-pumps/" },
      { text: "Concrete Mixers", href: "https://daswell.com/concrete-mixers/" },
      { text: "Bolted Silo", href: "https://daswell.com/concrete-mixers/bolted-silo/" },
      { text: "Others", href: "https://daswell.com/construction/#others" },
    ],
  },
  {
    text: "Crushing and Screening",
    href: "https://daswell.com/crushers/",
    children: [
      { text: "Stone Crushing Plant", href: "https://daswell.com/crushers/stone-crushing-plant/" },
      { text: "Mobile Crushing Plant", href: "https://daswell.com/crushers/mobile-crushing-plant/" },
      { text: "Jaw Crusher", href: "https://daswell.com/crushers/jaw-crusher/" },
      { text: "Cone Crusher", href: "https://daswell.com/crushers/cone-crusher/" },
    ],
  },
  { text: "Powder Processing", href: "https://daswell.com/powder/" },
  {
    text: "Cases",
    href: "https://daswell.com/project/",
    children: [
      { text: "Construction Machinery", href: "https://daswell.com/concrete-machinery-projects/" },
      { text: "Powder Processing", href: "https://daswell.com/powder-cases/" },
      { text: "Crusher", href: "https://daswell.com/crusher-cases/" },
    ],
  },
  { text: "Become Our Distributor", href: "https://daswell.com/dealer/" },
  { text: "About Us", href: "https://daswell.com/about-us/" },
  {
    text: "News",
    href: "https://daswell.com/news/",
    children: [
      { text: "Construction Machinery", href: "https://daswell.com/concrete-machinery-news/" },
      { text: "Powder Processing", href: "https://daswell.com/powder-processing-news/" },
    ],
  },
  { text: "Blogs", href: "https://daswell.com/blogs/" },
  { text: "Contact Us", href: "https://daswell.com/contact-us/" },
];

export const topBarLinks: NavItem[] = [
  { text: "DASWELL in Philippines", href: "https://daswell.com/philippines/" },
  { text: "DASWELL in Indonesia", href: "https://daswell.com/indonesia/" },
  { text: "DASWELL in Egypt", href: "https://daswell.com/egypt/" },
];

export const headerCta = { text: "Get a Quote", href: "#request-quote" };
export const headerWhatsApp = { text: "WhatsApp: +86 177 3771 2027", href: "https://daswell.com/whatsapp/" };
export const logo = { src: "/images/2025/10/logo.png", alt: "Daswell", width: 240, height: 42 };
