import "./globals.css";
import { Sofia_Sans } from "next/font/google";
import localFont from "@next/font/local";
import Link from "next/link";
import Navbar from "./components/Navbar";
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

export const metadata = {
  title: "QMIND",
  description: "Student run W club",
};
import styles from "./styles/layout.module.scss";
import Footer from "./components/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${tradeGothic.variable} ${sofia_sans.className} ${styles.mainBgColour} `}
      >
        <Navbar />
        <div className="mt-[140px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
