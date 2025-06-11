import { twMerge } from "tailwind-merge";

import type { ReactNode } from "react";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  /**
   * The title of the label.
   */
  title?: ReactNode;

  /**
   * Whether the label is required.
   */
  required?: boolean;

  /**
   * The class name of the title.
   */
  titleClassName?: string;

  /**
   * The class name of the label.
   */
  className?: string;

  /**
   * The content of the label.
   */
  children: ReactNode;

  /**
   * The class name of the children.
   */
  childrenClassName?: string;
}

export function Label({
  title,
  required = false,
  titleClassName,
  className,
  children,
  childrenClassName,
}: Props) {
  return (
    <label className={twMerge("grid gap-1", className)}>
      <span
        className={twMerge(
          "text-sm font-semibold",
          required && "after:text-rose-600 after:content-['_*']",
          titleClassName,
        )}
      >
        {title}
      </span>

      <div className={childrenClassName}>{children}</div>
    </label>
  );
}
