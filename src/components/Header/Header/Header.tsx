"use client";

import { useEffect, useRef, useState } from "react";

import { listenScroll } from "@/services/EventService";
import { twMerge } from "@/services/TailwindMergeService";

import type { PropsWithChildren, ReactNode } from "react";

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
  const headerRef = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (["static", "relative"].includes(position)) {
      return;
    }

    return listenScroll(() => {
      setIsSticky(document.scrollingElement!.scrollTop > stickAfter);
    });
  }, [position, stickAfter]);

  return (
    <header
      ref={headerRef}
      data-component="Header"
      data-stuck={isSticky || undefined}
      className={twMerge(
        "flex bg-theme-50 inset-x-0 top-0 z-20",
        position,
        className,
      )}
    >
      {children}
    </header>
  );
}
