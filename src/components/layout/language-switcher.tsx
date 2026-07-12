"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "@/components/icons";
import {
  localeLabels,
  localeShortLabels,
  locales,
  type Locale,
} from "@/i18n/config";
import { switchLocalePath } from "@/i18n/path";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type Props = {
  locale: Locale;
  className?: string;
  /** Compact style for tight header rows */
  compact?: boolean;
};

export function LanguageSwitcher({ locale, className, compact }: Props) {
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch language"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-[3px] border border-border bg-white text-sm font-medium text-black transition hover:border-brand hover:text-brand",
          compact ? "px-2.5 py-1.5" : "px-3 py-2"
        )}
      >
        <Globe size={16} className="shrink-0 opacity-80" />
        <span>{localeShortLabels[locale]}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full z-50 mt-1 min-w-[9rem] overflow-hidden rounded-sm border border-border bg-white py-1 shadow-lg"
        >
          {locales.map((loc) => {
            const href = switchLocalePath(pathname, loc);
            const active = loc === locale;
            return (
              <li key={loc} role="option" aria-selected={active}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-offwhite font-semibold text-brand"
                      : "text-black/80 hover:bg-offwhite hover:text-brand"
                  )}
                >
                  <span>{localeLabels[loc]}</span>
                  <span className="text-xs text-black/40">
                    {localeShortLabels[loc]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
