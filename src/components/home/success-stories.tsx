import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import { storyCards, storyMeta } from "@/data/home";
import { SectionDivider } from "./product-card-grid";

export function SuccessStories() {
  return (
    <section className="bg-offwhite py-16">
      <div className="ds-container">
        <h2 className="ds-h2">{storyMeta.heading}</h2>
        <SectionDivider />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {storyCards.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="ds-card group flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg sm:flex-row"
            >
              <div className="relative aspect-[16/9] overflow-hidden sm:w-2/5 sm:shrink-0">
                <Image
                  src={s.img}
                  alt={s.alt || s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="ds-card-img object-cover"
                />
                {s.year && (
                  <span className="absolute left-0 top-0 bg-brand px-3 py-1 text-sm font-medium text-white">
                    {s.year}
                  </span>
                )}
              </div>
              <div className="flex flex-1 items-center p-5">
                <h3 className="text-left text-lg font-bold leading-snug text-black transition-colors group-hover:text-brand">
                  {s.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href={storyMeta.ctaHref}
            className="inline-flex items-center gap-2 rounded-[3px] bg-brand px-7 py-3 text-base font-medium text-white transition hover:bg-brand-dark"
          >
            {storyMeta.ctaText}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
