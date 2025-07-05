import { getExtension } from "@rentalhost/nolva-core";

import { twMerge } from "@/services/TailwindMergeService";

interface Props {
  /**
   * The source of the image.
   */
  src: string;

  /**
   * The source of the poster image.
   */
  posterSrc?: string | { src: string };

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
      poster={typeof posterSrc === "object" ? posterSrc.src : posterSrc}
      controls={!background}
      controlsList={protect ? "nodownload" : undefined}
      autoPlay={background}
      muted={background}
      loop={background}
      preload={posterSrc === undefined ? "metadata" : "none"}
      data-component="MediaVideoLocal"
      className={twMerge("w-full aspect-video", className)}
    >
      <source src={src} type={`video/${getExtension(src)}`} />
    </video>
  );
}
