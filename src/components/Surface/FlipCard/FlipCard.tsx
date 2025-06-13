"use client";

import { useState } from "react";
import { TbHandClick } from "react-icons/tb";

import { twMerge } from "@/services/TailwindMergeService";

import type { CSSProperties, ReactNode } from "react";

interface Props {
  /**
   * The container class name.
   */
  className?: string;

  /**
   * The direction-to of the flip.
   *
   * Defaults to `right`.
   */
  flipTo?: "left" | "right";

  /**
   * The axis of the flip.
   *
   * Defaults to `horizontal`.
   */
  axis?: "horizontal" | "vertical";

  /**
   * The content of the front of the flip card.
   */
  contentFront: ReactNode;

  /**
   * The content of the back of the flip card.
   */
  contentBack: ReactNode;

  heightController?: "back" | "front";

  /**
   * The class name of the touch icon.
   */
  touchIconClassName?: string;
}

const baseClassName =
  "flex h-full items-center justify-center [backface-visibility:hidden]";
const absoluteClassName = "absolute inset-0";

export function FlipCard({
  className,
  flipTo = "right",
  axis = "horizontal",
  contentFront,
  contentBack,
  heightController = "front",
  touchIconClassName,
}: Props) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      data-component="FlipCard"
      data-flipped={flip || undefined}
      className={twMerge(
        "perspective-distant size-full group overflow-hidden",
        className,
      )}
      style={
        {
          "--flip-angle": flipTo === "left" ? "-180deg" : "180deg",
        } as CSSProperties
      }
      onClick={() => {
        setFlip((state) => !state);
      }}
      onMouseLeave={() => {
        setFlip(false);
      }}
    >
      <div
        className={twMerge(
          "duration-800 relative h-full transition-transform [transform-style:preserve-3d] group-hover:[transform:rotateY(var(--flip-angle))]",
          axis === "vertical" &&
            "group-hover:[transform:rotateX(var(--flip-angle))]",
          flip && "[transform:rotateY(var(--flip-angle))]",
          flip &&
            axis === "vertical" &&
            "[transform:rotateX(var(--flip-angle))]",
        )}
      >
        <div
          className={
            heightController === "front"
              ? baseClassName
              : twMerge(baseClassName, absoluteClassName)
          }
        >
          {contentFront}
        </div>

        <div
          className={twMerge(
            baseClassName,
            heightController === "front" && absoluteClassName,
            "[transform:rotateY(var(--flip-angle))]",
            axis === "vertical" && "[transform:rotateX(var(--flip-angle))]",
          )}
        >
          {contentBack}
        </div>
      </div>

      <div
        className={twMerge(
          "text-theme-800 not-pointer-coarse:hidden bg-theme-200/75 absolute bottom-1 right-1 rounded-full p-1 transition group-active:scale-90 pointer-events-none",
          touchIconClassName,
        )}
      >
        <TbHandClick />
      </div>
    </div>
  );
}
