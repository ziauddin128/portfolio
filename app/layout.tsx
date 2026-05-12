import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { montserrat } from "@/components/Shared/Font";

export const metadata: Metadata = {
  title: "Zia Uddin Bablu",
  description: "Portfolio of Zia Uddin Bablu",
  icons: {
    icon: "/images/zia-uddin-bablu.png",
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
      className={cn(montserrat.className)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
