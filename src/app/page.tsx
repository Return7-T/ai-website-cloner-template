import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RequestQuote } from "@/components/layout/request-quote";
import { Hero } from "@/components/home/hero";
import { ProductCardGrid } from "@/components/home/product-card-grid";
import { SuccessStories } from "@/components/home/success-stories";
import { WhyChoose } from "@/components/home/why-choose";
import { GlobalBranches } from "@/components/home/global-branches";
import {
  constructionCards,
  constructionMeta,
  powderCards,
  powderMeta,
} from "@/data/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductCardGrid
          heading={constructionMeta.heading}
          cards={constructionCards}
          ctaText={constructionMeta.ctaText}
          ctaHref={constructionMeta.ctaHref}
        />
        <ProductCardGrid
          heading={powderMeta.heading}
          cards={powderCards}
          ctaText={powderMeta.ctaText}
          ctaHref={powderMeta.ctaHref}
          className="bg-offwhite"
        />
        <SuccessStories />
        <WhyChoose />
        <GlobalBranches />
        <RequestQuote />
      </main>
      <SiteFooter />
    </>
  );
}
