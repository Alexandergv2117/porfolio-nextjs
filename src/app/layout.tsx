import type { Metadata } from "next";
import localFont from "next/font/local";

import NavBar from "./components/nav-bar";
import "./globals.css";
import { KEYWORDS } from "./constants/keywords";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alexandergv2117",
  description: "Porfolio de Alexander Garcia",
  keywords: KEYWORDS,
  authors: {
    name: "Alexander Garcia",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[60rem] relative flex flex-col justify-center items-center mx-auto px-2 pb-2 min-w-[26rem]`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
