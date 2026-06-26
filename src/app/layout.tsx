import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scrollytelling Portfolio",
  description: "A cinematic developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden w-full max-w-full">
      <body className={`${inter.variable} antialiased bg-[#020202] text-white overflow-x-hidden max-w-full w-full relative`}>
        {children}
      </body>
    </html>
  );
}

