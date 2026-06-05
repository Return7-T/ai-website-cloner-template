import Link from "next/link";
import { footerColumns, footerMeta } from "@/data/footer";
import { CheckCircle2, MessageCircle, Mail } from "@/components/icons";

function iconFor(text: string) {
  if (text.toLowerCase().includes("whatsapp")) return MessageCircle;
  if (text.toLowerCase().includes("mail") || text.includes("@")) return Mail;
  return CheckCircle2;
}

export function SiteFooter() {
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
                      href={link.href}
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
              href={footerMeta.links[0].href}
              className="underline underline-offset-2 hover:text-white"
            >
              {footerMeta.links[0].text}
            </Link>{" "}
            Technology is a subsidiary of Daswell.{" "}
            <Link
              href={footerMeta.links[1].href}
              className="underline underline-offset-2 hover:text-white"
            >
              {footerMeta.links[1].text}
            </Link>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
