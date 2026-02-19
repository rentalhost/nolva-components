"use client";

import { getNextImageUrl, twMerge } from "@rentalhost/nolva-core";
import { useEffect, useMemo, useRef, useState } from "react";

import type { ImgProps } from "next/dist/shared/lib/get-img-props";
import type { CSSProperties } from "react";

import { listenResizeObserver } from "@/services/MutationService";

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
  src: srcBase,
  alt,
  quality,
  priority = false,
  spot,
  className,
}: Props) {
  const ref = useRef<HTMLImageElement>(null);

  const [width, setWidth] = useState(0);
  const { src, srcSet, sizes } = useMemo(
    (): ImgProps =>
      width === 0
        ? ({ src: emptySrc } as ImgProps)
        : getNextImageUrl(srcBase, width, quality),
    [quality, srcBase, width],
  );

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
    <img
      ref={ref}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={0}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
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
