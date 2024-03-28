import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap App",
  description: "Hexleap App made by Hemant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-[#f7f7f8] dark:bg-[#292B32]`}>
        {children}
      </body>
    </html>
  );
}
