"use client";

import { useEffect, useMemo, useState } from "react";

import type { Easing } from "@/services/AnimateService";
import type { CSSProperties } from "react";

import { animate } from "@/services/AnimateService";
import { useInViewport } from "@/services/hooks/useInViewport";

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
   * Thousand separator.
   * Defaults to none.
   */
  thousandSeparator?: string;

  /**
   * Decimal separator.
   * Defaults to `.`
   */
  decimalSeparator?: string;

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

export function Counter({
  from = 0,
  to,
  thousandSeparator = "",
  decimalSeparator = ".",
  decimals = 0,
  duration = 1000,
  easing,
  className,
}: Props) {
  const { ref, visible, disconnect } = useInViewport(0.25);

  const [progress, setProgress] = useState(0);

  const value = useMemo(() => {
    const valueProgress = from + (to - from) * progress;
    const valueFixed = valueProgress.toFixed(decimals);
    const [valueNumber, valueDecimal = ""] = valueFixed.split(".") as [string, string];

    const valueFormatted =
      thousandSeparator === ""
        ? valueNumber
        : valueNumber.replaceAll(/\B(?=(?:\d{3})+(?!\d))/g, thousandSeparator);

    return decimals === 0 ? valueFormatted : valueFormatted + decimalSeparator + valueDecimal;
  }, [decimalSeparator, decimals, from, progress, thousandSeparator, to]);

  useEffect(() => {
    if (visible) {
      disconnect();
      animate(duration, setProgress, easing);
    }
  }, [disconnect, duration, easing, visible]);

  return (
    <div
      ref={ref}
      data-component="Counter"
      className={className}
      style={{ "--progress": progress } as CSSProperties}
    >
      {value}
    </div>
  );
}
