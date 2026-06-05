import { ProductIntro } from "./product-intro";
import {
  ProductSectionHeading,
  FeatureBlock,
  FeatureGroups,
} from "./feature-block";
import { RelatedProducts, ProjectGrid } from "./related-products";
import { SpecTable } from "./spec-table";
import { FaqAccordion } from "./faq-accordion";
import { CheckCircle2 } from "@/components/icons";
import type { ProductData } from "@/types/product";

export function ProductPage({ data }: { data: ProductData }) {
  return (
    <>
      <ProductIntro data={data} />

      {/* Feature blocks */}
      {data.featureBlocks.length > 0 && (
        <section className="bg-offwhite py-14">
          <div className="ds-container space-y-14">
            {data.featureBlocks.map((b, i) => (
              <FeatureBlock key={i} block={b} flip={i % 2 === 1} />
            ))}
          </div>
        </section>
      )}

      {/* Component groups */}
      {data.componentGroups && (
        <section className="py-14">
          <div className="ds-container">
            <ProductSectionHeading>
              {data.componentGroups.heading}
            </ProductSectionHeading>
            <FeatureGroups groups={data.componentGroups.groups} />
          </div>
        </section>
      )}

      {/* Reasons */}
      {data.reasons && (
        <section className="bg-offwhite py-14">
          <div className="ds-container">
            <ProductSectionHeading>{data.reasons.heading}</ProductSectionHeading>
            <ul className="mx-auto max-w-[900px] space-y-3">
              {data.reasons.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-md bg-white p-4 text-base text-black/75 shadow-sm"
                >
                  <CheckCircle2 size={22} className="shrink-0 text-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Buying tips */}
      {data.buyingTips && (
        <section className="py-14">
          <div className="ds-container">
            <ProductSectionHeading>
              {data.buyingTips.heading}
            </ProductSectionHeading>
            <ul className="mx-auto max-w-[900px] space-y-3">
              {data.buyingTips.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-base text-black/75">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related products */}
      {data.related && (
        <section className="bg-offwhite py-14">
          <div className="ds-container">
            <ProductSectionHeading>{data.related.heading}</ProductSectionHeading>
            <RelatedProducts items={data.related.items} />
          </div>
        </section>
      )}

      {/* Support */}
      {data.support && (
        <section className="py-14">
          <div className="ds-container">
            <ProductSectionHeading>{data.support.heading}</ProductSectionHeading>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {data.support.columns.map((col) => (
                <div key={col.title} className="rounded-md bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold text-black">
                    {col.title}
                  </h3>
                  <ul className="space-y-2">
                    {col.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-[15px] text-black/70">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq && (
        <section className="bg-offwhite py-14">
          <div className="ds-container">
            <ProductSectionHeading>{data.faq.heading}</ProductSectionHeading>
            <FaqAccordion items={data.faq.items} />
          </div>
        </section>
      )}

      {/* Technical data */}
      <section className="py-14">
        <div className="ds-container">
          <ProductSectionHeading>Technical Data</ProductSectionHeading>
          <SpecTable table={data.specTable} />
        </div>
      </section>

      {/* Projects */}
      {data.projects && (
        <section className="bg-offwhite py-14">
          <div className="ds-container">
            <ProductSectionHeading>{data.projects.heading}</ProductSectionHeading>
            <ProjectGrid items={data.projects.items} />
          </div>
        </section>
      )}
    </>
  );
}
