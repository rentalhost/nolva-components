import { allowedExtensions as imageAllowedExtensions } from "./MediaImage";
import { MediaImage } from "./MediaImage";
import { allowedExtensions as svgAllowedExtensions, MediaSVG } from "./MediaSVG";
import { allowedExtensions as videoLocalAllowedExtensions, MediaVideoLocal } from "./MediaVideoLocal";
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
export declare function Media(props: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
