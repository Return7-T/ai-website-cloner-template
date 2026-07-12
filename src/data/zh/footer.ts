import type { FooterColumn } from "@/types/content";

export const footerColumns: FooterColumn[] = [
  {
    heading: "产品",
    links: [
      {
        text: "工程机械",
        href: "/construction/",
      },
    ],
  },
  {
    heading: "公司",
    links: [
      { text: "关于我们", href: "https://daswell.com/about-us/" },
      { text: "案例", href: "https://daswell.com/project/" },
    ],
  },
  {
    heading: "联系",
    links: [
      {
        text: "WhatsApp: +86 1570 073 1570",
        href: "https://wa.me/8615700731570",
      },
      {
        text: "E-mail: global@daswell.com",
        href: "mailto:global@daswell.com",
      },
    ],
  },
];

export const footerMeta = {
  logo: {
    src: "/images/kewan-logo.png",
    alt: "KEWAN",
    width: 1024,
    height: 1024,
  },
  copyright: "© 2009-2026 @ KEWAN Group co., Ltd",
  links: [
    { text: "隐私政策", href: "https://daswell.com/privacy-policy/" },
  ],
};
