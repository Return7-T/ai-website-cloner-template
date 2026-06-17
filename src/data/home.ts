// Home page content — extracted verbatim from daswell.com. Images are local.
import type { ProductCard, CaseStory, Feature, Branch } from "@/types/content";

export const hero = {
  video: "/videos/2026/01/hero.mp4",
  heading: "KEWAN\nBuilt for Construction",
  buttons: [
    { text: "Construction Equipment", href: "#construction-equipment", color: "red" as const },
  ],
};

export const constructionCards: ProductCard[] = [
  { title: "Concrete Mixer Pump", href: "/concrete-pumps/concrete-mixer-pump/", img: "/images/2025/12/concrete-mixer-pump-jpg.webp", alt: "Concrete Mixer Pump", desc: "Reliable pumping performance with high efficiency and low maintenance." },
  { title: "Concrete Trailer Pump", href: "/concrete-pumps/trailer-concrete-pump/", img: "/images/trailer-pump-side-view.png", alt: "Concrete Trailer Pump", desc: "Stable concrete conveying for foundations, slabs, and high-efficiency site pouring." },
  { title: "Truck-Mounted Concrete Pump", href: "/concrete-pumps/truck-mounted-concrete-pump/", img: "/images/2026/02/trailer-concrete-pump-jpg.webp", alt: "Truck-Mounted Concrete Pump", desc: "Temporary placeholder using the trailer pump visual until the dedicated truck-mounted asset is ready." },
];
export const constructionMeta = { heading: "Construction Equipment", ctaText: "View All Construction Equipment", ctaHref: "#construction-equipment" };

export const powderCards: ProductCard[] = [
  { title: "Calcium Carbonate Grinding Plant", href: "https://daswell.com/solution/calcium-carbonate-processing-plant/", img: "/images/2026/03/calcium-carbonate-processing-plant-jpg.webp", alt: "Calcium Carbonate Grinding Plant", desc: "Fineness: D97 10-25 µmCapacity: 10,000-150,000 t/year" },
  { title: "Quartz Powder Production Line", href: "https://daswell.com/solution/quartz-powder-processing-plant/", img: "/images/2026/03/quartz-powder-production-line-jpg.webp", alt: "Quartz Powder Production Line", desc: "Fineness: D97 45-100 µmApplications: Glass, casting, coatings, etc" },
  { title: "Talc Powder Production Line", href: "https://daswell.com/solution/talc-powder-production-line/", img: "/images/2026/03/talc-powder-processing-plant-jpg.webp", alt: "Talc Powder Production Line", desc: "Fineness: D97 10-20 µmFor applications such as plastic masterbatches and papermaking" },
  { title: "Pre-crushing Before Grinding", href: "https://daswellpowder.com/crushing/", img: "/images/2026/03/pre-crusher-before-grinding-jpg.webp", alt: "Pre-crushing Before Grinding", desc: "Reduce raw material size. Enhance efficiency, conserve energy, and achieve a smoother powder processing workflow." },
  { title: "Ring Roller Mill", href: "https://daswell.com/grinding-mills/ring-roller-mill/", img: "/images/2026/03/ring-roller-mill-jpg.webp", alt: "Ring Roller Mill", desc: "Precise ultra-fine grinding down to 2,500mesh with stable particle size distribution." },
  { title: "Powder Coating Machine", href: "https://daswell.com/powder-coating-machine/", img: "/images/2026/03/vortex-mill-coating-cachine-jpg.webp", alt: "Powder Coating Machine", desc: "Designed for fine, high-speed powder coating with superior activation and lower energy use." },
  { title: "Powder Packaging Machine", href: "https://daswell.com/powder/packaging-machine/", img: "/images/2026/03/industrial-powder-packaging-machine-jpg.webp", alt: "Powder Packaging Machine", desc: "Efficiently and precisely packages various mineral powders." },
];
export const storyCards: CaseStory[] = [
  { title: "DMP50 Concrete Mixer Pump in Indonesia Project, 2024", href: "https://daswell.com/project/concrete-mixer-pump-is-being-efficiently-constructed-in-indonesia/", img: "/images/2025/08/concrete-mixer-pump-indonesia.jpg", year: "2024" },
  { title: "KEWAN SLM4 Self Loading Concrete Mixer in Merauke, Papua, 2023", href: "https://daswell.com/project/self-loading-concrete-mixer-in-merauke-papua/", img: "/images/2025/11/Daswell-SLM4-for-Indonesian-Customer-1024x576.jpg", year: "2023" },
  { title: "KEWAN MCBP60 Mobile Concrete Batching Plant in the Philippines, 2025", href: "https://daswell.com/project/mobile-concrete-batching-plant-in-the-philippines/", img: "/images/2025/04/mobile-concrete-batching-plant.jpg", year: "2025" },
  { title: "Stationary Crushing Plant (150-200tph) Starts Production in the Philippines, 2022", href: "https://daswell.com/crusher-cases/stationary-crushing-plant-philippines/", img: "/images/2025/12/stationary-crushing-plant-philippines5.png", year: "2022" },
];
export const storyMeta = { heading: "Global Success Stories", ctaText: "View All Cases", ctaHref: "https://daswell.com/project/" };

export const whyChoose = {
  heading: "Why Choose KEWAN",
  subtitle: "Service speed defines customer value — and sustains our brand.",
};
export const features: Feature[] = [
  { icon: "/images/2025/03/icon_14.png", title: "Global Presence", text: "Subsidiaries in the Philippines & Indonesia, office in Egypt" },
  { icon: "/images/2025/03/icon_15.png", title: "Full After-sales", text: "40+ service staff, spare parts in stock, 100% customer satisfaction" },
  { icon: "/images/2025/03/icon_16.png", title: "Turnkey Solutions", text: "From single machine to complete production line" },
  { icon: "/images/2025/03/icon_17.png", title: "Fast Delivery", text: "Local inventory, shorter lead time" },
];

export const branchesMeta = { heading: "KEWAN Global Branches" };
export const branches: Branch[] = [
  { name: "Philippines", img: "/images/2026/02/daswell-philippines-team.jpg", href: "https://daswell.com/philippines/" },
  { name: "Indonesia", img: "/images/2026/02/daswell-indonesia-team.jpg", href: "https://daswell.com/indonesia/" },
  { name: "Egypt", img: "/images/2025/11/egyptian-team.jpg", href: "https://daswell.com/egypt/" },
];
