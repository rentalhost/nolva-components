import { twMerge } from "tailwind-merge";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The content of the background.
   */
  backgroundContent: ReactNode;

  /**
   * The class name of the background.
   */
  backgroundClassName?: string;

  /**
   * The content of the hero.
   */
  children?: ReactNode;
}

export function Hero({
  backgroundContent,
  backgroundClassName,
  children,
}: Props) {
  return (
    <section className="relative">
      <div
        role="presentation"
        className={twMerge(
          "absolute inset-0 pointer-events-none select-none",
          backgroundClassName,
        )}
      >
        {backgroundContent}
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}
