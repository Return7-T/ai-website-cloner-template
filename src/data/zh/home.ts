import type { CaseStory, Feature, Branch } from "@/types/content";
import { constructionProducts } from "@/data/zh/construction";

export const hero = {
  video: "/videos/2026/01/hero.mp4",
  heading: "KEWAN\n为工程而生",
  buttons: [
    { text: "工程设备", href: "/construction/", color: "red" as const },
  ],
};

export const constructionCards = constructionProducts;

export const constructionMeta = {
  heading: "工程设备",
  ctaText: "查看全部工程设备",
  ctaHref: "/construction/",
};

export const storyCards: CaseStory[] = [
  {
    title: "DMP50 混凝土搅拌泵印尼项目，2024",
    href: "https://daswell.com/project/concrete-mixer-pump-is-being-efficiently-constructed-in-indonesia/",
    img: "/images/2025/08/concrete-mixer-pump-indonesia.jpg",
    year: "2024",
  },
  {
    title: "KEWAN SLM4 自动上料搅拌机 · 印尼巴布亚马老奇，2023",
    href: "https://daswell.com/project/self-loading-concrete-mixer-in-merauke-papua/",
    img: "/images/2025/11/Daswell-SLM4-for-Indonesian-Customer-1024x576.jpg",
    year: "2023",
  },
  {
    title: "KEWAN MCBP60 移动式混凝土搅拌站 · 菲律宾，2025",
    href: "https://daswell.com/project/mobile-concrete-batching-plant-in-the-philippines/",
    img: "/images/2025/04/mobile-concrete-batching-plant.jpg",
    year: "2025",
  },
  {
    title: "固定式破碎站（150-200tph）菲律宾投产，2022",
    href: "https://daswell.com/crusher-cases/stationary-crushing-plant-philippines/",
    img: "/images/2025/12/stationary-crushing-plant-philippines5.png",
    year: "2022",
  },
];

export const storyMeta = {
  heading: "全球成功案例",
  ctaText: "查看全部案例",
  ctaHref: "https://daswell.com/project/",
};

export const whyChoose = {
  heading: "为什么选择 KEWAN",
  subtitle: "服务速度定义客户价值，也支撑品牌持续发展。",
};

export const features: Feature[] = [
  {
    icon: "/images/2025/03/icon_14.png",
    title: "全球布局",
    text: "菲律宾、印度尼西亚设有子公司，埃及设有办事处",
  },
  {
    icon: "/images/2025/03/icon_15.png",
    title: "完善售后",
    text: "40+ 服务人员，备件现货，客户满意度 100%",
  },
  {
    icon: "/images/2025/03/icon_16.png",
    title: "交钥匙方案",
    text: "从单机设备到完整产线一站式解决",
  },
  {
    icon: "/images/2025/03/icon_17.png",
    title: "快速交付",
    text: "本地库存，缩短交期",
  },
];

export const branchesMeta = { heading: "KEWAN 全球分支" };
export const branches: Branch[] = [
  {
    name: "菲律宾",
    img: "/images/2026/02/daswell-philippines-team.jpg",
    href: "https://daswell.com/philippines/",
  },
  {
    name: "印度尼西亚",
    img: "/images/2026/02/daswell-indonesia-team.jpg",
    href: "https://daswell.com/indonesia/",
  },
  {
    name: "埃及",
    img: "/images/2025/11/egyptian-team.jpg",
    href: "https://daswell.com/egypt/",
  },
];
