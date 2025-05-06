import { Children, cloneElement, isValidElement } from "react";

import type { JSX, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The variant of the theme.
   */
  variant: Variant;

  /**
   * The content.
   */
  children: ReactNode;
}

type Variant =
  | VariantSemantic
  | "amber"
  | "blue"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "gray"
  | "green"
  | "indigo"
  | "lime"
  | "neutral"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "rose"
  | "sky"
  | "slate"
  | "stone"
  | "teal"
  | "violet"
  | "yellow"
  | "zinc";

type VariantSemantic =
  | "danger"
  | "debug"
  | "error"
  | "info"
  | "success"
  | "warning";

export const variants = {
  // Colors.
  amber: "theme-amber",
  blue: "theme-blue",
  cyan: "theme-cyan",
  emerald: "theme-emerald",
  fuchsia: "theme-fuchsia",
  gray: "theme-gray",
  green: "theme-green",
  indigo: "theme-indigo",
  lime: "theme-lime",
  neutral: "theme-neutral",
  orange: "theme-orange",
  pink: "theme-pink",
  purple: "theme-purple",
  red: "theme-red",
  rose: "theme-rose",
  sky: "theme-sky",
  slate: "theme-slate",
  stone: "theme-stone",
  teal: "theme-teal",
  violet: "theme-violet",
  yellow: "theme-yellow",
  zinc: "theme-zinc",

  // Semantics.
  danger: "theme-red",
  error: "theme-red",
  info: "theme-blue",
  success: "theme-green",
  debug: "theme-purple",
  warning: "theme-orange",
} as Readonly<Record<Variant, `theme-${string}`>>;

function hasClassName(props: unknown): props is { className: string } {
  return props !== null && typeof props === "object" && "className" in props;
}

/**
 * A utility component to change the color of any element based on a variant as theme.
 */
export function Theme({ variant, children }: Props) {
  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as JSX.Element, {
        className: hasClassName(child.props)
          ? `${child.props.className} ${variants[variant]}`
          : variants[variant],
      });
    }

    return child as Awaited<ReactNode>;
  });
}
