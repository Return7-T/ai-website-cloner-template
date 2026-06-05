import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daswell: Your Partner For Construction & Powder Processing Equipment",
  description:
    "Daswell delivers innovative construction machinery and powder processing systems.",
  metadataBase: new URL("https://daswell.com"),
  icons: {
    icon: [
      { url: "/seo/cropped-8011448-32x32.jpg", sizes: "32x32" },
      { url: "/seo/cropped-8011448-192x192.jpg", sizes: "192x192" },
    ],
    apple: "/seo/cropped-8011448-180x180.jpg",
  },
  openGraph: {
    title:
      "Daswell: Your Partner For Construction & Powder Processing Equipment",
    description:
      "Daswell delivers innovative construction machinery and powder processing systems.",
    url: "https://daswell.com/",
    siteName: "DASWELL",
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
    <html lang="en-US" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
