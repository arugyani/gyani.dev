import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import cn from "clsx";

import "./globals.css";
import Navbar from "@/components/navbar";

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

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden touch-manipulation">
      <body
        className={cn(
          sans.variable,
          serif.variable,
          mono.variable,
          "w-full p-6 sm:p-10 md:p-14",
          "bg-light dark:bg-lapis-900",
          "text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7",
          "text-500 text-lapis-600 dark:text-light",
          "antialiased"
        )}
      >
        <div className="flex flex-col mobile:flex-row">
          <Navbar />
          <main className="relative flex-1 max-w-2xl [contain:inline-size]">
            <div className="absolute w-full h-px opacity-50 bg-lapis-border dark:bg-lapis-600 right-0 mobile:right-auto mobile:left-0 mobile:w-px mobile:h-full mobile:opacity-100" />
            <article className="pl-0 pt-6 mobile:pt-0 mobile:pl-6 sm:pl-10 md:pl-14">
              {children}
            </article>
          </main>
        </div>
      </body>
    </html>
  );
}
