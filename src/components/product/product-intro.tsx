import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, Mail, Download, ChevronRight } from "@/components/icons";
import type { ProductData } from "@/types/product";

const btnIcon: Record<string, typeof Mail> = {
  Message: MessageCircle,
  "Send Email": Mail,
  "PDF Download": Download,
};

export function ProductIntro({ data }: { data: ProductData }) {
  const { intro, title, breadcrumb } = data;
  return (
    <section className="bg-white pb-12 pt-6">
      <div className="ds-container">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-black/60">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-1">
              {b.href ? (
                <Link href={b.href} className="hover:text-brand">
                  {b.text}
                </Link>
              ) : (
                <span className="text-black">{b.text}</span>
              )}
              {i < breadcrumb.length - 1 && (
                <ChevronRight size={14} className="text-black/40" />
              )}
            </span>
          ))}
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Product image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-offwhite">
            <Image
              src={intro.image}
              alt={intro.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-black md:text-[34px]">
              {title}
            </h1>
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="mb-3 text-base leading-relaxed text-black/70">
                {p}
              </p>
            ))}
            <ul className="my-4 space-y-2">
              {intro.keySpecs.map((s) => (
                <li key={s.label} className="flex items-center gap-2 text-black">
                  <CheckCircle2 size={20} className="shrink-0 text-brand" />
                  <span className="font-medium">{s.label}:</span>
                  <span className="text-black/70">{s.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap gap-3">
              {intro.buttons.map((b) => {
                const Icon = btnIcon[b.text] || MessageCircle;
                return (
                  <Link
                    key={b.text}
                    href={b.href}
                    className="inline-flex items-center gap-2 rounded-[3px] bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
                  >
                    <Icon size={18} />
                    {b.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
