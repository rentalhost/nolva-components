"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { listenScroll } from "@/services/EventService";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Sticky the header on top.
   *
   * When header is stuck, Tailwind variant `stuck:` will be available.
   *
   * Example: (header) `group` > (element) `group-stuck:text-blue-400`.
   *
   * Defaults to `false`.
   */
  sticky?: boolean;

  /**
   * Custom class name.
   */
  className?: string;

  /**
   * Content of the header.
   */
  children?: ReactNode;
}

export function Header({ sticky = false, className, children }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState(false);

  useLayoutEffect(() => {
    if (!sticky) {
      return;
    }

    const { unload } = listenScroll(() => {
      setIsSticky(document.scrollingElement!.scrollTop > 0);
    });

    return unload;
  }, [sticky]);

  return (
    <header
      ref={headerRef}
      data-stuck={isSticky || undefined}
      className={twMerge(
        "flex bg-theme-50 inset-x-0",
        sticky && "sticky top-0 z-20",
        className,
      )}
    >
      {children}
    </header>
  );
}
