/* eslint-disable react/iframe-missing-sandbox */
"use client";

import { twMerge } from "@rentalhost/nolva-core";
import { useState } from "react";

import { YoutubePlay } from "@/components/Surface/Media/fixtures/YoutubePlay";
import { Media } from "@/components/Surface/Media/Media";
import { getVideoYoutubeThumbnail } from "@/services/VideoService";

interface Props {
  /**
   * The source of the image.
   */
  id: string;

  /**
   * The class name of the image.
   */
  className?: string;

  /**
   * The class name of the iframe.
   */
  iframeClassName?: string;

  /**
   * The class name of the thumbnail.
   */
  thumbnailClassName?: string;

  /**
   * The class name of the overlay.
   */
  overlayClassName?: string;

  /**
   * The class name of the play button.
   */
  playClassName?: string;

  /**
   * The callback when the play button is clicked.
   */
  onPlay?(this: void, id: string): void;
}

export function MediaVideoYoutube({
  id,
  className,
  iframeClassName,
  thumbnailClassName,
  overlayClassName,
  playClassName,
  onPlay,
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
        setPlay((state) => {
          if (!state) {
            onPlay?.(id);
          }

          return true;
        });
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
            src={getVideoYoutubeThumbnail(id)}
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
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 shadow-lg shadow-theme-950/25 transition group-hover/thumbnail:scale-115",
              playClassName,
            )}
          />
        </>
      )}
    </div>
  );
}
