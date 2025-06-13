"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

import { listenWindowEvent } from "@/services/EventService";
import { useImmediateRef } from "@/services/hooks/useImmediateRef";
import { promisePortal } from "@/services/PortalService";
import { twMerge } from "@/services/TailwindMergeService";

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

  const [mobileMode, setMobileMode] = useState(true);
  const [opened, setOpened] = useState(false);

  const portalResolver = useRef<Resolve<void>>(null);

  const close = useCallback(() => {
    setOpened((state) => {
      if (state) {
        portalResolver.current?.();
        portalResolver.current = null;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        void promisePortal<void>((resolver) => {
          portalResolver.current = resolver;

          return (
            <div className="contents" data-overlay>
              {openedModalContent(resolver)}
            </div>
          );
        }).then(() => {
          setOpened(false);
        });
      }

      return !state;
    });
  }, [openedModalContent]);

  const closeRef = useImmediateRef(close);
  const openedRef = useImmediateRef(opened);

  useEffect(() => {
    const unload = listenWindowEvent(["resize", "transitionend"], (ev) => {
      if (ev.type === "resize" && openedRef.current) {
        closeRef.current();
      }

      setMobileMode(navRef.current!.scrollWidth > navRef.current!.clientWidth);
    });

    const unloadClick = listenWindowEvent(
      "click",
      (ev) => {
        if (
          ev.target instanceof Element &&
          ev.target.tagName === "A" &&
          ev.target.closest("[data-overlay]")
        ) {
          closeRef.current();
        }
      },
      false,
    );

    return () => {
      unload();
      unloadClick();
    };
  }, [closeRef, openedRef]);

  const iconVisible = useMemo(() => mobileMode || opened, [mobileMode, opened]);

  return (
    <nav
      ref={navRef}
      data-forcing-overlay={opened || undefined}
      data-component="HeaderNav"
      className={twMerge(
        "overflow-hidden text-nowrap relative flex",
        navClassName,
      )}
    >
      <ul
        className={twMerge(
          "flex items-center justify-between gap-x-6 flex-nowrap transition",
          iconVisible && "opacity-0 pointer-events-none",
          listClassName,
        )}
      >
        {children}
      </ul>

      <div
        className={twMerge(
          "transition select-none absolute right-0 inset-y-0 flex items-center justify-center",
          !iconVisible && "opacity-0 pointer-events-none",
          iconClassName,
          opened && closedIconClassName,
        )}
        onClick={() => {
          close();
        }}
      >
        <div className="border-theme-200 bg-theme-200/50 active:bg-theme-300/50 hover:border-theme-300 active:border-theme-400 cursor-pointer rounded-full border p-2 transition">
          {opened ? closedIcon : icon}
        </div>
      </div>
    </nav>
  );
}
