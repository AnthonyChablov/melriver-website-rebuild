import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Intro from "@/components/Intro/Intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melriver –  we create, manage and grow brands.",
  description:
    "Melriver crafts outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
