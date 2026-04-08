import { Fraunces, Montserrat } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fraunces",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
