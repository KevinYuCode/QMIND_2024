"use client";
import "./globals.scss";
import { Roboto_Slab, Sofia_Sans } from "next/font/google";
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

        {/* Meta Tags */}
        <meta />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.qmind.ca" />
        <meta
          property="og:image"
          content="https://qmind.ca/2023_Preview_Image.png"
        ></meta>
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="QMIND - Queens AI Hub" />
        <meta
          property="og:description"
          content="QMIND is Canada’s largest student-run organization. We empower undergraduate student’s at Queen’s University to tackle real-world problems through the use of artificial intelligence, machine learning, and various other disruptive technologies."
        />

        {/* Title */}
        <title>QMIND - Queens AI Hub</title>
      </head>
      <html lang="en">
        <body
          className={`${tradeGothic.variable} ${
            sofia_sans.className
          } ${"w-[100dvw] h-[100dvh]"} ${styles.mainBgColour}`}
        >
          <div className="flex flex-col w-[100dvw] h-[100dvh] overflow-scroll">
            <Navbar navOn={navOn} setNavOn={setNavOn} />
            <div className="pt-[72px] md:pt-[100px]">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
