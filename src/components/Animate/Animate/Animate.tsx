"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { inViewport } from "@/services/WindowService";

import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Effect to apply.
   *
   * Defaults to none (respects `fadeEffect`).
   */
  effect?:
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "slideUp"
    | "zoomIn"
    | "zoomOut";

  /**
   * Animation duration.
   *
   * Defaults to `400` (0.4s).
   */
  duration?: number;

  /**
   * Animation easing.
   *
   * Defaults to `easeInOut`.
   */
  easing?: "ease-in-out" | "ease-in" | "ease-out" | "ease" | "linear";

  /**
   * Whether to apply the animation always.
   *
   * Defaults to `false`.
   */
  always?: boolean;

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
  slideDown: "not-data-animated:*:-translate-y-1/2",
  slideLeft: "not-data-animated:*:-translate-x-1/2",
  slideRight: "not-data-animated:*:translate-x-1/2",
  slideUp: "not-data-animated:*:translate-y-1/2",
  zoomIn: "not-data-animated:*:scale-50",
  zoomOut: "not-data-animated:*:scale-125",
} as const;

function isHTMLElement(node: unknown): node is HTMLElement {
  return node instanceof HTMLElement;
}

export function Animate({
  effect,
  duration = 400,
  easing = "ease-out",
  always = false,
  threshold = 0.1,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    function scrollObserver() {
      const isVisible =
        isHTMLElement(ref.current?.firstElementChild) &&
        inViewport(ref.current.firstElementChild, threshold);

      setVisible(isVisible);

      if (!always && isVisible) {
        unload();
      }
    }

    addEventListener("scroll", scrollObserver);
    addEventListener("resize", scrollObserver);

    scrollObserver();

    function unload() {
      removeEventListener("scroll", scrollObserver);
      removeEventListener("resize", scrollObserver);
    }

    return unload;
  }, [always, threshold]);

  return (
    <div
      ref={ref}
      data-animated={visible || undefined}
      className={twMerge(
        "contents *:transition *:duration-(--animate-duration) *:ease-(--animate-easing) not-data-animated:*:opacity-0",
        effect === undefined ? undefined : effects[effect],
      )}
      style={
        {
          "--animate-duration": `${duration}ms`,
          "--animate-easing": easing,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
