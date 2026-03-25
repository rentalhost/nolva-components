"use client";

import { clamp, twMerge } from "@rentalhost/rheactor-core";
import { faAngleLeft } from "@rheactor/rheactor-font-awesome/classic-regular";
import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

import type { IconType } from "@rheactor/rheactor-font-awesome";
import type { ComponentProps, CSSProperties, PropsWithChildren, ReactNode } from "react";

import { SliderArrow } from "@/components/Surface/Slider/SliderArrow";
import { Timer } from "@/services/classes/Timer";
import { listenWindowEvent } from "@/services/EventService";
import { useImmediateRef } from "@/services/hooks/useImmediateRef";
import { useInViewport } from "@/services/hooks/useInViewport";
import { listenResizeObserver } from "@/services/MutationService";
import { rotate } from "@/services/NumberService";

interface Props extends PropsWithChildren {
  /**
   * Animation duration in milliseconds.
   *
   * Defaults to `5000`.
   */
  duration?: number;

  /**
   * Enable infinite scrolling.
   *
   * Defaults to `false`.
   */
  infinity?: boolean;

  /**
   * Wrap mode when reaching the end.
   *
   * Ignored when `infinity` is `true`.
   *
   * Defaults to `rewind`.
   */
  wrapMode?: "bounce" | "rewind" | "stop";

  /**
   * Justify items to fills the container.
   *
   * Defaults to `false`.
   */
  justify?: "expand" | "space-between";

  /**
   * Center items when there is enough space.
   *
   * Ignored when `justify` is defined.
   *
   * Defaults to `false`.
   */
  centered?: boolean;

  /**
   * Number of steps for autoplay.
   *
   * Defaults to `1`.
   */
  steps?: number | "page";

  /**
   * Step duration in milliseconds.
   *
   * When `steps` is page, this value is multiplied by `sqrt(visible items)`.
   *
   * Defaults to `300`.
   */
  stepDuration?: number;

  /**
   * Stop autoplay on first interaction.
   *
   * Defaults to `false`.
   */
  stopOnInteraction?: boolean;

  /**
   * Allow autoplay to works when slider is offscreen.
   *
   * Defaults to `false`.
   */
  playOffscreen?: boolean;

  /**
   * Free flow mode.
   *
   * Defaults to `false`.
   */
  freeFlow?: boolean;

  /**
   * Container class name, including grid and gap rules.
   *
   * Defaults to `grid-cols-1`.
   */
  className?: string;

  /**
   * Container children.
   */
  children?: ReactNode;

  /**
   * Arrows icon.
   *
   * Defaults to `faAngleLeft`.
   */
  arrowsIcon?: IconType;

  /**
   * Arrows advance mode.
   *
   * Defaults to same as `step`.
   */
  arrowsSteps?: number | "page";

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
  arrowsPlacementFallback?: Exclude<ComponentProps<typeof SliderArrow>["placement"], "external">;

  /**
   * Callback fired when the slider navigates.
   */
  onNavigate?(this: void): void;
}

