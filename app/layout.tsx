import type { Metadata } from "next";
import localFont from "next/font/local";
import cn from "clsx";

import "./globals.css";

const sans = localFont({
  src: "./_fonts/OpenSansVariable.woff2",
  preload: true,
  variable: "--sans",
});

const serif = localFont({
  src: "./_fonts/NotoSerifVariable.woff2",
  preload: true,
  variable: "--serif",
});

const mono = localFont({
  src: "./_fonts/InconsolataVariable.woff2",
  preload: true,
  variable: "--mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Aru Gyani",
    default: "Aru Gyani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          sans.variable,
          serif.variable,
          mono.variable,
          "w-full p-6 sm:p-10 md:p-14",
          "text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7",
          "text-500",
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
