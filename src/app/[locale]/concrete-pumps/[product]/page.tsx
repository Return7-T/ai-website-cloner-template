import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RequestQuote } from "@/components/layout/request-quote";
import { ProductPage } from "@/components/product/product-page";
import {
  getFooterContent,
  getNavContent,
  getProduct,
  getProductSlugs,
} from "@/data/get-content";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  const slugs = getProductSlugs();
  return locales.flatMap((locale) =>
    slugs.map((product) => ({ locale, product }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; product: string }>;
}): Promise<Metadata> {
  const { locale: raw, product } = await params;
  if (!isLocale(raw)) return {};
  const data = getProduct(product, raw);
  if (!data) return {};
  return {
    title: `${data.title} | KEWAN`,
    description: data.intro.paragraphs[0]?.slice(0, 160),
  };
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ locale: string; product: string }>;
}) {
  const { locale: raw, product } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const data = getProduct(product, locale);
  if (!data) notFound();

  const nav = getNavContent(locale);
  const footer = getFooterContent(locale);
  const dict = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} nav={nav} dict={dict} />
      <main>
        <ProductPage data={data} locale={locale} dict={dict} />
        <RequestQuote dict={dict} />
      </main>
      <SiteFooter locale={locale} footer={footer} />
    </>
  );
}
