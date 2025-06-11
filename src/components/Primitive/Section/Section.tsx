import { twMerge } from "tailwind-merge";

import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Container id to be used as anchor.
   */
  id?: string;

  /**
   * Container vertical margin.
   *
   * Default to `16` (4rem).
   */
  marginY?: number;

  /**
   * Container class name.
   */
  className?: string;

  /**
   * Container children.
   */
  children?: ReactNode;
}

export function Section({ id, marginY = 16, className, children }: Props) {
  return (
    <section
      id={id}
      data-component="Section"
      className={twMerge(
        "my-[--spacing(var(--margin-y))] max-mobile:my-[--spacing(var(--margin-y)/2)]",
        className,
      )}
      style={{ "--margin-y": marginY } as CSSProperties}
    >
      {children}
    </section>
  );
}
