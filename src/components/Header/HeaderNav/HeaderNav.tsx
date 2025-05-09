"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import { promisePortal } from "@/services/PortalService";

import type { Resolve } from "@/services/PortalService";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

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
  icon?: ReactNode;

  /**
   * The class name of the icon element.
   */
  iconClassName?: string;

  /**
   * The icon to use for close the menu button.
   *
   * Defaults to `<FaXmark />`.
   */
  closedIcon?: ReactNode;

  /**
   * The class name of the icon element when the menu is closed.
   */
  closedIconClassName?: string;

  /**
   * The children of the opener icon.
   *
   * @param closeHandler A function to close the menu.
   */
  openedModalContent(this: void, closeHandler: () => void): ReactElement;
}

export function HeaderNav({
  navClassName,
  listClassName,
  children,
  icon = <FaBars />,
  iconClassName,
  closedIcon = <FaXmark />,
  closedIconClassName,
  openedModalContent,
}: Props) {
  const navRef = useRef<HTMLDivElement>(null);

  const [mobileMode, setMobileMode] = useState(false);
  const [opened, setOpened] = useState(false);

  const portalResolver = useRef<Resolve<void>>(null);

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
      data-forcing-overlay={opened || undefined}
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
          iconClassName,
          opened && closedIconClassName,
        )}
        onClick={() => {
          setOpened((state) => {
            if (state) {
              portalResolver.current?.();
              portalResolver.current = null;
            } else {
              // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
              void promisePortal<void>((resolver) => {
                portalResolver.current = resolver;

                return openedModalContent(resolver);
              }).then(() => {
                setOpened(false);
              });
            }

            return !state;
          });
        }}
      >
        {opened ? closedIcon : icon}
      </div>
    </nav>
  );
}
