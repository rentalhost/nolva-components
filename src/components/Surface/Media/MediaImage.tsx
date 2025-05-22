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
   * The class name of the image.
   */
  className?: string;
}

export const allowedExtensions = ["jpg", "png", "webp"] as const;

export function MediaImage({ src, width, height, alt, className }: Props) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}
