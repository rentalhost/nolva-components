import Image from "next/image";
import { twMerge } from "tailwind-merge";

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
   * The class name of the image.
   */
  className?: string;
}

export const allowedExtensions = ["svg"] as const;

export function MediaSVG({ src, alt, className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      unoptimized
      data-component="MediaSVG"
      className={twMerge("w-full", className)}
    />
  );
}
