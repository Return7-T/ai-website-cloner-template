import Link from "next/link";
import Image from "next/image";
import { branches, branchesMeta } from "@/data/home";
import { SectionDivider } from "./product-card-grid";

export function GlobalBranches() {
  return (
    <section className="bg-offwhite py-16">
      <div className="ds-container">
        <h2 className="ds-h2">{branchesMeta.heading}</h2>
        <SectionDivider />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {branches.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="ds-card group relative overflow-hidden rounded-md shadow-sm"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="ds-card-img object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
                  {b.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
