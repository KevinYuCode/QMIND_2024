import { Inter, Roboto_Mono, Sofia_Sans, Roboto_Slab } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const sofia_sans = Sofia_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const tradeGothic = localFont({
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

export const kontrapunkt = localFont({
  src: [
    {
      path: "../fonts/Kontrapunkt/Kontrapunkt-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Kontrapunkt/Kontrapunkt-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kontrapunkt",
});
