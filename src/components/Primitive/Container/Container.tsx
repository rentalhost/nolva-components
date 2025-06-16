"use client";

import { useEffect } from "react";

import { useInViewport } from "@/services/hooks/useInViewport";
import { twMerge } from "@/services/TailwindMergeService";

import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * Determines the horizontal padding of the container.
   *
   * Defaults to `4` (1rem).
   */
  paddingX?: number;

  /**
   * Determines if the container is fluid.
   *
   * It means that the container will take the full width of the screen.
   */
  fluid?: boolean;

  /**
   * Container class name.
   */
  className?: string;

  /**
   * Container children.
   */
  children?: ReactNode;

  /**
   * Function to be called when the container is in the viewport.
   */
  onInViewport?(this: void): void;
}

export function Container({
  paddingX = 4,
  fluid = false,
  className,
  children,
  onInViewport,
}: Props) {
  const { ref, visible } = useInViewport();

  useEffect(() => {
    if (visible) {
      onInViewport?.();
    }
  }, [onInViewport, visible]);

  return (
    <div
      ref={ref}
      data-component="Container"
      className={twMerge(
        "w-full px-[--spacing(var(--padding-x))]",
        !fluid && "mx-auto max-w-container",
        className,
      )}
      style={{ "--padding-x": paddingX } as CSSProperties}
    >
      {children}
    </div>
  );
}
