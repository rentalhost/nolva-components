import { allowedExtensions as imageAllowedExtensions } from "./MediaImage";
import { MediaImage } from "./MediaImage";
import { allowedExtensions as svgAllowedExtensions, MediaSVG } from "./MediaSVG";
import { allowedExtensions as videoLocalAllowedExtensions, MediaVideoLocal } from "./MediaVideoLocal";
import { MediaVideoYoutube } from "./MediaVideoYoutube";
import type { ComponentProps } from "react";
type ImageProps = Omit<ComponentProps<typeof MediaImage>, "src"> & {
    src: `${string}.${(typeof imageAllowedExtensions)[number]}` | (string & {});
};
type StaticImageProps = Omit<ComponentProps<typeof MediaImage>, "src"> & {
    src: {
        src: string;
    };
};
type SVGProps = Omit<ComponentProps<typeof MediaSVG>, "src"> & {
    src: `${string}.${(typeof svgAllowedExtensions)[number]}` | (string & {});
};
type VideoLocalProps = Omit<ComponentProps<typeof MediaVideoLocal>, "src"> & {
    src: `${string}.${(typeof videoLocalAllowedExtensions)[number]}` | (string & {});
};
type VideoYoutubeProps = Omit<ComponentProps<typeof MediaVideoYoutube>, "id"> & {
    src: string;
};
type Props = ImageProps | StaticImageProps | SVGProps | VideoLocalProps | VideoYoutubeProps;
export declare function Media(props: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
