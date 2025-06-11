import { twMerge } from "tailwind-merge";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The variant of the theme.
   */
  variant: Variant | (string & {});

  /**
   * The content.
   */
  children: ReactNode;
}

export type Variant =
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

function isBuildInVariant(variant: string): variant is Variant {
  return variant in variants;
}

/**
 * A utility component to change the color of any element based on a variant as theme.
 */
export function Theme({ variant, children }: Props) {
  return (
    <div
      data-component="Theme"
      className={twMerge(
        "contents",
        isBuildInVariant(variant) ? variants[variant] : `theme-${variant}`,
      )}
    >
      {children}
    </div>
  );
}
