"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import type { ConstructionPageContent, ProductCard } from "@/types/content";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/path";
import { cn } from "@/lib/utils";

type Props = {
  products: ProductCard[];
  locale: Locale;
  label: string;
  prevLabel: string;
  nextLabel: string;
  breadcrumb: ConstructionPageContent["breadcrumb"];
  heading: string;
  paragraphs: string[];
};

export function EquipmentCarousel({
  products,
  locale,
  label,
  prevLabel,
  nextLabel,
  breadcrumb,
  heading,
  paragraphs,
}: Props) {
  const [index, setIndex] = useState(0);
  const count = products.length;
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (count === 0) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || count <= 1) return;

    const id = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(id);
  }, [go, count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (count === 0) return null;

  const active = products[index];

  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.96_0.012_255)]"
      aria-roledescription="carousel"
      aria-label={label}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
        const delta = endX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(delta) < 48) return;
        go(delta < 0 ? 1 : -1);
      }}
    >
      <div className="relative min-h-[560px] md:min-h-[580px] lg:min-h-[640px]">
        {/*
          Image panel: slightly inset / scaled, pinned to the right so the
          left keeps open ground for copy + soft gradient.
          overflow-hidden clips inactive slides so they never peek on the sides.
        */}
        <div className="absolute inset-x-0 top-[42%] bottom-0 overflow-hidden md:inset-y-6 md:left-auto md:right-0 md:w-[58%] lg:w-[60%] xl:w-[58%]">
          <div
            className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.17,0.67,0.35,0.95)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {products.map((product, i) => {
              const src = product.featuredImg || product.img;
              return (
                <div
                  key={product.href}
                  className="relative h-full w-full shrink-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} / ${count}: ${product.title}`}
                  aria-hidden={i !== index}
                >
                  <div className="absolute inset-0 overflow-hidden md:inset-y-0 md:left-2 md:right-0">
                    <Image
                      src={src}
                      alt={product.alt || product.title}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover object-[center_40%] md:object-center md:scale-[0.96] md:origin-right"
                      style={
                        product.imgObjectPosition
                          ? { objectPosition: product.imgObjectPosition }
                          : undefined
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft left wash — lighter, dissolves into the photo on the right */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[oklch(0.96_0.012_255)] from-0% via-[oklch(0.96_0.012_255)]/92 via-42% to-transparent to-78% md:bg-gradient-to-r md:from-[oklch(0.96_0.012_255)] md:from-0% md:via-[oklch(0.96_0.012_255)]/90 md:via-[38%] md:to-transparent md:to-[68%]"
          aria-hidden
        />
        {/* Very light brand veil on the left only */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full bg-gradient-to-r from-[color:var(--brand)]/[0.06] via-transparent to-transparent md:w-[48%]"
          aria-hidden
        />

        {/* Copy panel */}
        <div className="relative z-[2] flex min-h-[560px] items-start md:min-h-[580px] md:items-center lg:min-h-[640px]">
          <div className="ds-container-wide w-full py-10 md:py-14">
            <div className="max-w-xl lg:max-w-[32rem]">
              <nav
                aria-label="Breadcrumb"
                className="mb-5 flex flex-wrap items-center gap-1 text-sm text-black/50"
              >
                {breadcrumb.map((b, i) => (
                  <span key={i} className="flex items-center gap-1">
                    {b.href ? (
                      <Link
                        href={localizeHref(b.href, locale)}
                        className="transition-colors hover:text-brand"
                      >
                        {b.text}
                      </Link>
                    ) : (
                      <span className="text-foreground">{b.text}</span>
                    )}
                    {i < breadcrumb.length - 1 && (
                      <ChevronRight size={14} className="text-black/30" />
                    )}
                  </span>
                ))}
              </nav>

              <h1 className="text-left text-[28px] font-bold leading-tight text-foreground text-balance md:text-[36px] md:leading-[1.2] lg:text-[40px]">
                {heading}
              </h1>
              <div className="mt-3 mb-5 flex w-28">
                <span className="h-[3px] w-1/2 bg-brand-dark" />
                <span className="h-[3px] w-1/2 bg-brand/40" />
              </div>

              <div className="space-y-3">
                {paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="text-left text-[15px] leading-[1.7] text-black/65 md:text-[16px] md:leading-[1.75]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {active && (
                <Link
                  href={localizeHref(active.href, locale)}
                  className="mt-7 inline-flex items-center gap-3 rounded-[3px] border border-brand/20 bg-white/80 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition hover:border-brand/40 hover:bg-white"
                >
                  <span className="tabular-nums text-black/45">
                    {String(index + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}
                  </span>
                  <span className="h-3 w-px bg-black/15" aria-hidden />
                  <span>{active.title}</span>
                  <ChevronRight size={16} className="text-brand" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={prevLabel}
              className="absolute right-[4.75rem] bottom-6 z-10 flex h-10 w-10 items-center justify-center rounded-[3px] border border-black/10 bg-white/90 text-foreground shadow-sm transition hover:bg-white md:bottom-8 md:right-[5.5rem]"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={nextLabel}
              className="absolute right-6 bottom-6 z-10 flex h-10 w-10 items-center justify-center rounded-[3px] border border-black/10 bg-white/90 text-foreground shadow-sm transition hover:bg-white md:bottom-8 md:right-8"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:left-auto md:right-8 md:bottom-[4.75rem] md:translate-x-0">
              {products.map((product, i) => (
                <button
                  key={product.href}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={product.title}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-brand"
                      : "w-2 bg-black/20 hover:bg-black/35"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
