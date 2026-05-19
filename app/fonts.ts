import localFont from "next/font/local";

export const bauhaus = localFont({
  src: "./font/bauhaus/BAUHAUSM.woff2",
  display: "swap",
  variable: "--font-bauhaus",
});

export const generalSans = localFont({
  src: "./font/GeneralSans-Light.woff2",
  display: "swap",
  variable: "--font-generalsans",
});