import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import NavBar from "../components/nav-bar";
import SpaceBackground from "../components/space-background";
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-55CTMHMV');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <SpaceBackground />
        <div className="relative z-[1] sm:max-w-[60rem] flex flex-col justify-center items-center mx-auto px-4 sm:px-2 pb-2">
        <NextIntlClientProvider>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        </div>
        {/* 👇 Script de Microsoft Clarity */}
        {NODE_ENV === "production" && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u1j1jpvcbb");
            `}
          </Script>
        )}
      </body>
      {NODE_ENV === "production" && <GoogleAnalytics gaId="G-28T9J5L108" />}
    </html>
  );
}
