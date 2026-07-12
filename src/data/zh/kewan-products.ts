import type { ProductData } from "@/types/product";

export const kewanProducts: Record<string, ProductData> = {
  "truck-mounted-concrete-pump": {
    slug: "truck-mounted-concrete-pump",
    title: "车载混凝土泵",
    breadcrumb: [
      { text: "首页", href: "/" },
      { text: "工程设备", href: "/construction/" },
      { text: "车载混凝土泵" },
    ],
    intro: {
      paragraphs: [
        "本页为 KEWAN 车载混凝土泵的临时产品页。",
        "现阶段首页卡片使用现有拖泵图片作为占位，以保证导航完整。",
        "待最终车载泵素材就绪后，可替换为完整文案、图库与技术参数。",
      ],
      keySpecs: [
        { label: "页面状态", value: "占位页" },
        { label: "当前图片", value: "拖泵视觉素材" },
      ],
      image: "/images/2026/02/trailer-concrete-pump-jpg.webp",
      imageAlt: "车载混凝土泵占位图",
      buttons: [
        { text: "留言咨询", href: "#request-quote" },
        { text: "WhatsApp", href: "https://wa.me/8615700731570" },
      ],
    },
    featureBlocks: [
      {
        heading: "车载混凝土泵占位内容",
        paragraphs: [
          "本页刻意保持轻量，作为 KEWAN 车载混凝土泵的在线占位。",
          "在最终素材准备期间，保留站点结构、产品路由与站内链接。",
        ],
        image: "/images/2026/02/trailer-concrete-pump-jpg.webp",
        imageAlt: "拖泵图片用作占位",
      },
    ],
    related: {
      heading: "相关工程设备",
      items: [
        {
          title: "混凝土搅拌泵",
          href: "/concrete-pumps/concrete-mixer-pump/",
          img: "/images/2025/03/concrete-mixer-pump.png",
        },
        {
          title: "混凝土拖泵",
          href: "/concrete-pumps/trailer-concrete-pump/",
          img: "/images/2025/04/trailer-concrete-pump.png",
        },
        {
          title: "车载混凝土泵",
          href: "/concrete-pumps/truck-mounted-concrete-pump/",
          img: "/images/2025/04/trailer-concrete-pump.png",
        },
      ],
    },
    specTable: {
      caption: "临时页面数据",
      headers: ["项目", "内容"],
      rows: [
        ["产品", "车载混凝土泵"],
        ["状态", "占位页已上线"],
        ["图片", "暂用拖泵图片"],
      ],
    },
  },
};
