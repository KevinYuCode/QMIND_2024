import "./globals.scss";
import { Sofia_Sans } from "next/font/google";
import { kontrapunkt, tradeGothic } from "./font";
import Navbar from "./components/Navbar";
import styles from "./styles/layout.module.scss";
import Footer from "./components/Footer";
import { useState } from "react";
import type { Metadata } from "next";
import { GlobalContextProvider } from "./Context/store";

const sofia_sans = Sofia_Sans({ subsets: ["latin"], variable: "--font-sofia" });

export const metadata: Metadata = {
  title: "QMIND - Queens AI Hub",
  description:
    "QMIND is Canada’s largest student-run organization. We empower undergraduate student’s at Queen’s University to tackle real-world problems through the use of artificial intelligence, machine learning, and various other disruptive technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="shortcut icon"
            href="%PUBLIC_URL%/cropped-New-QMIND-Logo-32x32.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://www.qmind.ca" />
          <meta name="theme-color" content="#000000" />
          <meta
            property="og:image"
            content="https://qmind.ca/2023_Preview_Image.png"
          ></meta>
        </head>

        <body
          className={`${tradeGothic.variable} ${sofia_sans.className} ${
            kontrapunkt.variable
          } ${"w-[100dvw] h-[100dvh]"} ${styles.mainBgColour}`}
        >
          <div className="flex flex-col w-[100dvw] h-[100dvh] overflow-y-scroll overflow-x-hidden">
            <GlobalContextProvider>
              <Navbar />
              <div className="pt-[72px] md:pt-[100px]">{children}</div>
            </GlobalContextProvider>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
