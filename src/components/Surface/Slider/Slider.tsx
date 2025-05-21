"use client";

import {
  Children,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import { Pagination } from "@/components/Pagination/Pagination/Pagination";
import { range } from "@/services/ArrayService";
import { Timer } from "@/services/classes/Timer";
import { useImmediateRef } from "@/services/hooks/useImmediateRef";
import { clamp } from "@/services/NumberService";
import { normalizeBreakpoints } from "@/services/ResponsiveService";

import type { Breakpoints } from "@/services/ResponsiveService";
import type {
  CSSProperties,
  PointerEvent,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

type ArrowAdvance = "batch" | "sequential";
type ArrowPlacement = "disabled" | "external" | "internal" | "overlay";

interface Props extends PropsWithChildren {
  /**
   * Autoplay duration in milliseconds.
   *
   * Defaults to `5000`.
   */
  duration?: number;

  /**
   * Number of items per slide.
   * Supports breakpoints object.
   *
   * Defaults to `1`.
   */
  items?: Breakpoints | number;

  /**
   * Gap between items, based on `rem`.
   * Supports breakpoints object.
   *
   * Defaults to `0.5`.
   */
  gap?: Breakpoints | number;

  /**
   * Enable infinite loop.
   *
   * Defaults to `true`.
   */
  infinity?: boolean;

  /**
   * Stretch items to fill the container when there is less items than needed.
   *
   * Defaults to `true`.
   */
  stretch?: boolean;

  /**
   * Center items when there is less items than needed.
   * Works only when `fill` is `false`.
   *
   * Defaults to `true`.
   */
  centered?: boolean;

  /**
   * Enable swipe support.
   *
   * Defaults to `true`.
   */
  swipe?: boolean;

  /**
   * Container class name.
   */
  className?: string;

  /**
   * Arrows icon.
   *
   * Defaults to `<FaAngleLeft />`.
   */
  arrowsIcon?: ReactNode;

  /**
   * Arrows advance mode.
   *
   * - `single` - Advance one item at a time.
   * - `visible` - Advance all visible items at a time.
   *
   * Defaults to `single`.
   */
  arrowsStepMode?: ArrowAdvance;

  /**
   * Arrows class name applied to each arrow.
   */
  arrowsClassName?: string;

  /**
   * Arrows placement.
   *
   * - `disabled` - Arrows are disabled.
   * - `external` - Arrows are placed outside the container.
   * - `internal` - Arrows are placed inside the container.
   * - `overlay` - Arrows are placed on top of the container, overlaying items.
   *
   * Defaults to `overlay`.
   */
  arrowsPlacement?: ArrowPlacement;

  /**
   * Arrows placement fallback.
   *
   * It occurs when `arrowsPlacement` is `external` and there is not enough space to place the arrows on window.
   *
   * - `disabled` - Arrows are disabled.
   * - `internal` - Arrows are placed inside the container.
   * - `overlay` - Arrows are placed on top of the container, overlaying items.
   *
   * Defaults to `overlay`.
   */
  arrowsPlacementFallback?: Exclude<ArrowPlacement, "external">;

  /**
   * Pagination placement.
   *
   * - `after` - Pagination is placed after the container.
   * - `overlay` - Pagination is placed on bottom of the container, overlaying items.
   * - `false` - Pagination is disabled.
   *
   * Defaults to `after`.
   */
  pagination?: "after" | "overlay" | false;

  /**
   * Pagination class name.
   */
  paginationClassName?: string;

  /**
   * Pagination compressed mode.
   *
   * When enabled, each pagination item page represents the slider items based on visible items count.
   *
   * Defaults to `true`.
   */
  paginationCompressed?: boolean;

  /**
   * Pagination visible item pages count.
   */
  paginationLimit?: number;

  /**
   * Container children.
   */
  children?: ReactNode;
}

interface ArrowProps {
  ref?: React.RefObject<HTMLDivElement | null>;
  icon: ReactNode;
  className?: string;
  rotate?: boolean;
  placement: ArrowPlacement;
  isDisabled?: boolean;
  onClick(this: void): void;
}

function SliderArrow({
  ref,
  icon,
  className,
  rotate = false,
  placement,
  isDisabled,
  onClick,
}: ArrowProps) {
  return (
    <div
      ref={ref}
      data-disabled={isDisabled === true ? true : undefined}
      className={twMerge(
        "flex items-center -translate-x-full px-2 transition",
        "data-disabled:pointer-events-none data-disabled:opacity-25",
        rotate ? "rotate-180 right-0 translate-x-full" : "left-0",
        placement === "external"
          ? "h-full w-fit absolute z-10"
          : "translate-x-0",
        (placement === "overlay" || placement === "disabled") &&
          "h-full absolute z-10",
        placement === "disabled" && "opacity-0 data-disabled:opacity-0",
      )}
    >
      <div
        className={twMerge(
          "bg-theme-400 hover:bg-theme-500 cursor-pointer rounded-full p-2 transition active:brightness-90 text-white",
          className,
        )}
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  );
}

interface ItemProps {
  children: ReactNode;
}

function SliderItem({ children }: ItemProps) {
  return <div>{children}</div>;
}

export function Slider({
  duration = 5000,
  items = 1,
  gap = 0.5,
  infinity = true,
  stretch = true,
  centered = true,
  swipe = true,
  className,
  arrowsIcon = <FaAngleLeft />,
  arrowsStepMode = "sequential",
  arrowsClassName,
  arrowsPlacement = "overlay",
  arrowsPlacementFallback = "overlay",
  pagination = "after",
  paginationClassName,
  paginationCompressed = true,
  paginationLimit,
  children = [],
}: Props) {
  const [ready, setReady] = useState(false);

  const [index, setIndex] = useState(0);

  const [swipingOffset, setSwipingOffset] = useState<number | null>(null);
  const [swipingDelta, setSwipingDelta] = useState(0);

  const sliderItems = useMemo(
    () =>
      Children.map(children, (child) => (
        <SliderItem>{child}</SliderItem>
      )) as ReactElement[],
    [children],
  );

  const styleCols = useMemo(
    () =>
      normalizeBreakpoints(
        "--cols-",
        items,
        1,
        stretch ? sliderItems.length : Number.MAX_VALUE,
      ),
    [stretch, items, sliderItems.length],
  );

  const styleGaps = useMemo(
    () => normalizeBreakpoints("--gap-", gap, 0),
    [gap],
  );

  const [visibleItems, setVisibleItems] = useState(1);

  const isOverflow = useMemo(
    () => sliderItems.length > visibleItems,
    [sliderItems.length, visibleItems],
  );

  const sliderInfinityItems = useMemo(
    () => [
      ...(isOverflow ? sliderItems.slice(-visibleItems) : []),
      ...sliderItems,
      ...(isOverflow
        ? sliderItems.slice(0, visibleItems * 2 - 1)
        : range(0, visibleItems * 2 - 1).map((key) => (
            <div key={`${key}-after`} />
          ))),
    ],
    [isOverflow, sliderItems, visibleItems],
  );

  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderItemsRef = useRef<HTMLDivElement>(null);

  const arrowRef = useRef<HTMLDivElement>(null);

  const [hasArrowSpace, setHasArrowSpace] = useState(false);

  useEffect(() => {
    const sliderObserver = new ResizeObserver(([entry]) => {
      const target = entry!.target as HTMLElement;
      const targetCols = target.computedStyleMap().get("--cols") as Record<
        number,
        number
      >;

      setVisibleItems(Number(targetCols[0]!));
    });

    if (sliderItemsRef.current !== null) {
      sliderObserver.observe(sliderItemsRef.current);
    }

    function resizeObserver() {
      const arrowWidth = arrowRef.current?.offsetWidth ?? 0;

      setHasArrowSpace(
        sliderRef.current === null
          ? false
          : sliderRef.current.offsetWidth + 2 * arrowWidth <=
              document.body.offsetWidth - 40,
      );
    }

    addEventListener("resize", resizeObserver);

    requestAnimationFrame(() => {
      setReady(true);

      requestIdleCallback(() => {
        resizeObserver();
      });
    });

    return () => {
      sliderObserver.disconnect();

      removeEventListener("resize", resizeObserver);
    };
  }, []);

  const [transition, setTransition] = useState(true);

  const moveIndex = useCallback(
    (delta: number) => {
      if (!isOverflow) {
        return;
      }

      const indexNew = clamp(
        arrowsStepMode === "sequential"
          ? index + delta
          : index + visibleItems * delta,
        infinity ? Number.MIN_SAFE_INTEGER : 0,
        infinity ? Number.MAX_SAFE_INTEGER : sliderItems.length - visibleItems,
      );

      if (indexNew < 0) {
        setTransition(false);
        setIndex(sliderItems.length);

        requestAnimationFrame(() => {
          setTransition(true);
          setIndex(sliderItems.length + indexNew);
        });
      } else if (
        !infinity &&
        indexNew >= sliderItems.length - (visibleItems - 1)
      ) {
        setIndex(0);
      } else {
        setIndex(indexNew);
      }
    },
    [
      arrowsStepMode,
      index,
      infinity,
      isOverflow,
      sliderItems.length,
      visibleItems,
    ],
  );

  const moveIndexRef = useImmediateRef(moveIndex);

  const realignIndex = useCallback(() => {
    setTransition(false);

    requestAnimationFrame(() => {
      setIndex((state) => {
        if (state >= sliderItems.length) {
          return state - sliderItems.length;
        }

        return state;
      });

      requestAnimationFrame(() => {
        setTransition(true);
      });
    });
  }, [sliderItems.length]);

  const arrowPlacementFinal = useMemo(
    () =>
      isOverflow
        ? hasArrowSpace || arrowsPlacement !== "external"
          ? arrowsPlacement
          : arrowsPlacementFallback
        : "disabled",
    [isOverflow, arrowsPlacement, arrowsPlacementFallback, hasArrowSpace],
  );

  const compensateIndex = useMemo(
    () =>
      centered ? -Math.max(0, (visibleItems - sliderItems.length) / 2) : 0,
    [centered, sliderItems.length, visibleItems],
  );

  const paginationTotal = useMemo(
    () =>
      paginationCompressed
        ? Math.ceil(sliderItems.length / visibleItems)
        : sliderItems.length,
    [paginationCompressed, sliderItems.length, visibleItems],
  );

  useEffect(() => {
    if (!isOverflow) {
      setIndex(0);
    }
  }, [isOverflow]);

  const timerRef = useRef<Timer | null>(null);

  const swipingOffsetRef = useImmediateRef(swipingOffset);

  useEffect(() => {
    timerRef.current?.stop();
    timerRef.current = new Timer(() => {
      if (swipingOffsetRef.current === null) {
        moveIndexRef.current(1);
      }
    }, duration);

    return () => {
      timerRef.current?.stop();
    };
  }, [duration, moveIndexRef, swipingOffsetRef]);

  const canSwipe = useMemo(() => swipe && isOverflow, [isOverflow, swipe]);

  const pointerStart = useCallback(
    (ev: PointerEvent<HTMLDivElement>) => {
      if (canSwipe) {
        setSwipingOffset(ev.clientX);
      }
    },
    [canSwipe],
  );

  const pointerMove = useCallback(
    (ev: PointerEvent<HTMLDivElement>) => {
      if (canSwipe && swipingOffset !== null) {
        setSwipingDelta(
          clamp(
            swipingOffset - ev.clientX,
            -ev.currentTarget.offsetWidth,
            ev.currentTarget.offsetWidth,
          ),
        );

        ev.currentTarget.setPointerCapture(ev.pointerId);
      }
    },
    [canSwipe, swipingOffset],
  );

  const pointerEnd = useCallback(
    (ev: PointerEvent<HTMLDivElement>) => {
      if (canSwipe) {
        const currentTarget = ev.currentTarget;

        setSwipingOffset(null);

        requestAnimationFrame(() => {
          setSwipingDelta((state) => {
            moveIndexRef.current(
              Math.round(state / (currentTarget.offsetWidth / visibleItems)),
            );

            return 0;
          });
        });

        currentTarget.releasePointerCapture(ev.pointerId);
      }
    },
    [moveIndexRef, canSwipe, visibleItems],
  );

  const canPaginate = useMemo(
    () => (paginationCompressed ? paginationTotal > 1 : isOverflow),
    [isOverflow, paginationCompressed, paginationTotal],
  );

  if (sliderItems.length === 0) {
    return null;
  }

  return (
    <div
      className={twMerge(
        "relative flex flex-col gap-y-2 select-none",
        !ready && "hidden",
        className,
      )}
      ref={sliderRef}
      onMouseLeave={() => {
        timerRef.current?.start();
      }}
      onMouseEnter={() => {
        timerRef.current?.stop();
      }}
    >
      <div className="bg-theme-100 relative flex">
        <SliderArrow
          ref={arrowRef}
          icon={arrowsIcon}
          className={arrowsClassName}
          placement={arrowPlacementFinal}
          isDisabled={!infinity && index === 0}
          onClick={() => {
            moveIndex(-1);
          }}
        />

        <div
          className="flex-auto overflow-x-hidden"
          onPointerDown={pointerStart}
          onPointerMove={pointerMove}
          onPointerUp={pointerEnd}
          onPointerCancel={pointerEnd}
        >
          <div
            ref={sliderItemsRef}
            className={twMerge(
              "grid w-full auto-cols-(--width) grid-flow-col gap-x-[calc(1rem*var(--gap))]",
              "[--cols:var(--cols-xs)] sm:[--cols:var(--cols-sm)] md:[--cols:var(--cols-md)] lg:[--cols:var(--cols-lg)] xl:[--cols:var(--cols-xl)] 2xl:[--cols:var(--cols-2xl)]",
              "[--gap:var(--gap-xs)] sm:[--gap:var(--gap-sm)] md:[--gap:var(--gap-md)] lg:[--gap:var(--gap-lg)] xl:[--gap:var(--gap-xl)] 2xl:[--gap:var(--gap-2xl)]",
              "[--gap-width:calc(1rem*var(--gap))] [--width:calc((100%-(var(--gap-width))*(var(--cols)-1))/var(--cols))]",
              "-translate-x-[calc((var(--index)+var(--index-align))*(var(--width)+var(--gap-width))+var(--swipe)*1px)]",
              transition && swipingOffset === null && "transition-[translate]",
            )}
            style={
              {
                ...styleCols,
                ...styleGaps,
                "--index": compensateIndex + index,
                "--index-align": isOverflow ? visibleItems : 0,
                "--swipe": swipingDelta,
              } as CSSProperties
            }
            onTransitionEnd={realignIndex}
          >
            {sliderInfinityItems.map((item, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={key}>{item}</Fragment>
            ))}
          </div>
        </div>

        <SliderArrow
          icon={arrowsIcon}
          className={arrowsClassName}
          placement={arrowPlacementFinal}
          rotate
          isDisabled={!infinity && index === sliderItems.length - visibleItems}
          onClick={() => {
            moveIndex(1);
          }}
        />
      </div>

      {canPaginate && (
        <div
          className={twMerge(
            pagination === false && "hidden",
            pagination === "overlay" && "absolute inset-x-0 bottom-2",
            paginationClassName,
          )}
        >
          <Pagination
            current={
              paginationCompressed
                ? Math.ceil((index + 1) / visibleItems)
                : index + 1
            }
            total={paginationTotal}
            visibleCount={paginationLimit}
            spread={paginationCompressed ? undefined : visibleItems - 1}
            pageClassName="text-[size:0] w-2.5"
            firstLast={false}
            previousNext={false}
            onClick={(page) => {
              setIndex(
                paginationCompressed
                  ? Math.min(
                      (page - 1) * visibleItems,
                      sliderItems.length - visibleItems,
                    )
                  : page - 1,
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
