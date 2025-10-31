import { twMerge } from "@rentalhost/nolva-core";

import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Number of lines.
   */
  lines: number;

  /**
   * Class name.
   */
  className?: string;

  /**
   * Children.
   */
  children?: ReactNode;
}

export function TextClamp({ lines, children, className }: Props) {
  return (
    <div
      data-component="TextClamp"
      className={twMerge("line-clamp-(--lines)", className)}
      style={{ "--lines": lines } as CSSProperties}
    >
      {children}
    </div>
  );
}
