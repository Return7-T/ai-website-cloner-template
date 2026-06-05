import Link from "next/link";
import Image from "next/image";
import type { RelatedProduct } from "@/types/product";
import type { CaseStory } from "@/types/content";

export function RelatedProducts({ items }: { items: RelatedProduct[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((p) => (
        <Link
          key={p.title}
          href={p.href}
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

export function ProjectGrid({ items }: { items: CaseStory[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <Link
          key={c.title}
          href={c.href}
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
