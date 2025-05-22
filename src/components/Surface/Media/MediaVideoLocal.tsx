import { twMerge } from "tailwind-merge";

import { getExtension } from "@/services/FileService";

interface Props {
  /**
   * The source of the image.
   */
  src: string;

  /**
   * The source of the poster image.
   */
  posterSrc?: string;

  /**
   * Determine if this video will autoplay in background mode.
   *
   * Defaults to `false`.
   */
  background?: boolean;

  /**
   * Determine if this video will be protected from downloading.
   */
  protect?: boolean;

  /**
   * The class name of the image.
   */
  className?: string;
}

export const allowedExtensions = ["mp4", "webm"] as const;

export function MediaVideoLocal({
  src,
  posterSrc,
  background = false,
  protect = false,
  className,
}: Props) {
  return (
    <video
      playsInline
      poster={posterSrc}
      controls={!background}
      controlsList={protect ? "nodownload" : undefined}
      autoPlay={background}
      muted={background}
      loop={background}
      preload={posterSrc === undefined ? "metadata" : "none"}
      className={twMerge("w-full aspect-video", className)}
    >
      <source src={src} type={`video/${getExtension(src)}`} />
    </video>
  );
}
