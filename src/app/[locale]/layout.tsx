import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import NavBar from "../components/nav-bar";
import "../globals.css";
import { KEYWORDS } from "../constants/keywords";
import Footer from "../components/footer";
import { NODE_ENV } from "../constants/env";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alexandergv2117",
  keywords: KEYWORDS,
  authors: {
    name: "Alexander Garcia",
  },
  robots: "index, follow",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:max-w-[60rem] relative flex flex-col justify-center items-center mx-auto px-4 sm:px-2 pb-2`}
      >
        <NextIntlClientProvider>
          <NavBar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
      {NODE_ENV === "production" && <GoogleAnalytics gaId="G-VNQRKJDSSE" />}
    </html>
  );
}
