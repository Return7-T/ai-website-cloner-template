import type { NavItem } from "@/types/content";

// Main navigation with mega-menu dropdowns (from daswell.com header).
export const navItems: NavItem[] = [
  { text: "Home", href: "/" },
  {
    text: "Construction Equipment",
    href: "/construction/",
    children: [
      { text: "Concrete Mixer Pump", href: "/concrete-pumps/concrete-mixer-pump/" },
      { text: "Concrete Trailer Pump", href: "/concrete-pumps/trailer-concrete-pump/" },
      { text: "Truck-Mounted Concrete Pump", href: "/concrete-pumps/truck-mounted-concrete-pump/" },
    ],
  },
  {
    text: "Cases",
    href: "https://daswell.com/project/",
    children: [
      { text: "Construction Machinery", href: "https://daswell.com/concrete-machinery-projects/" },
    ],
  },
  { text: "About Us", href: "https://daswell.com/about-us/" },
  { text: "Blogs", href: "https://daswell.com/blogs/" },
  { text: "Contact Us", href: "https://daswell.com/contact-us/" },
];

export const topBarLinks: NavItem[] = [
  { text: "KEWAN in Philippines", href: "https://daswell.com/philippines/" },
  { text: "KEWAN in Indonesia", href: "https://daswell.com/indonesia/" },
  { text: "KEWAN in Egypt", href: "https://daswell.com/egypt/" },
];

export const headerCta = { text: "Get a Quote", href: "#request-quote" };
export const headerWhatsApp = { text: "WhatsApp: +86 1570 073 1570", href: "https://wa.me/8615700731570" };
export const logo = { src: "/images/kewan-logo-header.png", alt: "KEWAN", width: 1833, height: 468 };
