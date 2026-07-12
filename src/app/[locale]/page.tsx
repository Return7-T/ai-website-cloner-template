import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RequestQuote } from "@/components/layout/request-quote";
import { Hero } from "@/components/home/hero";
import { ProductCardGrid } from "@/components/home/product-card-grid";
import { SuccessStories } from "@/components/home/success-stories";
import { WhyChoose } from "@/components/home/why-choose";
import { getHomeContent, getNavContent, getFooterContent } from "@/data/get-content";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  if (raw === "zh") {
    return {
      title: "KEWAN 为工程而生",
      description: "KEWAN 为全球工程提供创新建筑机械。",
      openGraph: {
        locale: "zh_CN",
        title: "KEWAN 为工程而生",
        description: "KEWAN 为全球工程提供创新建筑机械。",
      },
    };
  }
  return {
    title: "KEWAN Built for Construction",
    description:
      "KEWAN delivers innovative construction machinery for global projects.",
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const home = getHomeContent(locale);
  const nav = getNavContent(locale);
  const footer = getFooterContent(locale);
  const dict = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} nav={nav} dict={dict} />
      <main>
        <Hero hero={home.hero} locale={locale} />
        <ProductCardGrid
          heading={home.constructionMeta.heading}
          cards={home.constructionCards}
          locale={locale}
          ctaText={home.constructionMeta.ctaText}
          ctaHref={home.constructionMeta.ctaHref}
        />
        <SuccessStories
          locale={locale}
          heading={home.storyMeta.heading}
          ctaText={home.storyMeta.ctaText}
          ctaHref={home.storyMeta.ctaHref}
          cards={home.storyCards}
        />
        <WhyChoose
          heading={home.whyChoose.heading}
          subtitle={home.whyChoose.subtitle}
          features={home.features}
        />
        <RequestQuote dict={dict} />
      </main>
      <SiteFooter locale={locale} footer={footer} />
    </>
  );
}
