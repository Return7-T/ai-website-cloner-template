import type { ConstructionPageContent, ProductCard } from "@/types/content";

/** 工程设备产品目录 — 首页卡片与 /construction 落地页共用。 */
export const constructionProducts: ProductCard[] = [
  {
    title: "混凝土搅拌泵",
    href: "/concrete-pumps/concrete-mixer-pump/",
    img: "/images/2025/12/concrete-mixer-pump-jpg.webp",
    featuredImg: "/images/2025/03/concrete-mixer-pump.png",
    alt: "混凝土搅拌泵",
    desc: "将搅拌与泵送集成在同一紧凑机型，是经济高效混凝土作业的理想选择。",
  },
  {
    title: "混凝土拖泵",
    href: "/concrete-pumps/trailer-concrete-pump/",
    img: "/images/trailer-pump-side-view.png",
    featuredImg: "/images/2026/06/kewan-trailer-pump-3.jpg",
    alt: "混凝土拖泵",
    desc: "稳定输送，适用于基础、楼板及高效率现场浇筑。",
    imgObjectPosition: "center 58%",
  },
  {
    title: "车载混凝土泵",
    href: "/concrete-pumps/truck-mounted-concrete-pump/",
    img: "/images/2026/02/trailer-concrete-pump-jpg.webp",
    featuredImg: "/images/2026/02/trailer-concrete-pump-jpg.webp",
    alt: "车载混凝土泵",
    desc: "机动灵活的泵送能力，适合更大方量浇筑与需要快速就位的工地。",
  },
];

export const constructionPage: ConstructionPageContent = {
  meta: {
    title: "工程设备 | KEWAN",
    description:
      "浏览 KEWAN 工程设备 — 混凝土搅拌泵、拖泵与车载混凝土泵，专为真实工地的可靠高效而设计。",
  },
  breadcrumb: [{ text: "首页", href: "/" }, { text: "工程设备" }],
  heading: "工程设备",
  paragraphs: [
    "KEWAN 提供全系列工程设备，专为施工现场的可靠性、高效性与长期价值而设计。我们聚焦核心混凝土机械，包括混凝土搅拌泵、拖泵与车载混凝土泵；每台机器都强调坚固部件、稳定性能与较低的全生命周期成本，帮助承包商提高效率、减少中断。",
    "凭借本地化服务支持、快速备件供应与灵活的配置选项，KEWAN 工程设备广泛应用于住宅、道路、商业建筑与基础设施项目。",
  ],
  carouselLabel: "精选工程设备",
  prevLabel: "上一台设备",
  nextLabel: "下一台设备",
  catalogHeading: "混凝土机械",
  products: constructionProducts,
};
