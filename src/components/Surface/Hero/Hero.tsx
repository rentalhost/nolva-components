import { twMerge } from "tailwind-merge";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The class name of the hero.
   */
  className?: string;

  /**
   * The content of the background.
   */
  backgroundContent: ReactNode;

  /**
   * The content of the hero.
   */
  children?: ReactNode;
}

export function Hero({ className, backgroundContent, children }: Props) {
  return (
    <section className={twMerge("relative", className)}>
      <div
        role="presentation"
        className="pointer-events-none absolute inset-0 select-none"
      >
        {backgroundContent}
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}
