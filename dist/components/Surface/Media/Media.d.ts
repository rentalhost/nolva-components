import type { ComponentProps } from "react";
import { allowedExtensions as imageAllowedExtensions } from "./MediaImage";
import { MediaImage } from "./MediaImage";
import { allowedExtensions as svgAllowedExtensions, MediaSVG } from "./MediaSVG";
import { allowedExtensions as videoLocalAllowedExtensions, MediaVideoLocal } from "./MediaVideoLocal";
import { MediaVideoYoutube } from "./MediaVideoYoutube";
type ImageProperties = Omit<ComponentProps<typeof MediaImage>, "src"> & {
    src: `${string}.${(typeof imageAllowedExtensions)[number]}` | (string & {});
};
type StaticImageProperties = Omit<ComponentProps<typeof MediaImage>, "src"> & {
    src: {
        src: string;
    };
};
type SVGProperties = Omit<ComponentProps<typeof MediaSVG>, "src"> & {
    src: `${string}.${(typeof svgAllowedExtensions)[number]}` | (string & {});
};
type VideoLocalProperties = Omit<ComponentProps<typeof MediaVideoLocal>, "src"> & {
    src: `${string}.${(typeof videoLocalAllowedExtensions)[number]}` | (string & {});
};
type VideoYoutubeProperties = Omit<ComponentProps<typeof MediaVideoYoutube>, "id"> & {
    src: string;
};
type Properties = ImageProperties | StaticImageProperties | SVGProperties | VideoLocalProperties | VideoYoutubeProperties;
export declare function Media(properties: Properties): import("react").JSX.Element | null;
export {};
