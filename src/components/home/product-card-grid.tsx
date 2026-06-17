import Link from "next/link";
import Image from "next/image";
import type { ProductCard } from "@/types/content";

export function SectionDivider() {
  return (
    <div className="mx-auto mb-10 flex w-36 justify-center">
      <span className="h-[3px] w-1/2 bg-brand-dark" />
      <span className="h-[3px] w-1/2 bg-secondary" />
    </div>
  );
}

interface Props {
  heading: string;
  cards: ProductCard[];
  className?: string;
}

export function ProductCardGrid({
  heading,
  cards,
  className = "",
}: Props) {
  return (
    <section
      id={heading === "Construction Equipment" ? "construction-equipment" : undefined}
      className={`scroll-mt-28 py-16 md:scroll-mt-32 ${className}`}
    >
      <div className="ds-container">
        <h2 className="ds-h2">{heading}</h2>
        <SectionDivider />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title + card.href}
              href={card.href}
              className="ds-card group flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.alt || card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="ds-card-img object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="ds-h3">{card.title}</h3>
                {card.desc && (
                  <p className="mt-2 text-center text-[15px] leading-relaxed text-black/60">
                    {card.desc}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
