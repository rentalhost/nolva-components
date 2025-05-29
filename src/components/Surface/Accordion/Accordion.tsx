"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The class name of the accordion.
   */
  className?: string;

  /**
   * The title of the accordion.
   */
  title: ReactNode;

  /**
   * The class name of the title.
   */
  titleClassName?: string;

  /**
   * Whether the accordion is opened initially.
   */
  opened?: boolean;

  /**
   * The content of the accordion.
   */
  children: ReactNode;

  /**
   * The class name of the children.
   */
  childrenClassName?: string;
}

export function Accordion({
  className,
  title,
  titleClassName,
  opened = false,
  children,
  childrenClassName,
}: Props) {
  const [stateOpened, setStateOpened] = useState(opened);

  return (
    <div
      data-opened={stateOpened || undefined}
      className={twMerge("bg-theme-50 flex flex-col rounded-lg", className)}
    >
      <div
        className={twMerge(
          "text-theme-600 bg-theme-50 active:bg-theme-200 hover:brightness-97 grid cursor-pointer select-none grid-cols-[1fr_auto] items-center rounded-lg p-4 px-6 text-lg font-semibold transition",
          titleClassName,
        )}
        onClick={() => {
          setStateOpened(!stateOpened);
        }}
      >
        <h2 className="select-text">{title}</h2>

        <FaAngleDown
          size={24}
          className={twMerge(
            "flex cursor-pointer items-center transition pointer-events-none",
            stateOpened && "rotate-180",
          )}
        />
      </div>

      {stateOpened && (
        <div
          className={twMerge(
            "starting:opacity-0 starting:-translate-y-1/4 text-theme-500 transition-all border-t-theme-300 mx-6 border-t py-4",
            childrenClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
