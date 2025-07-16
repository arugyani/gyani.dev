import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { FC, HTMLProps } from "react";

import cn from "clsx";

/** TODO
 *    1) Finish styling all headings
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: Record<string, FC<any>> = {
  h1: (props: HTMLProps<HTMLHeadingElement>) => (
    <h1
      className="font-bold mb-7 text-balance text-lapis-600 dark:text-light"
      {...props}
    />
  ),
  h2: (props: HTMLProps<HTMLHeadingElement>) => <h2 {...props} />,
  h3: (props: HTMLProps<HTMLHeadingElement>) => <h3 {...props} />,
  p: (props: HTMLProps<HTMLParagraphElement>) => (
    <p className="mt-7" {...props} />
  ),
  a: ({ href, ...props }) => {
    return (
      <Link
        className={cn(
          "break-words decoration-from-font",
          "underline underline-offset-2",
          "decoration-lapis-400 hover:decoration-lapis-600 dark:decoration-lapis-200 dark:hover:decoration-lapis-100",
          "focus:outline-none focus-visible:rounded-xs focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-opacity-50 focus-visible:ring-offset-2"
        )}
        href={href}
        draggable={false}
        {...(href?.startsWith("https://")
          ? {
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {})}
        {...props}
      />
    );
  },
  blockquote: (props: HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="pl-6 -ml-6 sm:pl-10 sm:-ml-10 md:pl-14 md:-ml-14 text-lapis-400"
      {...props}
    />
  ),
};

export function useMDXComponents(inherited: MDXComponents): MDXComponents {
  return {
    ...inherited,
    ...components,
  };
}
