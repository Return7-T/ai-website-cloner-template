import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RequestQuote } from "@/components/layout/request-quote";
import { ProductPage } from "@/components/product/product-page";
import { products } from "@/data/products";
import { kewanProducts } from "@/data/kewan-products";

const allProducts = { ...products, ...kewanProducts };

export function generateStaticParams() {
  return Object.keys(allProducts).map((product) => ({ product }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const data = allProducts[product];
  if (!data) return {};
  return {
    title: `${data.title} | KEWAN`,
    description: data.intro.paragraphs[0]?.slice(0, 160),
  };
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const data = allProducts[product];
  if (!data) notFound();
  return (
    <>
      <SiteHeader />
      <main>
        <ProductPage data={data} />
        <RequestQuote />
      </main>
      <SiteFooter />
    </>
  );
}
