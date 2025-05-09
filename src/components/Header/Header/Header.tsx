"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

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

    const header = headerRef.current!;
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry!.isIntersecting);
      },
      { threshold: [1] },
    );

    headerObserver.observe(header);

    return () => {
      headerObserver.disconnect();
    };
  }, [sticky]);

  return (
    <header
      ref={headerRef}
      data-stuck={isSticky || undefined}
      className={twMerge(
        "flex items-center justify-center bg-theme-50",
        sticky && "sticky -top-[1px] mt-[1px] z-10 inset-x-0",
        className,
      )}
    >
      {children}
    </header>
  );
}
