"use client";

import { clamp, noop } from "@rentalhost/nolva-core";
import { useMemo } from "react";
import { FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";

import { PaginationPage } from "@/components/Pagination/Pagination/PaginationPage";
import { circularRange, paginate } from "@/services/ArrayService";
import { twMerge } from "@/services/TailwindMergeService";

import type { ComponentProps } from "react";

interface Props {
  /**
   * The current page.
   */
  current: number;

  /**
   * The total number of pages.
   */
  total: number;

  /**
   * The maximum number of visible pages.
   *
   * Defaults to `undefined` (unlimited).
   */
  visibleCount?: number;

  /**
   * The number of additional active elements after the current page (not inclusive).
   */
  spread?: number;

  /**
   * The query string to append to the URL.
   *
   * Defaults to `undefined` (no query string).
   */
  queryString?: string;

  /**
   * The class name of the container element.
   */
  className?: string;

  /**
   * The class name of each page element.
   */
  pageClassName?: string;

  /**
   * Whether to show the previous/next buttons.
   *
   * Defaults to `true`.
   */
  previousNext?: boolean;

  /**
   * Whether to show the first/last buttons.
   *
   * Defaults to `true`.
   */
  firstLast?: boolean;

  /**
   * Whether to force the component to render when the total not is greater than one page.
   *
   * Defaults to `false`.
   */
  forceRender?: boolean;

  /**
   * The function to call when a page is clicked.
   */
  onClick?(this: void, page: number): void;
}

export function Pagination({
  current,
  total,
  visibleCount,
  spread,
  queryString,
  className,
  pageClassName,
  previousNext = true,
  firstLast = true,
  forceRender = false,
  onClick = noop,
}: Props) {
  const visible = visibleCount !== undefined && total > visibleCount;

  const currentClamped = clamp(current, 1, total);

  const pageProps: Pick<
    ComponentProps<typeof PaginationPage>,
    "className" | "onClick" | "queryString"
  > = {
    queryString,
    className: pageClassName,
    onClick,
  };

  const pages = useMemo(
    () => paginate(currentClamped, total, visibleCount),
    [currentClamped, total, visibleCount],
  );

  const pagesSpread = useMemo(
    () => circularRange(1, total, currentClamped, spread ?? 0),
    [currentClamped, total, spread],
  );

  return (
    <div
      data-component="Pagination"
      className={twMerge(
        "flex flex-wrap items-center justify-center gap-2",
        className,
      )}
    >
      {visible && firstLast && (
        <PaginationPage
          page={1}
          isDisabled={currentClamped === 1}
          {...pageProps}
        >
          <FaAnglesLeft />
        </PaginationPage>
      )}

      {visible && previousNext && (
        <PaginationPage
          page={Math.max(1, currentClamped - 1)}
          isDisabled={currentClamped === 1}
          {...pageProps}
        >
          <FaAngleLeft />
        </PaginationPage>
      )}

      {(forceRender || total > 1) &&
        pages.map((page) => (
          <PaginationPage
            key={page}
            page={page}
            isCurrent={page === currentClamped}
            isSpread={pagesSpread.includes(page)}
            {...pageProps}
          >
            {page}
          </PaginationPage>
        ))}

      {visible && previousNext && (
        <PaginationPage
          page={Math.min(total, currentClamped + 1)}
          isDisabled={currentClamped === total}
          {...pageProps}
        >
          <FaAngleLeft className="rotate-180" />
        </PaginationPage>
      )}

      {visible && firstLast && (
        <PaginationPage
          page={total}
          isDisabled={currentClamped === total}
          {...pageProps}
        >
          <FaAnglesLeft className="rotate-180" />
        </PaginationPage>
      )}
    </div>
  );
}
