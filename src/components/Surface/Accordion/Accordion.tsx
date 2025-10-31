"use client";

import { twMerge } from "@rentalhost/nolva-core";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The class name of the accordion.
   */
  className?: string;

  /**
   * The class name of the header.
   */
  headerClassName?: string;

  /**
   * The title of the accordion.
   */
  title: ReactNode;

  /**
   * The kind of the title.
   */
  titleKind?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * The class name of the title.
   */
  titleClassName?: string;

  /**
   * The class name of the icon.
   */
  iconClassName?: string;

  /**
   * Whether the accordion is opened initially.
   */
  opened?: boolean;

  /**
   * The content of the accordion.
   */
  children: ReactNode;

  /**
   * The class name of the body (children).
   */
  bodyClassName?: string;
}

export function Accordion({
  className,
  headerClassName,
  title,
  titleKind: TitleKind = "div",
  titleClassName,
  iconClassName,
  opened = false,
  bodyClassName,
  children,
}: Props) {
  const [stateOpened, setStateOpened] = useState(opened);

  return (
    <div
      data-component="Accordion"
      data-opened={stateOpened || undefined}
      className={twMerge("bg-theme-50 flex flex-col rounded-lg", className)}
    >
      <div
        className={twMerge(
          "text-theme-600 bg-theme-50 active:bg-theme-200 hover:brightness-97 grid cursor-pointer select-none grid-cols-[1fr_auto] items-center rounded-lg p-4 px-6 text-lg font-semibold transition",
          headerClassName,
        )}
        onClick={() => {
          setStateOpened(!stateOpened);
        }}
      >
        <TitleKind className={titleClassName}>{title}</TitleKind>

        <FaAngleDown
          size={24}
          className={twMerge(
            "flex cursor-pointer items-center transition pointer-events-none",
            stateOpened && "rotate-180",
            iconClassName,
          )}
        />
      </div>

      {stateOpened && (
        <div
          className={twMerge(
            "starting:opacity-0 starting:-translate-y-1/4 text-theme-500 transition-all border-t-theme-300 mx-6 border-t py-4",
            bodyClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
