"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { listenResizeObserver } from "@/services/MutationService";
import { twMerge } from "@/services/TailwindMergeService";

import type { CSSProperties } from "react";

interface Props {
  /**
   * The source of the image.
   */
  src: string;

  /**
   * The alt text of the image.
   */
  alt: string;

  /**
   * The quality of the image.
   */
  quality?: number;

  /**
   * Determines if the image should be loaded as a priority.
   */
  priority?: boolean;

  /**
   * Use unoptimized image mode.
   */
  unoptimized?: boolean;

  /**
   * The spot of the image.
   */
  spot?: {
    x: number;
    y: number;
  };

  /**
   * The class name of the image.
   */
  className?: string;
}

export const allowedExtensions = ["jpg", "jpeg", "png", "webp", "gif"] as const;

const emptySrc =
  "data:image/webp;base64,UklGRhYAAABXRUJQVlA4TAoAAAAvAAAAAEX/I/of";

export function MediaImage({
  src,
  alt,
  quality,
  priority,
  unoptimized,
  spot,
  className,
}: Props) {
  const ref = useRef<HTMLImageElement>(null);

  const [width, setWidth] = useState(0);

  useEffect(
    () =>
      listenResizeObserver(
        ref.current,
        {},
        () => {
          setWidth((state) => Math.max(ref.current!.clientWidth, state));
        },
        false,
      ),
    [],
  );

  return (
    <Image
      ref={ref}
      src={width === 0 ? emptySrc : src}
      width={width}
      height={0}
      alt={alt}
      quality={quality}
      priority={priority}
      unoptimized={unoptimized}
      data-component="MediaImage"
      className={twMerge(
        "w-full",
        spot !== undefined && "object-(--spot)",
        className,
      )}
      style={{ "--spot": spot && `${spot.x}% ${spot.y}%` } as CSSProperties}
    />
  );
}
