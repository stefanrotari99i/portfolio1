import { Sora } from "next/font/google";
import localFont from "next/font/local";

export const sora = Sora({ subsets: ["latin-ext"] });

export const neptune = localFont({
  src: "../public/fonts/Neptune.woff2",
  weight: "normal",
  display: "swap",
});

export const graphite = localFont({
  src: [
    {
      path: "../public/fonts/graphite/GraphitePro-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/graphite/GraphitePro-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/graphite/GraphitePro-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/graphite/GraphitePro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/graphite/GraphitePro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/graphite/GraphitePro-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/graphite/GraphitePro-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/graphite/GraphitePro-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});

export const ttnorms = localFont({
  src: [
    {
      path: "../public/fonts/ttnorms/TTNormsPro-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/ttnorms/TTNormsPro-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/ttnorms/TTNormsPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/ttnorms/TTNormsPro-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/ttnorms/TTNormsPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ttnorms/TTNormsPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ttnorms/TTNormsPro-Regular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/ttnorms/TTNormsPro-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});

export const frantz = localFont({
  src: "../public/fonts/TT-Frantz-Variable Trial.ttf",
  display: "swap",
});
