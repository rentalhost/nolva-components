"use client";

import {
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

import type {
  ComponentProps,
  CSSProperties,
  JSX,
  PropsWithChildren,
  ReactNode,
} from "react";

interface Props extends PropsWithChildren {
  /**
   * Effect to apply.
   *
   * Defaults to `zoomIn`.
   */
  effect:
    | "fade"
    | "fadeDown"
    | "fadeLeft"
    | "fadeRight"
    | "fadeUp"
    | "zoomIn"
    | "zoomOut";

  /**
   * Animation duration.
   *
   * Defaults to `400` (1 second).
   */
  duration?: number;

  /**
   * Animation easing.
   *
   * Defaults to `easeInOut`.
   */
  easing?: "ease-in-out" | "ease-in" | "ease-out" | "ease" | "linear";

  /**
   * Whether to apply the animation only once.
   *
   * Defaults to `false`.
   */
  once?: boolean;

  /**
   * Animation threshold.
   *
   * Defaults to `0.1` (10%).
   */
  threshold?: number;

  /**
   * Container children.
   */
  children?: ReactNode;
}

const effects: Record<NonNullable<Props["effect"]>, string> = {
  fade: "",
  fadeDown: "not-data-animated:-translate-y-1/2",
  fadeLeft: "not-data-animated:-translate-x-1/2",
  fadeRight: "not-data-animated:translate-x-1/2",
  fadeUp: "not-data-animated:translate-y-1/2",
  zoomIn: "not-data-animated:scale-50",
  zoomOut: "not-data-animated:scale-125",
} as const;

export function Animate({
  effect,
  duration = 400,
  easing = "ease-out",
  once = false,
  threshold = 0.1,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry!.isIntersecting);

        if (once && entry!.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  const element = useMemo(
    () => (isValidElement(children) ? children : <div>{children}</div>),
    [children],
  );

  return cloneElement(element as JSX.Element, {
    ref,
    className: twMerge(
      "transition duration-(--animate-duration) ease-(--animate-easing)",
      "not-data-animated:opacity-0",
      effects[effect],
      (element.props as ComponentProps<"div">).className,
    ),
    style: {
      "--animate-duration": `${duration}ms`,
      "--animate-easing": easing,
      ...(element.props as ComponentProps<"div">).style,
    } as CSSProperties,
    "data-animated": visible || undefined,
  });
}
