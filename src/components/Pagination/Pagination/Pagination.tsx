import { FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import { paginate } from "@/services/ArrayService";
import { noop } from "@/services/FunctionService";
import { clamp } from "@/services/NumberService";
import { appendQueryString } from "@/services/UrlService";

import type { ReactNode } from "react";

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

interface PageProps {
  page: number;
  queryString?: string;
  isCurrent?: boolean;
  isDisabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick(this: void, page: number): void;
}

function PaginationPage({
  page,
  queryString,
  isCurrent,
  isDisabled,
  children,
  className,
  onClick,
}: PageProps) {
  return (
    <a
      href={
        queryString === undefined
          ? undefined
          : appendQueryString(queryString, String(page))
      }
      data-active={isCurrent === true ? true : undefined}
      data-disabled={isDisabled === true ? true : undefined}
      className={twMerge(
        "bg-theme-50 flex aspect-square items-center justify-center rounded-full hover:bg-theme-100 active:brightness-90 transition cursor-pointer select-none data-active:bg-theme-200 hover:data-active:bg-theme-300 w-8 data-active:font-bold data-disabled:pointer-events-none data-disabled:opacity-25",
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

export function Pagination({
  current,
  total,
  visibleCount,
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

  const pageProps: Pick<PageProps, "className" | "onClick" | "queryString"> = {
    queryString,
    className: pageClassName,
    onClick,
  };

  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-x-2 empty:hidden",
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
        paginate(currentClamped, total, visibleCount).map((page) => (
          <PaginationPage
            key={page}
            page={page}
            isCurrent={page === currentClamped}
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
