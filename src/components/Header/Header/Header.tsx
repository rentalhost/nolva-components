"use client";

import { useInViewport } from "@/services/hooks/useInViewport";
import { twMerge } from "@/services/TailwindMergeService";

import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Defines the header positioning behavior.
   *
   * - `static`: positioned according to normal document flow, no special behavior.
   * - `relative`: follows normal flow, supports z-index, not sticky or fixed.
   * - `absolute`: removed from flow, positioned relative to nearest positioned ancestor.
   * - `fixed`: fixed to top of viewport, overlays content, removed from flow.
   * - `sticky`: sticks to top during scroll, retains space in layout, only works in scrollable containers.
   *
   * Elements with `relative` or `absolute` will never trigger `stuck:` state.
   *
   * Default is `relative`.
   */
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";

  /**
   * Detect stick after this position.
   *
   * Defaults to `0`.
   */
  stickAfter?: number;

  /**
   * Custom class name.
   */
  className?: string;

  /**
   * Content of the header.
   */
  children?: ReactNode;
}

export function Header({
  position = "relative",
  stickAfter = 0,
  className,
  children,
}: Props) {
  const { ref, visible } = useInViewport("1px", true);

  const isStuck =
    visible && !["static", "relative", "absolute"].includes(position);

  return (
    <>
      <header
        data-component="Header"
        data-stuck={isStuck || undefined}
        className={twMerge(
          "flex bg-theme-50 inset-x-0 top-0 z-20",
          position,
          className,
        )}
      >
        {children}
      </header>

      <div
        ref={ref}
        className="absolute top-[calc(100vh+var(--offset-y))]"
        style={{ "--offset-y": `${stickAfter}px` } as CSSProperties}
      />
    </>
  );
}
