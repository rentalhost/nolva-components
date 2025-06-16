import type { Threshold } from "../../../services/hooks/useInViewport";
import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Effect to apply.
     *
     * Defaults to none (respects `fadeEffect`).
     */
    effect?: "slideDown" | "slideLeft" | "slideRight" | "slideUp" | "zoomIn" | "zoomOut";
    /**
     * Animation duration.
     *
     * Defaults to `400` (0.4s).
     */
    duration?: number;
    /**
     * Animation easing.
     *
     * Defaults to `easeInOut`.
     */
    easing?: "ease-in-out" | "ease-in" | "ease-out" | "ease" | "linear";
    /**
     * Whether to apply the animation always.
     *
     * Defaults to `false`.
     */
    always?: boolean;
    /**
     * Animation threshold.
     *
     * Defaults to `25px`.
     */
    threshold?: Threshold;
    /**
     * Container children.
     */
    children?: ReactNode;
}
export declare function Animate({ effect, duration, easing, always, threshold, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
