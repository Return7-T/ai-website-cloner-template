import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "KEWAN Built for Construction",
  description:
    "KEWAN delivers innovative construction machinery for global projects.",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: [
      { url: "/seo/kewan-favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/kewan-favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/seo/kewan-favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/seo/kewan-apple-touch.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "KEWAN Built for Construction",
    description:
      "KEWAN delivers innovative construction machinery for global projects.",
    url: "http://localhost:3000/",
    siteName: "KEWAN",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    languages: {
      en: "/en",
      zh: "/zh",
      "x-default": "/en",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const raw = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = raw && isLocale(raw) ? raw : defaultLocale;
  const htmlLang = locale === "zh" ? "zh-CN" : "en";

  return (
    <html lang={htmlLang} className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground" suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
