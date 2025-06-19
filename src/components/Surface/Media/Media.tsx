"use client";

import getVideoId from "get-video-id";

import { allowedExtensions as imageAllowedExtensions } from "@/components/Surface/Media/MediaImage";
import { MediaImage } from "@/components/Surface/Media/MediaImage";
import {
  allowedExtensions as svgAllowedExtensions,
  MediaSVG,
} from "@/components/Surface/Media/MediaSVG";
import {
  allowedExtensions as videoLocalAllowedExtensions,
  MediaVideoLocal,
} from "@/components/Surface/Media/MediaVideoLocal";
import { MediaVideoYoutube } from "@/components/Surface/Media/MediaVideoYoutube";
import { getExtension } from "@/services/FileService";

import type { ComponentProps } from "react";

type ImageProps = Omit<ComponentProps<typeof MediaImage>, "src"> & {
  src: `${string}.${(typeof imageAllowedExtensions)[number]}` | (string & {});
};

type StaticImageProps = Omit<ComponentProps<typeof MediaImage>, "src"> & {
  src: { src: string };
};

type SVGProps = Omit<ComponentProps<typeof MediaSVG>, "src"> & {
  src: `${string}.${(typeof svgAllowedExtensions)[number]}` | (string & {});
};

type VideoLocalProps = Omit<ComponentProps<typeof MediaVideoLocal>, "src"> & {
  src:
    | `${string}.${(typeof videoLocalAllowedExtensions)[number]}`
    | (string & {});
};

type VideoYoutubeProps = Omit<
  ComponentProps<typeof MediaVideoYoutube>,
  "id"
> & { src: string };

type Props =
  | ImageProps
  | StaticImageProps
  | SVGProps
  | VideoLocalProps
  | VideoYoutubeProps;

function isStaticImage(props: Props): props is StaticImageProps {
  return typeof props.src === "object" && "src" in props.src;
}

function isExtension<ThenProps extends Props>(
  props: Props,
  extensions: readonly string[],
): props is ThenProps {
  return extensions.includes(getExtension(props.src as string));
}

export function Media(props: Props) {
  if (isStaticImage(props)) {
    // eslint-disable-next-line react/destructuring-assignment
    return <Media {...props} src={props.src.src} />;
  }

  if (isExtension<ImageProps>(props, imageAllowedExtensions)) {
    return <MediaImage {...props} />;
  }

  if (isExtension<ImageProps>(props, svgAllowedExtensions)) {
    return <MediaSVG {...props} />;
  }

  if (isExtension<VideoLocalProps>(props, videoLocalAllowedExtensions)) {
    return <MediaVideoLocal {...props} />;
  }

  // eslint-disable-next-line react/destructuring-assignment
  const service = getVideoId(props.src);

  if (service.service === "youtube") {
    return <MediaVideoYoutube id={service.id!} {...props} />;
  }

  return null;
}
