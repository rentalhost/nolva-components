"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

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
   * Use unoptimized image mode.
   */
  unoptimized?: boolean;

  /**
   * The class name of the image.
   */
  className?: string;
}

export const allowedExtensions = ["jpg", "png", "webp"] as const;

const emptySrc =
  "data:image/webp;base64,UklGRhYAAABXRUJQVlA4TAoAAAAvAAAAAEX/I/of";

export function MediaImage({
  src,
  alt,
  quality,
  unoptimized,
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
      unoptimized={unoptimized}
      data-component="MediaImage"
      className={twMerge("w-full", className)}
    />
  );
}
