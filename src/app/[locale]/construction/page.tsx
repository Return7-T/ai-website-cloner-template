import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RequestQuote } from "@/components/layout/request-quote";
import { EquipmentCarousel } from "@/components/construction/equipment-carousel";
import { ProductCardGrid } from "@/components/home/product-card-grid";
import {
  getConstructionContent,
  getNavContent,
  getFooterContent,
} from "@/data/get-content";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const page = getConstructionContent(raw);
  return {
    title: page.meta.title,
    description: page.meta.description,
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      locale: raw === "zh" ? "zh_CN" : "en_US",
    },
  };
}

export default async function ConstructionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const page = getConstructionContent(locale);
  const nav = getNavContent(locale);
  const footer = getFooterContent(locale);
  const dict = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} nav={nav} dict={dict} />
      <main>
        <EquipmentCarousel
          products={page.products}
          locale={locale}
          label={page.carouselLabel}
          prevLabel={page.prevLabel}
          nextLabel={page.nextLabel}
          breadcrumb={page.breadcrumb}
          heading={page.heading}
          paragraphs={page.paragraphs}
        />
        <ProductCardGrid
          heading={page.catalogHeading}
          cards={page.products}
          locale={locale}
          className="bg-white"
        />
        <RequestQuote dict={dict} />
      </main>
      <SiteFooter locale={locale} footer={footer} />
    </>
  );
}
