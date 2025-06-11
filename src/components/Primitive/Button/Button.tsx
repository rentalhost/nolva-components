import { cloneElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

import type { PropsWithChildren } from "react";
import type { JSX } from "react/jsx-runtime";

interface Props extends PropsWithChildren {
  /**
   * Determines if the button is disabled.
   */
  disabled?: boolean;

  /**
   * Specifies the fill style of the button.
   * Can be "outline", "solid", or "transparent".
   *
   * Defaults to "solid".
   */
  fill?: "outline" | "solid" | "transparent";

  /**
   * If true, the button will render as a child element.
   */
  asChild?: boolean;

  /**
   * Additional CSS classes to apply to the button.
   */
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
    "inline-flex gap-x-2 items-center justify-center",
    "bg-theme-600 text-theme-50 p-2 px-4 border border-theme-700 transition rounded select-none cursor-pointer",
    "theme-outline:bg-theme-50 theme-outline:border-theme-200 theme-outline:text-theme-900",
    "theme-transparent:bg-transparent theme-transparent:border-transparent theme-transparent:text-theme-900 theme-transparent:not-disabled:shadow-none theme-transparent:hover:bg-theme-50",
    "theme-solid:hover:brightness-115 theme-solid:active:brightness-90",
    "theme-outline:hover:brightness-103 theme-outline:active:brightness-97",
    "theme-transparent:active:brightness-97",
    "disabled:bg-theme-50 disabled:text-theme-200 disabled:border-theme-50 disabled:pointer-events-none",
    "not-disabled:shadow theme-transparent:disabled:bg-transparent theme-transparent:disabled:border-transparent",
    "[&>svg]:min-h-lh",
    className,
  );

  if (asChild && isValidElement(children)) {
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
      data-component="Button"
      data-theme={fill}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}
