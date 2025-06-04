import { twMerge } from "tailwind-merge";

import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Container id to be used as anchor.
   */
  id?: string;

  /**
   * Determines if the container has no margin.
   *
   * By default, the container has a margin of 4rem and mobile margin of 2rem.
   */
  margin?: number;

  /**
   * Container class name.
   */
  className?: string;

  /**
   * Container children.
   */
  children?: ReactNode;
}

export function Section({ id, margin = 16, className, children }: Props) {
  return (
    <section
      id={id}
      className={twMerge(
        "my-[--spacing(var(--margin))] max-md:my-[--spacing(var(--margin)/2)]",
        className,
      )}
      style={{ "--margin": margin } as CSSProperties}
    >
      {children}
    </section>
  );
}
