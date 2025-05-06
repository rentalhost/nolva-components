import { cloneElement } from "react";
import { twMerge } from "tailwind-merge";

import type { PropsWithChildren } from "react";
import type { JSX } from "react/jsx-runtime";

interface Props extends PropsWithChildren {
  disabled?: boolean;
  fill?: "outline" | "solid" | "transparent";
  asChild?: boolean;
  className?: string;
}

export function Button({
  disabled = false,
  fill = "solid",
  className,
  asChild = false,
  children,
}: Props) {
  const buttonClassName = twMerge(
    "inline-block",
    "bg-theme-600 text-theme-50 p-3 px-5 border border-theme-700 transition rounded select-none",
    "theme-outline:bg-theme-50 theme-outline:border-theme-200 theme-outline:text-theme-900",
    "theme-transparent:bg-transparent theme-transparent:border-transparent theme-transparent:text-theme-900 theme-transparent:not-disabled:shadow-none theme-transparent:hover:bg-theme-50",
    "theme-solid:hover:brightness-115 active:brightness-90",
    "theme-outline:hover:brightness-103 theme-outline:active:brightness-97",
    "theme-transparent:active:brightness-97",
    "disabled:bg-theme-50 disabled:text-theme-200 disabled:border-theme-50 disabled:pointer-events-none",
    "not-disabled:shadow theme-transparent:disabled:bg-transparent theme-transparent:disabled:border-transparent",
    className,
  );

  if (asChild) {
    return cloneElement(children as JSX.Element, {
      "data-theme": fill,
      className: buttonClassName,
      disabled,
    });
  }

  return (
    <button
      type="button"
      disabled={disabled}
      data-theme={fill}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}
