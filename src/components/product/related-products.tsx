import Link from "next/link";
import Image from "next/image";
import type { RelatedProduct } from "@/types/product";
import type { CaseStory } from "@/types/content";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/path";

export function RelatedProducts({
  items,
  locale,
}: {
  items: RelatedProduct[];
  locale: Locale;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((p) => (
        <Link
          key={p.title}
          href={localizeHref(p.href, locale)}
          className="ds-card group flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={p.img}
              alt={p.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="ds-card-img object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="ds-h3">{p.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ProjectGrid({
  items,
  locale,
}: {
  items: CaseStory[];
  locale: Locale;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <Link
          key={c.title}
          href={localizeHref(c.href, locale)}
          className="ds-card group flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={c.img}
              alt={c.alt || c.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="ds-card-img object-cover"
            />
          </div>
          <div className="flex flex-1 items-center p-4">
            <h3 className="text-left text-base font-bold leading-snug text-black transition-colors group-hover:text-brand">
              {c.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
