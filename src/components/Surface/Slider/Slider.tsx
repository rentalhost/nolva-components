"use client";

import {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Autoplay, FreeMode, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

import { Pagination } from "@/components/Pagination/Pagination/Pagination";
import { SliderArrow } from "@/components/Surface/Slider/SliderArrow";
import { listenWindowEvent } from "@/services/EventService";
import { normalizeBreakpoints } from "@/services/SwiperService";

import type { ArrowAdvance } from "@/components/Surface/Slider/SliderArrow";
import type { Breakpoints } from "@/services/ResponsiveService";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import type { SwiperClass } from "swiper/react";

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
  arrowsPlacement?: ComponentProps<typeof SliderArrow>["placement"];

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
  arrowsPlacementFallback?: Exclude<
    ComponentProps<typeof SliderArrow>["placement"],
    "external"
  >;

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

export function Slider({
  duration = 5000,
  items = 1,
  gap = 0.5,
  infinity = true,
  stretch = true,
  centered = true,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(Number.MAX_SAFE_INTEGER);

  const itemsCount = useMemo(() => Children.count(children), [children]);

  const breakpoints = useMemo(
    () => normalizeBreakpoints(itemsCount, items, gap, stretch),
    [gap, items, itemsCount, stretch],
  );

  const [swiper, setSwiper] = useState<SwiperClass>();

  const [hasArrowSpace, setHasArrowSpace] = useState(false);

  const isOverflow = useMemo(
    () => itemsCount > visibleCount,
    [itemsCount, visibleCount],
  );

  const arrowPlacementFinal = useMemo(
    () =>
      isOverflow
        ? hasArrowSpace || arrowsPlacement !== "external"
          ? arrowsPlacement
          : arrowsPlacementFallback
        : "disabled",
    [isOverflow, arrowsPlacement, arrowsPlacementFallback, hasArrowSpace],
  );

  const arrowClick = useCallback(
    (delta: number) => {
      const deltaAdvance = arrowsStepMode === "sequential" ? 1 : visibleCount;
      const deltaFinal = delta * deltaAdvance;

      swiper!.slideToLoop((index + itemsCount + deltaFinal) % itemsCount);
    },
    [arrowsStepMode, index, itemsCount, swiper, visibleCount],
  );

  const paginationTotal = useMemo(
    () =>
      paginationCompressed ? Math.ceil(itemsCount / visibleCount) : itemsCount,
    [itemsCount, paginationCompressed, visibleCount],
  );

  const paginationEnabled = useMemo(
    () => (paginationCompressed ? paginationTotal > 1 : isOverflow),
    [isOverflow, paginationCompressed, paginationTotal],
  );

  useEffect(
    () =>
      listenWindowEvent("resize", () => {
        if (containerRef.current !== null && arrowRef.current !== null) {
          setHasArrowSpace(
            containerRef.current.offsetWidth +
              3 * arrowRef.current.offsetWidth <=
              document.body.offsetWidth,
          );
        }
      }),
    [],
  );

  return (
    <div className={twMerge("relative", className)}>
      <div ref={containerRef} className="relative flex">
        <SliderArrow
          ref={arrowRef}
          icon={arrowsIcon}
          className={arrowsClassName}
          placement={arrowPlacementFinal}
          isDisabled={!infinity && index === 0}
          onClick={() => {
            arrowClick(-1);
          }}
        />

        <Swiper
          onSwiper={setSwiper}
          loop={infinity && isOverflow}
          autoplay={
            duration === 0
              ? false
              : { delay: duration, pauseOnMouseEnter: true }
          }
          breakpoints={breakpoints}
          modules={[Autoplay, FreeMode, Keyboard]}
          centerInsufficientSlides={centered}
          freeMode={{ enabled: true, sticky: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          loopAddBlankSlides={false}
          onSlideChange={({ realIndex }) => {
            setIndex(realIndex);
          }}
          onResize={({ params: { slidesPerView } }) => {
            if (typeof slidesPerView === "number") {
              setVisibleCount(slidesPerView);
            }
          }}
          className="flex-1"
        >
          {Children.map(children, (child, childIndex) => (
            <SwiperSlide
              // eslint-disable-next-line react/no-array-index-key
              key={childIndex}
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderArrow
          rotate
          icon={arrowsIcon}
          className={arrowsClassName}
          placement={arrowPlacementFinal}
          isDisabled={!infinity && index === 0}
          onClick={() => {
            arrowClick(1);
          }}
        />
      </div>

      {paginationEnabled && (
        <div
          className={twMerge(
            "z-10",
            pagination === false && "hidden",
            pagination === "overlay" && "absolute inset-x-0 bottom-0",
            paginationClassName,
          )}
        >
          <Pagination
            current={
              paginationCompressed
                ? index === itemsCount - visibleCount
                  ? paginationTotal
                  : Math.ceil((index + 1) / visibleCount)
                : index + 1
            }
            total={paginationTotal}
            visibleCount={paginationLimit}
            spread={paginationCompressed ? undefined : visibleCount - 1}
            pageClassName="text-[size:0] w-2.5"
            firstLast={false}
            previousNext={false}
            onClick={(page) => {
              swiper!.slideToLoop(
                paginationCompressed ? (page - 1) * visibleCount : page - 1,
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
