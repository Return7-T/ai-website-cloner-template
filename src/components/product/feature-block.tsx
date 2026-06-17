import Image from "next/image";
import type { RichBlock, FeatureGroup } from "@/types/product";

export function ProductSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="ds-h2 !text-left md:!text-center">{children}</h2>
      <div className="mb-8 flex w-36 justify-center max-md:justify-start">
        <span className="h-[3px] w-1/2 bg-brand-dark" />
        <span className="h-[3px] w-1/2 bg-secondary" />
      </div>
    </>
  );
}

export function FeatureBlock({ block, flip }: { block: RichBlock; flip?: boolean }) {
  const hasImage = !!block.image;
  return (
    <div
      className={
        "grid grid-cols-1 items-center gap-8 " +
        (hasImage ? "lg:grid-cols-2" : "")
      }
    >
      <div className={flip && hasImage ? "lg:order-2" : ""}>
        <h3 className="mb-4 text-2xl font-bold text-black">{block.heading}</h3>
        {block.paragraphs?.map((p, i) => (
          <p key={i} className="mb-3 text-base leading-relaxed text-black/70">
            {p}
          </p>
        ))}
        {block.bullets && block.bullets.length > 0 && (
          <ul className="mt-3 space-y-2">
            {block.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-base text-black/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {hasImage && (
        <div
          className={
            "relative aspect-[16/10] overflow-hidden rounded-md bg-offwhite " +
            (flip ? "lg:order-1" : "")
          }
        >
          <Image
            src={block.image!}
            alt={block.imageAlt || block.heading}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export function FeatureGroups({ groups }: { groups: FeatureGroup[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title} className="rounded-md bg-white p-6 shadow-sm">
          <h3 className="mb-4 border-b border-border pb-3 text-lg font-bold text-brand">
            {g.title}
          </h3>
          <ul className="space-y-2">
            {g.items.map((it, i) => (
              <li key={i} className="flex gap-2 text-[15px] text-black/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
