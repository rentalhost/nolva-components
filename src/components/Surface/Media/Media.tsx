"use client";

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
import { getExtension } from "@/services/FileService";

import type { ComponentProps } from "react";

type ImageProps = ComponentProps<typeof MediaImage> & {
  src: `${string}.${(typeof imageAllowedExtensions)[number]}`;
};

type SVGProps = ComponentProps<typeof MediaSVG> & {
  src: `${string}.${(typeof svgAllowedExtensions)[number]}`;
};

type VideoLocalProps = ComponentProps<typeof MediaVideoLocal> & {
  src: `${string}.${(typeof videoLocalAllowedExtensions)[number]}`;
};

type Props = ImageProps | SVGProps | VideoLocalProps;

function isExtension<ThenProps extends Props>(
  props: Props,
  extensions: readonly string[],
): props is ThenProps {
  return extensions.includes(getExtension(props.src));
}

export function Media(props: Props) {
  if (isExtension<ImageProps>(props, imageAllowedExtensions)) {
    return <MediaImage {...props} />;
  }

  if (isExtension<ImageProps>(props, svgAllowedExtensions)) {
    return <MediaSVG {...props} />;
  }

  if (isExtension<VideoLocalProps>(props, videoLocalAllowedExtensions)) {
    return <MediaVideoLocal {...props} />;
  }

  return null;
}
