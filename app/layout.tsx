import type { Metadata } from "next";
import { Fraunces, Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fraunces",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Zia Uddin Bablu",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(montserrat.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
