import type { ConstructionPageContent, ProductCard } from "@/types/content";

/** Shared construction equipment catalog — used by home cards and /construction page. */
export const constructionProducts: ProductCard[] = [
  {
    title: "Concrete Mixer Pump",
    href: "/concrete-pumps/concrete-mixer-pump/",
    img: "/images/2025/12/concrete-mixer-pump-jpg.webp",
    featuredImg: "/images/2025/03/concrete-mixer-pump.png",
    alt: "Concrete Mixer Pump",
    desc: "Mixing and pumping in one compact unit — ideal for efficient, cost-effective concrete placement.",
  },
  {
    title: "Concrete Trailer Pump",
    href: "/concrete-pumps/trailer-concrete-pump/",
    img: "/images/trailer-pump-side-view.png",
    featuredImg: "/images/2026/06/kewan-trailer-pump-3.jpg",
    alt: "Concrete Trailer Pump",
    desc: "Stable concrete conveying for foundations, slabs, and high-efficiency site pouring.",
    imgObjectPosition: "center 58%",
  },
  {
    title: "Truck-Mounted Concrete Pump",
    href: "/concrete-pumps/truck-mounted-concrete-pump/",
    img: "/images/2026/02/trailer-concrete-pump-jpg.webp",
    featuredImg: "/images/2026/02/trailer-concrete-pump-jpg.webp",
    alt: "Truck-Mounted Concrete Pump",
    desc: "Mobile pumping power for larger pours and sites that need rapid setup and reach.",
  },
];

export const constructionPage: ConstructionPageContent = {
  meta: {
    title: "Construction Equipment | KEWAN",
    description:
      "Explore KEWAN construction equipment — concrete mixer pumps, trailer pumps, and truck-mounted concrete pumps built for reliability on real job sites.",
  },
  breadcrumb: [
    { text: "Home", href: "/" },
    { text: "Construction Equipment" },
  ],
  heading: "Construction Equipment",
  paragraphs: [
    "KEWAN supplies construction equipment designed for reliability, efficiency, and long-term value on real job sites. Our core range focuses on concrete machinery — including concrete mixer pumps, trailer pumps, and truck-mounted concrete pumps — built with durable components, stable performance, and low lifecycle cost to help contractors work faster with fewer interruptions.",
    "With local service support, responsive spare-parts supply, and flexible configuration options, KEWAN equipment is trusted across residential projects, road construction, commercial buildings, and infrastructure development.",
  ],
  carouselLabel: "Featured construction equipment",
  prevLabel: "Previous equipment",
  nextLabel: "Next equipment",
  catalogHeading: "Concrete Machinery",
  products: constructionProducts,
};
