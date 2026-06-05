"use client";

import { useState } from "react";
import { Plus, Minus } from "@/components/icons";
import type { FaqItem } from "@/types/product";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[900px] space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-sm border border-border bg-white"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-bold text-black">{item.q}</span>
              {isOpen ? (
                <Minus size={20} className="shrink-0 text-brand" />
              ) : (
                <Plus size={20} className="shrink-0 text-brand" />
              )}
            </button>
            <div
              className={
                "grid transition-all duration-300 " +
                (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
              }
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-[15px] leading-relaxed text-black/70">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
