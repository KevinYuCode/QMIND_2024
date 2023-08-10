"use client";
import "./globals.scss";
import { Sofia_Sans } from "next/font/google";
import localFont from "@next/font/local";
import Link from "next/link";
import Navbar from "./components/Navbar";
import styles from "./styles/layout.module.scss";
import Footer from "./components/Footer";
import { useState } from "react";

const sofia_sans = Sofia_Sans({ subsets: ["latin"], variable: "--font-sofia" });

// const sofiaSans =
const tradeGothic = localFont({
  src: [
    {
      path: "../fonts/TradeGothic/trade-gothic-400-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TradeGothic/trade-gothic-700-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-trade-gothic",
});

// export const metadata = {
//   title: "QMIND",
//   description: "QMIND is Canada's largest student-run organization. We empower undergraduate student's at Queen's University to tackle real-world problems through the use ...",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOn, setNavOn] = useState(false);
  return (
    <>
      <head>
        <link
          rel="shortcut icon"
          href="%PUBLIC_URL%/cropped-New-QMIND-Logo-32x32.png"
        />
        <meta />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>QMIND - Queens AI Hub</title>
        <meta property="og:title" content="QMIND - Queens AI Hub" />
        <meta
          name="description"
          property="og:description"
          content="QMIND is Canada’s largest student-run organization. We empower undergraduate student’s at Queen’s University to tackle real-world problems through the use of artificial intelligence, machine learning, and various other disruptive technologies."
        />
        <meta
          property="og:image"
          content="https://www.qmind.ca/preview_logo.jpg"
        />
        <meta property="og:url" content="https://www.qmind.ca" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <html lang="en">
        <body
          className={`${tradeGothic.variable} ${
            sofia_sans.className
          } ${"w-[100dvw] h-[100dvh]"} ${styles.mainBgColour}`}
        >
          <div className="flex flex-col w-[100dvw] h-[100dvh] overflow-scroll">
            <Navbar navOn={navOn} setNavOn={setNavOn} />
            <div className="pt-[100px]">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
