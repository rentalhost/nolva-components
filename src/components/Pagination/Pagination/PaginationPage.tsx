"use client";

import { twMerge } from "@rentalhost/nolva-core";
import { useEffect, useState } from "react";

import type { ReactNode } from "react";

import { appendQueryString } from "@/services/UrlService";

interface Props {
  page: number;
  queryString?: string;
  isCurrent?: boolean;
  isSpread?: boolean;
  isDisabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick(this: void, page: number): void;
}

export function PaginationPage({
  page,
  queryString,
  isCurrent,
  isSpread,
  isDisabled,
  children,
  className,
  onClick,
}: Props) {
  const [route, setRoute] = useState<string>();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRoute(
      queryString === undefined
        ? undefined
        : appendQueryString(queryString, String(page)),
    );
  }, [page, queryString]);

  return (
    <a
      href={route}
      data-component="PaginationPage"
      data-active={isCurrent === true || isSpread === true ? true : undefined}
      data-active-spread={isSpread === true ? true : undefined}
      data-disabled={isDisabled === true ? true : undefined}
      className={twMerge(
        "bg-theme-100 border border-theme-200 flex aspect-square items-center justify-center rounded-full hover:bg-theme-200 hover:border-theme-300 active:brightness-90 transition cursor-pointer select-none data-active:bg-theme-300 data-active:border-theme-400 hover:data-active:bg-theme-400 hover:data-active:border-theme-500 w-8 data-active:font-bold data-disabled:pointer-events-none data-disabled:opacity-25",
        className,
      )}
      onClick={() => {
        onClick(page);
      }}
    >
      {children}
    </a>
  );
}
