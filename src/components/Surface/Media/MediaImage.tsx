import Image from "next/image";

interface Props {
  /**
   * The source of the image.
   */
  src: string;

  /**
   * The width of the image.
   */
  width: number;

  /**
   * The height of the image.
   */
  height: number;

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

export function MediaImage({
  src,
  width,
  height,
  alt,
  quality,
  unoptimized,
  className,
}: Props) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      quality={quality}
      unoptimized={unoptimized}
      className={className}
    />
  );
}
