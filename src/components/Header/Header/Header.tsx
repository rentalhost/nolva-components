"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { listenScroll } from "@/services/EventService";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Defines the header positioning behavior.
   *
   * - `static`: the header is placed according to the normal document flow (not sticky or fixed).
   * - `absolute`: the header is positioned relative to its normal position and overlays the page content.
   * - `fixed`: the header is fixed to the top of the viewport and overlays the page content.
   * - `sticky`: the header remains at the top of the viewport as you scroll, but retains its space in the layout.
   *
   * When `static` or `absolute`, elements will never be considered as `stuck:`.
   *
   * Default is `static`.
   */
  position?: "absolute" | "fixed" | "static" | "sticky";

  /**
   * Custom class name.
   */
  className?: string;

  /**
   * Content of the header.
   */
  children?: ReactNode;
}

export function Header({ position = "static", className, children }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (position === "static" || position === "absolute") {
      return;
    }

    const { unload } = listenScroll(() => {
      setIsSticky(document.scrollingElement!.scrollTop > 0);
    });

    return unload;
  }, [position]);

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
