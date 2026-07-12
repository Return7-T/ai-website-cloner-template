import Link from "next/link";
import { CheckCircle2, MessageCircle, Mail } from "@/components/icons";
import type { FooterContent } from "@/data/get-content";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/path";

function iconFor(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("whatsapp")) return MessageCircle;
  if (lower.includes("mail") || text.includes("@")) return Mail;
  return CheckCircle2;
}

type Props = {
  locale: Locale;
  footer: FooterContent;
};

export function SiteFooter({ locale, footer }: Props) {
  const { footerColumns, footerMeta } = footer;
  return (
    <footer className="bg-footer text-offwhite">
      <div className="ds-container-wide py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((col) => (
            <ul key={col.heading} className="space-y-3">
              {col.links.map((link) => {
                const Icon = iconFor(link.text);
                return (
                  <li key={link.text}>
                    <Link
                      href={localizeHref(link.href, locale)}
                      className="flex items-center gap-2.5 text-[15px] text-offwhite/90 transition-colors hover:text-white"
                    >
                      <Icon size={18} className="shrink-0 opacity-80" />
                      <span className="underline underline-offset-2">
                        {link.text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="ds-container-wide flex flex-col gap-1 py-5 text-sm text-offwhite/80 sm:flex-row sm:items-center sm:gap-4">
          <span>{footerMeta.copyright}</span>
          <span>
            <Link
              href={localizeHref(footerMeta.links[0].href, locale)}
              className="underline underline-offset-2 hover:text-white"
            >
              {footerMeta.links[0].text}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