export function Slider({
  duration = 5000,
  infinity = false,
  wrapMode = "rewind",
  justify,
  centered = false,
  steps = 1,
  stepDuration = 300,
  stopOnInteraction = false,
  playOffscreen = false,
  freeFlow = false,
  className,
  children,
  arrowsIcon = faAngleLeft,
  arrowsSteps = steps,
  arrowsClassName,
  arrowsPlacement = "overlay",
  arrowsPlacementFallback = "overlay",
  onNavigate,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const { ref: viewportRef, visible: viewportVisible } = useInViewport(0);

  useEffect(() => {
    viewportRef(containerRef.current);
  }, [viewportRef]);

  const items = useMemo(
    () => Children.toArray(children).filter((child) => isValidElement(child)),
    [children],
  );

  const [width, setWidth] = useState(0);
  const [columns, setColumns] = useState(0);
  const [columnWidth, setColumnWidth] = useState(0);
  const [columnGap, setColumnGap] = useState(0);
  const [stride, setStride] = useState(0);

  const [direction, setDirection] = useState(1);

  const [transitionActive, setTransitionActive] = useState(true);

  const [index, setIndex] = useState(0);
  const indexMin = -items.length + columns;

  const [dragOffset, setDragOffset] = useState<number>();
  const [dragOrigin, setDragOrigin] = useState<number>();

  const [autoplay, setAutoplay] = useState(duration > 0);

  const isOverflow = columns > 0 && items.length > columns;

  const flushTransition = useCallback((callback: () => void) => {
    queueMicrotask(() => {
      flushSync(() => {
        setTransitionActive(false);
        callback();
      });

      setTransitionActive(true);
    });
  }, []);

  const updateMetrics = useEffectEvent(() => {
    flushTransition(() => {
      if (metricsRef.current) {
        const computed = getComputedStyle(metricsRef.current);
        const computedColumns = computed.gridTemplateColumns.split(" ");
        const computedColumnsGap = Number.parseFloat(computed.columnGap);
        const computedColumnsWidth = Number.parseFloat(computedColumns.at(0)!);

        setWidth(
          computedColumns.length * computedColumnsWidth +
            (computedColumns.length - 1) * computedColumnsGap,
        );
        setColumns(computedColumns.length);
        setColumnWidth(computedColumnsWidth);
        setColumnGap(computedColumnsGap);
        setStride(computedColumnsWidth + computedColumnsGap);
      }
    });
  });

  const move = useImmediateRef((delta: number) => {
    const indexTarget = index - delta * direction;

    if (infinity) {
      setIndex(indexTarget);
    } else {
      const indexClamped = clamp(indexTarget, indexMin, 0);

      if (indexClamped === indexTarget || indexClamped !== index || wrapMode === "stop") {
        setIndex(indexClamped);
      } else if (wrapMode === "rewind") {
        setIndex(indexClamped === indexMin ? 0 : indexMin);
      } else {
        setDirection((state) => -state);
        setIndex(clamp(2 * indexClamped - indexTarget, indexMin, 0));
      }
    }
  });

  const autoplayTick = useEffectEvent(() => {
    if (viewportVisible || playOffscreen) {
      move.current(steps === "page" ? columns : steps);
      setDragOffset(undefined);
    }
  });

  const timer = useRef<Timer>(undefined);

  useEffect(() => {
    if (!autoplay || !isOverflow) {
      timer.current?.stop();
      timer.current = undefined;

      return;
    }

    timer.current = new Timer(autoplayTick, duration, false);

    return () => {
      timer.current?.stop();
      timer.current = undefined;
    };
  }, [duration, autoplay, isOverflow]);

  useEffect(() => {
    if (viewportVisible) {
      timer.current?.start();
    } else {
      setDragOffset(undefined);
    }
  }, [viewportVisible]);

  const translateRef = useRef<HTMLDivElement>(null);
  const [translateOffset, setTranslateOffset] = useState(0);

  const updateTranslateOffset = useEffectEvent(() => {
    if (isOverflow && translateRef.current) {
      setTranslateOffset(Number.parseFloat(getComputedStyle(translateRef.current).translate));
    }
  });

  const translateTickRef = useRef<ReturnType<typeof requestAnimationFrame>>(undefined);

  const translateTickCancel = useRef(() => {
    if (translateTickRef.current !== undefined) {
      cancelAnimationFrame(translateTickRef.current);

      translateTickRef.current = undefined;
    }
  });

  const translateTickStart = useRef(() => {
    function tick() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      updateTranslateOffset();

      translateTickCancel.current();
      translateTickRef.current = requestAnimationFrame(tick);
    }

    tick();
  });

  useEffect(
    () => () => {
      translateTickCancel.current();
    },
    [],
  );

  const rotationOffset = useMemo(() => {
    if (!infinity || !isOverflow) {
      return 0;
    }

    if (translateOffset > 0) {
      return Math.ceil(translateOffset / stride);
    }

    const overflowEdge = (items.length - columns) * -stride;

    if (translateOffset < overflowEdge) {
      return Math.floor((translateOffset - overflowEdge) / stride);
    }

    return 0;
  }, [infinity, isOverflow, translateOffset, items.length, columns, stride]);

  const sliderOffset = dragOffset ?? index * stride;

  const staticOffset = useMemo(() => {
    const centerOffset =
      !justify && centered && columns > items.length
        ? (width - items.length * stride + columnGap) / 2
        : 0;

    return centerOffset + rotationOffset * -stride;
  }, [centered, columnGap, columns, items.length, justify, rotationOffset, stride, width]);

  const trackStyle = useMemo(
    () =>
      ({
        "--width": `${width}px`,
        "--columns": items.length,
        "--column-width": justify === "expand" ? "1fr" : `${columnWidth}px`,
        "--slider-x": `${isOverflow ? sliderOffset : 0}px`,
        "--duration": `${stepDuration * (steps === "page" ? Math.sqrt(columns) : 1)}ms`,
      }) as CSSProperties,
    [
      columnWidth,
      columns,
      isOverflow,
      items.length,
      justify,
      sliderOffset,
      stepDuration,
      steps,
      width,
    ],
  );

  const [hasArrowSpace, setHasArrowSpace] = useState(false);

  const arrowsPlacementFinal = useMemo(
    () =>
      isOverflow
        ? hasArrowSpace || arrowsPlacement !== "external"
          ? arrowsPlacement
          : arrowsPlacementFallback
        : "disabled",
    [isOverflow, arrowsPlacement, arrowsPlacementFallback, hasArrowSpace],
  );

  useEffect(
    () =>
      listenResizeObserver(metricsRef.current, {}, () => {
        updateMetrics();
        updateTranslateOffset();

        timer.current?.start();
      }),
    [],
  );

  useEffect(
    () =>
      listenWindowEvent("resize", () => {
        if (sliderRef.current && arrowRef.current) {
          setHasArrowSpace(
            sliderRef.current.offsetWidth + 2 * arrowRef.current.offsetWidth + 16 <=
              document.body.offsetWidth,
          );
        }
      }),
    [],
  );

  return (
    <div
      ref={sliderRef}
      data-component="Slider"
      className="relative"
      onPointerEnter={() => {
        timer.current?.stop();
      }}
      onPointerLeave={() => {
        timer.current?.start();
      }}
    >
      <div className="grid grid-cols-[auto_1fr_auto]">
        <SliderArrow
          ref={arrowRef}
          icon={arrowsIcon}
          className={arrowsClassName}
          placement={arrowsPlacementFinal}
          isDisabled={!infinity && index === 0}
          onClick={() => {
            move.current(arrowsSteps === "page" ? -columns : -arrowsSteps);
          }}
        />

        <div ref={containerRef} className="overflow-hidden">
          <div
            ref={metricsRef}
            className={twMerge("gap-x-0 grid-cols-1", className, "grid max-h-0 overflow-hidden")}
            aria-hidden="true"
          />

          <div
            className="translate-x-(--static-x) select-none"
            style={{ "--static-x": `${staticOffset}px` } as CSSProperties}
            onPointerDown={(ev) => {
              if (isOverflow) {
                ev.currentTarget.setPointerCapture(ev.pointerId);
                ev.stopPropagation();

                if (stopOnInteraction) {
                  setAutoplay(false);
                }

                setDragOrigin(ev.clientX - translateOffset);
              }
            }}
            onPointerMove={(ev) => {
              if (isOverflow && ev.currentTarget.hasPointerCapture(ev.pointerId)) {
                ev.stopPropagation();

                setDragOffset(ev.clientX - dragOrigin!);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                updateTranslateOffset();
              }
            }}
            onPointerUp={(ev) => {
              if (isOverflow && ev.currentTarget.hasPointerCapture(ev.pointerId)) {
                ev.stopPropagation();

                const dragDelta = ev.clientX - dragOrigin!;
                const indexTarget =
                  stride === 0
                    ? 0
                    : freeFlow
                      ? Math.ceil(dragDelta / stride)
                      : Math.round(dragDelta / stride);

                setIndex(infinity ? indexTarget : clamp(indexTarget, indexMin, 0));
                setDragOffset(freeFlow ? dragDelta : undefined);
                setDragOrigin(undefined);
              }
            }}
          >
            <div
              ref={translateRef}
              className={twMerge(
                "gap-x-0",
                className,
                transitionActive &&
                  viewportVisible &&
                  dragOrigin === undefined &&
                  "transition duration-(--duration)",
                "grid translate-x-(--slider-x) grid-cols-[repeat(var(--columns),var(--column-width))]! w-(--width) *:order-(--order)",
                justify === "space-between" && "justify-between",
              )}
              style={trackStyle}
              // eslint-disable-next-line react/no-unknown-property
              onTransitionStart={() => {
                timer.current?.stop();
                translateTickStart.current();
              }}
              onTransitionEnd={() => {
                if (infinity && Math.abs(index) >= items.length) {
                  flushTransition(() => {
                    setTranslateOffset(0);
                    setIndex(0);
                  });
                }

                timer.current?.start();
                onNavigate?.();

                translateTickCancel.current();
              }}
            >
              {items.map((item, itemIndex) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={itemIndex}
                  style={
                    {
                      "--order": isOverflow
                        ? rotate(itemIndex, rotationOffset, items.length)
                        : itemIndex,
                    } as CSSProperties
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <SliderArrow
          rotate
          icon={arrowsIcon}
          className={arrowsClassName}
          placement={arrowsPlacementFinal}
          isDisabled={!infinity && index <= indexMin}
          onClick={() => {
            move.current(arrowsSteps === "page" ? columns : arrowsSteps);
          }}
        />
      </div>
    </div>
  );
}
