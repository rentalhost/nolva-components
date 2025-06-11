import { twMerge } from "tailwind-merge";

import type { CSSProperties, ReactNode } from "react";
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
   * The size of the label.
   */
  size?: 3 | 4 | 6 | 8 | 9 | 12;

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
  size = 12,
  titleClassName,
  className,
  children,
  childrenClassName,
}: Props) {
  return (
    <label
      data-component="Label"
      className={twMerge("grid gap-1 col-span-(--size)", className)}
      style={{ "--size": size } as CSSProperties}
    >
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
