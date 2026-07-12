import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import type { CaseStory } from "@/types/content";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/path";

type Props = {
  locale: Locale;
  heading: string;
  ctaText: string;
  ctaHref: string;
  cards: CaseStory[];
};

export function SuccessStories({
  locale,
  heading,
  ctaText,
  ctaHref,
  cards,
}: Props) {
  return (
    <section className="bg-offwhite py-16">
      <div className="ds-container">
        <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-brand-dark" />
        <h2 className="ds-h2">{heading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((s) => (
            <Link
              key={s.title}
              href={localizeHref(s.href, locale)}
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
            href={localizeHref(ctaHref, locale)}
            className="inline-flex items-center gap-2 rounded-[3px] bg-brand px-7 py-3 text-base font-medium text-white transition hover:bg-brand-dark"
          >
            {ctaText}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
