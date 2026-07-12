import type { FooterColumn } from "@/types/content";

// Footer link columns (dark footer on daswell.com).
export const footerColumns: FooterColumn[] = [
  {
    heading: "Products",
    links: [
      { text: "Construction Machinery", href: "/construction/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { text: "About Us", href: "https://daswell.com/about-us/" },
      { text: "Cases", href: "https://daswell.com/project/" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { text: "WhatsApp: +86 1570 073 1570", href: "https://wa.me/8615700731570" },
      { text: "E-mail: global@daswell.com", href: "mailto:global@daswell.com" },
    ],
  },
];

export const footerMeta = {
  logo: { src: "/images/kewan-logo.png", alt: "KEWAN", width: 1024, height: 1024 },
  copyright: "© 2009-2026 @ KEWAN Group co., Ltd",
  links: [
    { text: "Privacy Policy", href: "https://daswell.com/privacy-policy/" },
  ],
};
