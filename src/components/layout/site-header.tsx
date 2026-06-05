"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Menu, X } from "@/components/icons";
import {
  navItems,
  headerCta,
  headerWhatsApp,
  logo,
} from "@/data/navigation";
import { cn } from "@/lib/utils";

// Top white row items (general nav, no red-bar product categories)
const redBarLabels = [
  "Construction Equipment",
  "Crushing and Screening",
  "Powder Processing",
];
const topNav = navItems.filter((n) => !redBarLabels.includes(n.text));
// Red bar items (product categories)
const redNav = navItems.filter((n) => redBarLabels.includes(n.text));

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      {/* Top white row */}
      <div className="ds-container-wide flex items-center justify-between gap-6 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-[42px] w-auto"
            style={{ height: "42px", width: "auto" }}
          />
        </Link>

        {/* Desktop top nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {topNav.map((item) => (
            <NavLink key={item.text} item={item} />
          ))}
          <button
            aria-label="Search"
            className="text-black/70 transition-colors hover:text-brand"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Red bar row */}
      <div className="hidden bg-brand lg:block">
        <div className="ds-container-wide flex items-center justify-between">
          <nav className="flex items-center gap-7">
            {redNav.map((item) => (
              <NavLink key={item.text} item={item} variant="red" />
            ))}
          </nav>
          <div className="flex items-center gap-2 py-2">
            <Link
              href={headerCta.href}
              className="rounded-[3px] bg-black px-4 py-1.5 text-sm font-normal capitalize tracking-[0.5px] text-offwhite transition hover:bg-black/80"
            >
              {headerCta.text}
            </Link>
            <Link
              href={headerWhatsApp.href}
              className="rounded-[3px] bg-black px-4 py-1.5 text-sm font-normal text-offwhite transition hover:bg-black/80"
            >
              {headerWhatsApp.text}
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

function NavLink({
  item,
  variant = "light",
}: {
  item: (typeof navItems)[number];
  variant?: "light" | "red";
}) {
  const hasChildren = item.children && item.children.length > 0;
  const base =
    variant === "red"
      ? "text-white py-3"
      : "text-black hover:text-brand";
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 text-[15px] font-normal transition-colors",
          base
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
              href={child.href}
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

function MobileMenu({ onClose }: { onClose: () => void }) {
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
            className="h-9 w-auto"
            style={{ height: "2.25rem", width: "auto" }}
          />
          <button aria-label="Close menu" onClick={onClose}>
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <details key={item.text} className="border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-[15px] font-medium">
                <Link href={item.href} onClick={onClose}>
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
                      href={c.href}
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
            href={headerCta.href}
            onClick={onClose}
            className="rounded-[3px] bg-brand px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            {headerCta.text}
          </Link>
          <Link
            href={headerWhatsApp.href}
            onClick={onClose}
            className="rounded-[3px] bg-black px-4 py-2.5 text-center text-sm text-white"
          >
            {headerWhatsApp.text}
          </Link>
        </div>
      </div>
    </div>
  );
}
