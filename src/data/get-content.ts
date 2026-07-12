import type { Locale } from "@/i18n/config";
import type { ProductData } from "@/types/product";
import type { ProductCard, CaseStory, Feature, Branch, NavItem, FooterColumn } from "@/types/content";

import {
  hero as enHero,
  constructionCards as enConstructionCards,
  constructionMeta as enConstructionMeta,
  storyCards as enStoryCards,
  storyMeta as enStoryMeta,
  whyChoose as enWhyChoose,
  features as enFeatures,
  branchesMeta as enBranchesMeta,
  branches as enBranches,
} from "@/data/home";
import {
  navItems as enNavItems,
  topBarLinks as enTopBarLinks,
  headerCta as enHeaderCta,
  headerWhatsApp as enHeaderWhatsApp,
  logo,
} from "@/data/navigation";
import { footerColumns as enFooterColumns, footerMeta as enFooterMeta } from "@/data/footer";
import { products as enProducts } from "@/data/products";
import { kewanProducts as enKewanProducts } from "@/data/kewan-products";
import { constructionPage as enConstructionPage } from "@/data/construction";

import {
  hero as zhHero,
  constructionCards as zhConstructionCards,
  constructionMeta as zhConstructionMeta,
  storyCards as zhStoryCards,
  storyMeta as zhStoryMeta,
  whyChoose as zhWhyChoose,
  features as zhFeatures,
  branchesMeta as zhBranchesMeta,
  branches as zhBranches,
} from "@/data/zh/home";
import {
  navItems as zhNavItems,
  topBarLinks as zhTopBarLinks,
  headerCta as zhHeaderCta,
  headerWhatsApp as zhHeaderWhatsApp,
} from "@/data/zh/navigation";
import { footerColumns as zhFooterColumns, footerMeta as zhFooterMeta } from "@/data/zh/footer";
import { products as zhProducts } from "@/data/zh/products";
import { kewanProducts as zhKewanProducts } from "@/data/zh/kewan-products";
import { constructionPage as zhConstructionPage } from "@/data/zh/construction";
import type { ConstructionPageContent } from "@/types/content";

export type HomeContent = {
  hero: typeof enHero;
  constructionCards: ProductCard[];
  constructionMeta: typeof enConstructionMeta;
  storyCards: CaseStory[];
  storyMeta: typeof enStoryMeta;
  whyChoose: typeof enWhyChoose;
  features: Feature[];
  branchesMeta: typeof enBranchesMeta;
  branches: Branch[];
};

export type NavContent = {
  navItems: NavItem[];
  topBarLinks: NavItem[];
  headerCta: typeof enHeaderCta;
  headerWhatsApp: typeof enHeaderWhatsApp;
  logo: typeof logo;
};

export type FooterContent = {
  footerColumns: FooterColumn[];
  footerMeta: typeof enFooterMeta;
};

export function getConstructionContent(
  locale: Locale
): ConstructionPageContent {
  return locale === "zh" ? zhConstructionPage : enConstructionPage;
}

export function getHomeContent(locale: Locale): HomeContent {
  if (locale === "zh") {
    return {
      hero: zhHero,
      constructionCards: zhConstructionCards,
      constructionMeta: zhConstructionMeta,
      storyCards: zhStoryCards,
      storyMeta: zhStoryMeta,
      whyChoose: zhWhyChoose,
      features: zhFeatures,
      branchesMeta: zhBranchesMeta,
      branches: zhBranches,
    };
  }
  return {
    hero: enHero,
    constructionCards: enConstructionCards,
    constructionMeta: enConstructionMeta,
    storyCards: enStoryCards,
    storyMeta: enStoryMeta,
    whyChoose: enWhyChoose,
    features: enFeatures,
    branchesMeta: enBranchesMeta,
    branches: enBranches,
  };
}

export function getNavContent(locale: Locale): NavContent {
  if (locale === "zh") {
    return {
      navItems: zhNavItems,
      topBarLinks: zhTopBarLinks,
      headerCta: zhHeaderCta,
      headerWhatsApp: zhHeaderWhatsApp,
      logo,
    };
  }
  return {
    navItems: enNavItems,
    topBarLinks: enTopBarLinks,
    headerCta: enHeaderCta,
    headerWhatsApp: enHeaderWhatsApp,
    logo,
  };
}

export function getFooterContent(locale: Locale): FooterContent {
  if (locale === "zh") {
    return {
      footerColumns: zhFooterColumns,
      footerMeta: zhFooterMeta,
    };
  }
  return {
    footerColumns: enFooterColumns,
    footerMeta: enFooterMeta,
  };
}

export function getAllProducts(locale: Locale): Record<string, ProductData> {
  if (locale === "zh") {
    return { ...zhProducts, ...zhKewanProducts };
  }
  return { ...enProducts, ...enKewanProducts };
}

export function getProduct(
  slug: string,
  locale: Locale
): ProductData | undefined {
  return getAllProducts(locale)[slug];
}

export function getProductSlugs(): string[] {
  return Object.keys({ ...enProducts, ...enKewanProducts });
}
