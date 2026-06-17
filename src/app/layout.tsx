import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

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
    title:
      "KEWAN Built for Construction",
    description:
      "KEWAN delivers innovative construction machinery for global projects.",
    url: "http://localhost:3000/",
    siteName: "KEWAN",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground" suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
