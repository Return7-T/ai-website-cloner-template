import { defaultLocale, isLocale, type Locale } from "./config";

/** External or protocol links that must not receive a locale prefix. */
export function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("//")
  );
}

/**
 * Prefix an internal path with the active locale.
 * Leaves external URLs, mailto/tel, and pure hash links unchanged.
 *
 * Examples:
 *   "/", "en" → "/en"
 *   "/concrete-pumps/foo/", "zh" → "/zh/concrete-pumps/foo/"
 *   "#request-quote", "zh" → "#request-quote"
 *   "/#section", "zh" → "/zh#section"
 *   "https://example.com", "zh" → "https://example.com"
 */
export function localizeHref(href: string, locale: Locale): string {
  if (!href) return href;
  if (isExternalHref(href)) return href;
  if (href.startsWith("#")) return href;

  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  let path = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  if (!path) path = "/";

  // Strip any existing locale prefix so switching stays idempotent.
  const parts = path.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    parts.shift();
    path = parts.length ? `/${parts.join("/")}` : "/";
  }

  const hadTrailingSlash = path.endsWith("/") && path !== "/";
  // Normalize path without trailing slash for composition, then restore.
  let bare = path === "/" ? "" : path.replace(/\/+$/, "");

  if (!bare) {
    return `/${locale}${hash}`;
  }

  if (hadTrailingSlash) bare = `${bare}/`;
  return `/${locale}${bare}${hash}`;
}

/** Remove locale prefix from a pathname, returning the bare path. */
export function stripLocaleFromPathname(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    parts.shift();
  }
  return parts.length ? `/${parts.join("/")}` : "/";
}

/** Build the same path under a different locale. */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const bare = stripLocaleFromPathname(pathname);
  // Preserve trailing slash for directory-style routes when present.
  const withSlash =
    pathname.endsWith("/") && bare !== "/" && !bare.endsWith("/")
      ? `${bare}/`
      : bare;
  return localizeHref(withSlash, nextLocale);
}

export function resolveLocale(value: string | undefined | null): Locale {
  if (value && isLocale(value)) return value;
  return defaultLocale;
}
