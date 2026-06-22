import Image from "next/image";
import { CheckCircle2 } from "@/components/icons";
import type { RichBlock, FeatureGroup } from "@/types/product";

export function ProductSectionHeading({
  children,
  divider = "two-tone",
}: {
  children: React.ReactNode;
  divider?: "two-tone" | "line" | "none";
}) {
  return (
    <>
      <h2 className="ds-h2 !text-left md:!text-center">{children}</h2>
      {divider === "two-tone" && (
        <div className="mb-8 flex w-36 justify-center max-md:justify-start">
          <span className="h-[3px] w-1/2 bg-brand-dark" />
          <span className="h-[3px] w-1/2 bg-secondary" />
        </div>
      )}
      {divider === "line" && (
        <div className="mb-8 h-px w-full max-w-[120px] bg-border max-md:ml-0 md:mx-auto" />
      )}
    </>
  );
}

export function FeatureBlock({ block, flip }: { block: RichBlock; flip?: boolean }) {
  const hasImage = !!block.image;
  const isImageOnly = hasImage && !block.heading && !block.paragraphs?.length && !block.bullets?.length;

  // Full-width image breakout — preserves original aspect ratio, no cropping
  if (isImageOnly) {
    return (
      <div className="overflow-hidden rounded-md md:rounded-lg">
        <Image
          src={block.image!}
          alt={block.imageAlt || ""}
          width={2000}
          height={1125}
          className="h-auto w-full"
          sizes="100vw"
        />
      </div>
    );
  }

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
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {hasImage && (
        <div
          className={
            "overflow-hidden rounded-md bg-offwhite " +
            (flip ? "lg:order-1" : "")
          }
        >
          <Image
            src={block.image!}
            alt={block.imageAlt || block.heading || ""}
            width={2000}
            height={1125}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
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
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
