import { MDXComponents } from "mdx/types";
import { FC } from "react";

export const components: Record<string, FC<HTMLElement>> = {};

export function useMDXComponents(inherited: MDXComponents): MDXComponents {
  return {
    ...inherited,
    ...components,
  };
}
