import type { FooterColumn } from "@/types/content";

// Footer link columns (dark footer on daswell.com).
export const footerColumns: FooterColumn[] = [
  {
    heading: "Products",
    links: [
      { text: "Construction Machinery", href: "https://daswell.com/construction/" },
      { text: "Crushing and Screening", href: "https://daswell.com/crushers/" },
      { text: "Powder Processing", href: "https://daswell.com/powder/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { text: "About Us", href: "https://daswell.com/about-us/" },
      { text: "Cases", href: "https://daswell.com/project/" },
      { text: "Become Distributor", href: "https://daswell.com/dealer/" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { text: "WhatsApp: +86 177 3771 2027", href: "https://daswell.com/whatsapp/" },
      { text: "E-mail: global@daswell.com", href: "mailto:global@daswell.com" },
    ],
  },
];

export const footerMeta = {
  logo: { src: "/images/2025/10/logo.png", alt: "Daswell", width: 240, height: 42 },
  copyright: "© 2009-2026 @ Daswell Group co., Ltd",
  subsidiaryNote: "Daswell Powder Technology is a subsidiary of Daswell.",
  links: [
    { text: "Daswell Powder", href: "https://daswellpowder.com/" },
    { text: "Privacy Policy", href: "https://daswell.com/privacy-policy/" },
  ],
};
