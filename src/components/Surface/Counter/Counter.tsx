"use client";

import { useEffect, useRef, useState } from "react";

import { animate } from "@/services/AnimateService";

import type { Easing } from "@/services/AnimateService";
import type { CSSProperties } from "react";

interface Props {
  /**
   * Initial value.
   *
   * Defaults to `0`.
   */
  from?: number;

  /**
   * Final value.
   */
  to: number;

  /**
   * Number of decimals.
   *
   * Defaults to `0`.
   */
  decimals?: number;

  /**
   * Animation duration.
   *
   * Defaults to `1000`.
   */
  duration?: number;

  /**
   * Easing function.
   *
   * Defaults to `"ease-in-out"`.
   */
  easing?: Easing;

  /**
   * Class name.
   */
  className?: string;
}

function toFixedFlooring(value: number, decimals: number) {
  return decimals === 0
    ? Math.floor(value)
    : value.toFixed(decimals + 1).slice(0, -1);
}

export function Counter({
  from = 0,
  to,
  decimals = 0,
  duration = 1000,
  easing,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry!.isIntersecting) {
        unload();
        animate(duration, setProgress, easing);
      }
    });

    function unload() {
      observer.disconnect();
    }

    observer.observe(ref.current!);

    return unload;
  }, [duration, easing]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--progress": progress } as CSSProperties}
    >
      {toFixedFlooring(from + (to - from) * progress, decimals)}
    </div>
  );
}
