import { twMerge } from "tailwind-merge";

import { Section } from "@/components/Primitive/Section/Section";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The id of the hero.
   */
  id?: string;

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

export function Hero({ id, className, backgroundContent, children }: Props) {
  return (
    <Section
      marginY={0}
      id={id}
      data-component="Hero"
      className={twMerge("relative", className)}
    >
      <div
        role="presentation"
        className="pointer-events-none absolute inset-0 select-none"
      >
        {backgroundContent}
      </div>

      <div className="relative">{children}</div>
    </Section>
  );
}
