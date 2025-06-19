/* eslint-disable react/iframe-missing-sandbox */
"use client";

import { useState } from "react";

import { YoutubePlay } from "@/components/Surface/Media/fixtures/YoutubePlay";
import { Media } from "@/components/Surface/Media/Media";
import { twMerge } from "@/services/TailwindMergeService";

interface Props {
  /**
   * The source of the image.
   */
  id: string;

  /**
   * The class name of the image.
   */
  className?: string;

  iframeClassName?: string;

  thumbnailClassName?: string;

  overlayClassName?: string;

  playClassName?: string;
}

export function MediaVideoYoutube({
  id,
  className,
  iframeClassName,
  thumbnailClassName,
  overlayClassName,
  playClassName,
}: Props) {
  const [play, setPlay] = useState(false);

  return (
    <div
      data-component="MediaVideoYoutube"
      className={twMerge(
        "relative w-full aspect-video group/thumbnail transition overflow-hidden",
        !play && "active:brightness-75 cursor-pointer",
        className,
      )}
      onClick={() => {
        setPlay(true);
      }}
    >
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={twMerge("size-full absolute", iframeClassName)}
        />
      ) : (
        <>
          <Media
            src={`https://i.ytimg.com/vi_webp/${id}/sddefault.webp`}
            alt="thumbnail"
            className={twMerge(
              "size-full absolute object-cover transition group-hover/thumbnail:scale-105",
              thumbnailClassName,
            )}
            unoptimized
          />

          <div
            className={twMerge(
              "bg-linear-to-t size-full absolute flex items-center justify-center from-theme-950/75 to-theme-950/25 transition group-hover/thumbnail:from-theme-950/25",
              overlayClassName,
            )}
          />

          <YoutubePlay
            className={twMerge(
              "absolute bottom-2.5 right-2.5 w-16 shadow-lg shadow-theme-950/25 transition group-hover/thumbnail:scale-105",
              playClassName,
            )}
          />
        </>
      )}
    </div>
  );
}
