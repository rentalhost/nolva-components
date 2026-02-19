import { twMerge } from "@rentalhost/nolva-core";
import Image from "next/image";

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
   * Determines if the image should be loaded as a priority.
   */
  priority?: boolean;

  /**
   * The class name of the image.
   */
  className?: string;
}

export const allowedExtensions = ["svg"] as const;

export function MediaSVG({ src, alt, priority, className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      priority={priority}
      loading="eager"
      unoptimized
      data-component="MediaSVG"
      className={twMerge("w-full", className)}
    />
  );
}
