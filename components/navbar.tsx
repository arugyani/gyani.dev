"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

import cn from "clsx";

const Item = (props: ComponentProps<typeof Link>) => {
  const pathname = usePathname();
  const href = props.href;

  if (typeof href !== "string") {
    throw new Error("`href` must be a string");
  }

  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <li
      className={cn(
        isActive
          ? "text-lapis-800 dark:text-light"
          : "text-lapis-300 hover:text-lapis-600 dark:text-lapis-200 dark:hover:text-lapis-100",
        "transition-colors hover:transform-none",
        "-mx-2"
      )}
    >
      <Link
        {...props}
        className="inline-block w-full px-2 text-serif"
        draggable={false}
      />
    </li>
  );
};

export default function Navbar() {
  return (
    <nav className="mobile:mr-6 sm:mr-10 md:mr-14 w-full mobile:w-16">
      <ul className="italic lowercase text-right mobile:sticky top-6 sm:top-10 md:top-14 mb-6 mobile:mb-0 flex gap-2 justify-end mobile:block">
        <Item href="/">Home</Item>
        <Item href="/notes">Notes</Item>
        <Item href="/projects">Projects</Item>
      </ul>
    </nav>
  );
}
