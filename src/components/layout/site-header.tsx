"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "@/components/icons";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/path";
import type { NavContent } from "@/data/get-content";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  nav: NavContent;
  dict: Dictionary;
};

export function SiteHeader({ locale, nav, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navItems, headerCta, headerWhatsApp, logo } = nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="ds-container-wide flex items-center justify-between gap-4 py-3 lg:gap-6">
        <Link href={localizeHref("/", locale)} className="shrink-0 pl-4">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="w-auto object-contain"
            style={{ height: "48px", width: "auto", margin: "0" }}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-5 pr-2 lg:flex xl:gap-7 xl:pr-4">
          {navItems.map((item) => (
            <NavLink key={item.text} item={item} locale={locale} />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            href={localizeHref(headerCta.href, locale)}
            className="rounded-[3px] bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            {headerCta.text}
          </Link>
          <Link
            href={headerWhatsApp.href}
            className="rounded-[3px] bg-secondary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            {headerWhatsApp.text}
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} compact />
          <button
            aria-label={dict.common.openMenu}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <MobileMenu
          onClose={() => setMobileOpen(false)}
          locale={locale}
          nav={nav}
          dict={dict}
        />
      )}
    </header>
  );
}

function NavLink({
  item,
  locale,
}: {
  item: NavContent["navItems"][number];
  locale: Locale;
}) {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <div className="group relative">
      <Link
        href={localizeHref(item.href, locale)}
        className={cn(
          "flex items-center gap-1 text-[15px] font-normal text-black transition-colors hover:text-brand"
        )}
      >
        {item.text}
        {hasChildren && <ChevronDown size={15} className="mt-0.5" />}
      </Link>
      {hasChildren && (
        <div className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-1 rounded-sm bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {item.children!.map((child) => (
            <Link
              key={child.text + child.href}
              href={localizeHref(child.href, locale)}
              className="block px-4 py-2 text-sm text-black/80 transition-colors hover:bg-offwhite hover:text-brand"
            >
              {child.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenu({
  onClose,
  locale,
  nav,
  dict,
}: {
  onClose: () => void;
  locale: Locale;
  nav: NavContent;
  dict: Dictionary;
}) {
  const { navItems, headerCta, headerWhatsApp, logo } = nav;
  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-12 w-auto object-contain"
            style={{ height: "3rem", width: "auto" }}
          />
          <button aria-label={dict.common.closeMenu} onClick={onClose}>
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <details key={item.text} className="border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-[15px] font-medium">
                <Link href={localizeHref(item.href, locale)} onClick={onClose}>
                  {item.text}
                </Link>
                {item.children && item.children.length > 0 && (
                  <ChevronDown size={16} />
                )}
              </summary>
              {item.children && (
                <div className="flex flex-col pb-2 pl-4">
                  {item.children.map((c) => (
                    <Link
                      key={c.text + c.href}
                      href={localizeHref(c.href, locale)}
                      onClick={onClose}
                      className="py-2 text-sm text-black/70"
                    >
                      {c.text}
                    </Link>
                  ))}
                </div>
              )}
            </details>
          ))}
        </nav>
        <div className="mt-5 flex flex-col gap-2">
          <Link
            href={localizeHref(headerCta.href, locale)}
            onClick={onClose}
            className="rounded-[3px] bg-brand px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            {headerCta.text}
          </Link>
          <Link
            href={headerWhatsApp.href}
            onClick={onClose}
            className="rounded-[3px] bg-secondary px-4 py-2.5 text-center text-sm text-white"
          >
            {headerWhatsApp.text}
          </Link>
          <div className="pt-2">
            <LanguageSwitcher locale={locale} className="w-full [&_button]:w-full [&_button]:justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
