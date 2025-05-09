"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The class name of the nav element.
   */
  navClassName?: string;

  /**
   * The class name of the component.
   */
  listClassName?: string;

  /**
   * The children of the component.
   * Typically a list of menu items.
   */
  children?: ReactNode;

  /**
   * The icon to use for open the menu button.
   *
   * Defaults to `<FaBars />`.
   */
  openerIcon?: ReactNode;

  /**
   * The class name of the menu button.
   */
  openerIconClassName?: string;

  /**
   * Called when the menu button is clicked.
   */
  onOpenerIconClick(this: void): void;
}

export function HeaderNav({
  navClassName,
  listClassName,
  children,
  openerIcon = <FaBars />,
  openerIconClassName,
  onOpenerIconClick,
}: Props) {
  const navRef = useRef<HTMLDivElement>(null);
  const [mobileMode, setMobileMode] = useState(false);

  useLayoutEffect(() => {
    function resizeObserver() {
      setMobileMode(navRef.current!.scrollWidth > navRef.current!.clientWidth);
    }

    addEventListener("resize", resizeObserver);
    addEventListener("transitionend", resizeObserver);
    resizeObserver();

    return () => {
      removeEventListener("resize", resizeObserver);
      removeEventListener("transitionend", resizeObserver);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={twMerge("overflow-hidden text-nowrap", navClassName)}
    >
      <ul
        className={twMerge(
          "flex items-center justify-between gap-x-6 max-sm:hidden",
          mobileMode && "hidden",
          listClassName,
        )}
      >
        {children}
      </ul>

      <div
        className={twMerge(
          "rounded-full border border-theme-200 p-2 hover:border-theme-300 active:border-theme-400 transition bg-theme-200/50 active:bg-theme-300/50 select-none cursor-pointer",
          !mobileMode && "sm:hidden",
          openerIconClassName,
        )}
        onClick={onOpenerIconClick}
      >
        {openerIcon}
      </div>
    </nav>
  );
}
