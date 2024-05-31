import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ParallaxProvider } from 'react-scroll-parallax';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RS Paintings",
  description: "My Paintings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
