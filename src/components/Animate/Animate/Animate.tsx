"use client";

import { useEffect, useRef } from "react";

import { useInViewport } from "@/services/hooks/useInViewport";
import { twMerge } from "@/services/TailwindMergeService";

import type { Threshold } from "@/services/hooks/useInViewport";
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
   * Defaults to `25px`.
   */
  threshold?: Threshold;

  /**
   * Container children.
   */
  children?: ReactNode;
}

const effects: Record<NonNullable<Props["effect"]>, string> = {
  slideDown: "not-data-animated:*:-translate-y-1/2",
  slideLeft: "not-data-animated:*:translate-x-1/2",
  slideRight: "not-data-animated:*:-translate-x-1/2",
  slideUp: "not-data-animated:*:translate-y-1/2",
  zoomIn: "not-data-animated:*:scale-50",
  zoomOut: "not-data-animated:*:scale-125",
} as const;

export function Animate({
  effect,
  duration = 400,
  easing = "ease-out",
  always = false,
  threshold,
  children,
}: Props) {
  const animateRef = useRef<HTMLDivElement>(null);

  const { ref, visible, disconnect } = useInViewport(threshold, true);

  useEffect(() => {
    ref(animateRef.current?.firstElementChild);
  }, [ref]);

  useEffect(() => {
    if (visible && !always) {
      disconnect();
    }
  }, [always, disconnect, visible]);

  return (
    <div
      ref={animateRef}
      data-component="Animate"
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
