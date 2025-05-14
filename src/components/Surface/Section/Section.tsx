import { twMerge } from "tailwind-merge";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Determines if the container has no margin.
   *
   * By default, the container has a margin of 4rem and mobile margin of 2rem.
   */
  noMargin?: boolean;

  /**
   * Container class name.
   */
  className?: string;

  /**
   * Container children.
   */
  children?: ReactNode;
}

export function Section({ noMargin = false, className, children }: Props) {
  return (
    <section className={twMerge(!noMargin && "my-16 max-md:my-8", className)}>
      {children}
    </section>
  );
}
