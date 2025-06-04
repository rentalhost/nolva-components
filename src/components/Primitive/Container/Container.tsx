import { twMerge } from "tailwind-merge";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Determines if the container has no padding.
   *
   * By default, the container has a padding of 1rem.
   */
  noPadding?: boolean;

  /**
   * Determines if the container is fluid.
   *
   * It means that the container will take the full width of the screen.
   */
  fluid?: boolean;

  /**
   * Container class name.
   */
  className?: string;

  /**
   * Container children.
   */
  children?: ReactNode;
}

export function Container({
  noPadding = false,
  fluid = false,
  className,
  children,
}: Props) {
  return (
    <div
      className={twMerge(
        "w-full",
        !fluid && "mx-auto max-w-container",
        !noPadding && "px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
