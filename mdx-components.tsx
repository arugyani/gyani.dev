import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { FC, ReactElement } from "react";

/** TODO
 *    1) Finish styling all headings
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: Record<string, FC<any>> = {
  h1: (props) => (
    <h1
      className="font-bold mb-4 text-lapis-600 dark:text-lapis-100 text-balance text-xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-semibold mt-7 mb-2 text-lapis-600 dark:text-lapis-100 text-balance text-lg"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-semibold mt-7 mb-2 text-lapis-600 dark:text-lapis-100 text-balance text-md"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-4 list-disc list-outside marker:text-lapis-200 pl-5"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-4 list-decimal list-outside marker:text-lapis-200 pl-5"
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
  p: (props) => <p className="mb-4 dark:text-lapis-100" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="text-xs sm:text-sm pl-6 -ml-6 sm:pl-10 sm:-ml-10 md:pl-14 md:-ml-14 text-lapis-400 border-l-2 border-lapis-900 dark:border-light"
      {...props}
    />
  ),
  pre: (props) => {
    const child = props.children as
      | ReactElement<{ className?: string }>
      | undefined;
    const language = child?.props?.className?.replace("language-", "") ?? "";

    return (
      <div className="relative my-7">
        <pre
          className="
            whitespace-pre md:whitespace-pre-wrap
            rounded-xl border
            px-4 py-3
            overflow-x-auto
            text-sm font-mono leading-relaxed
            bg-lapis-50 text-lapis-800 border-lapis-border
            dark:bg-lapis-900 dark:text-lapis-100 dark:border-lapis-700"
          {...props}
        />
        {language && (
          <span className="absolute top-2 right-3 rounded-md px-2 py-0.5 text-xs font-medium text-lapis-500 dark:text-lapis-200 select-none">
            {language.toUpperCase()}
          </span>
        )}
      </div>
    );
  },
};
export function useMDXComponents(inherited: MDXComponents): MDXComponents {
  return {
    ...inherited,
    ...components,
  };
}
