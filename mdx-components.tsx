import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { FC } from "react";

/** TODO
 *    1) Finish styling all headings
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: Record<string, FC<any>> = {
  h1: (props) => (
    <h1 className="font-semibold mb-7 text-lapis-600 text-balance" {...props} />
  ),
  h2: (props) => (
    <h2
      className="font-semibold mt-14 mb-7 text-lapis-600 text-balance"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-semibold mt-14 mb-7 text-lapis-600 text-balance"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-7 list-disc list-outside marker:text-lapis-200 pl-5"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-7 list-decimal list-outside marker:text-lapis-200 pl-5"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1.5" {...props} />,
  a: ({ href, ...props }) => {
    return (
      <Link
        className="break-words decoration-from-font underline underline-offset-2 decoration-lapis-300 hover:decoration-lapis-600 focus:outline-none focus-visible:rounded-xs focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-opacity-50 focus-visible:ring-offset-2"
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
  strong: (props) => <strong className="font-bold" {...props} />,
  p: (props) => <p className="mt-7" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="pl-6 -ml-6 sm:pl-10 sm:-ml-10 md:pl-14 md:-ml-14 text-lapis-400 border-l border-lapis-900"
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="mt-7 whitespace-pre md:whitespace-pre-wrap" {...props} />
  ),
};
export function useMDXComponents(inherited: MDXComponents): MDXComponents {
  return {
    ...inherited,
    ...components,
  };
}
