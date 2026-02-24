// 'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/lib/theme-context";
// import { type AnimatorGeneralProviderSettings, AnimatorGeneralProvider } from '@arwes/react';
import {convertAniBinaryToCSS} from 'ani-cursor';
import { GoogleAnalytics } from '@next/third-parties/google'


async function applyCursor(selector: string, aniUrl: string | URL | Request) {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
}

applyCursor('.ani-cursor', '/cursors/01.ani');
// const animatorsSettings: AnimatorGeneralProviderSettings = {
//   // Durations in seconds.
//   duration: {
//     enter: 0.2,
//     exit: 0.2,
//     stagger: 0.04
//   }
// };


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soch Technologies - Futuristic Solutions for Modern Businesses",
  description: "Redefine Your Business with Futuristic Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ani-cursor`}
      >
        {/* <AnimatorGeneralProvider {...animatorsSettings}> */}
        <ThemeProvider>
          <GoogleAnalytics gaId="G-D93NGZKGSB" />
          {children}
        </ThemeProvider>
        {/* </AnimatorGeneralProvider> */}
      </body>
    </html>
  );
}
