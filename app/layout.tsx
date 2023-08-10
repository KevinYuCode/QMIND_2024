"use client";
import "./globals.css";
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
    <html lang="en">
      <body
        className={`${tradeGothic.variable} ${sofia_sans.className} ${styles.mainBgColour} `}
      >
        <div className="flex flex-col w-[100dvw] h-[100dvh] overflow-scroll">
          <Navbar navOn={navOn} setNavOn={setNavOn} />
          <div className="pt-[80px] md:pt-[100px]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
