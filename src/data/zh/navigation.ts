import type { NavItem } from "@/types/content";

export const navItems: NavItem[] = [
  { text: "首页", href: "/" },
  {
    text: "工程设备",
    href: "/construction/",
    children: [
      { text: "混凝土搅拌泵", href: "/concrete-pumps/concrete-mixer-pump/" },
      { text: "混凝土拖泵", href: "/concrete-pumps/trailer-concrete-pump/" },
      { text: "车载混凝土泵", href: "/concrete-pumps/truck-mounted-concrete-pump/" },
    ],
  },
  {
    text: "案例",
    href: "https://daswell.com/project/",
    children: [
      {
        text: "工程机械案例",
        href: "https://daswell.com/concrete-machinery-projects/",
      },
    ],
  },
  { text: "关于我们", href: "https://daswell.com/about-us/" },
  { text: "博客", href: "https://daswell.com/blogs/" },
  { text: "联系我们", href: "https://daswell.com/contact-us/" },
];

export const topBarLinks: NavItem[] = [
  { text: "KEWAN 菲律宾", href: "https://daswell.com/philippines/" },
  { text: "KEWAN 印度尼西亚", href: "https://daswell.com/indonesia/" },
  { text: "KEWAN 埃及", href: "https://daswell.com/egypt/" },
];

export const headerCta = { text: "获取报价", href: "#request-quote" };
export const headerWhatsApp = {
  text: "WhatsApp: +86 1570 073 1570",
  href: "https://wa.me/8615700731570",
};
