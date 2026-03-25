import type { IconType } from "@rheactor/rheactor-font-awesome";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { SliderArrow } from "./SliderArrow";
interface Props extends PropsWithChildren {
    /**
     * Animation duration in milliseconds.
     *
     * Defaults to `5000`.
     */
    duration?: number;
    /**
     * Enable infinite scrolling.
     *
     * Defaults to `false`.
     */
    infinity?: boolean;
    /**
     * Wrap mode when reaching the end.
     *
     * Ignored when `infinity` is `true`.
     *
     * Defaults to `rewind`.
     */
    wrapMode?: "bounce" | "rewind" | "stop";
    /**
     * Justify items to fills the container.
     *
     * Defaults to `false`.
     */
    justify?: "expand" | "space-between";
    /**
     * Center items when there is enough space.
     *
     * Ignored when `justify` is defined.
     *
     * Defaults to `false`.
     */
    centered?: boolean;
    /**
     * Number of steps for autoplay.
     *
     * Defaults to `1`.
     */
    steps?: number | "page";
    /**
     * Step duration in milliseconds.
     *
     * When `steps` is page, this value is multiplied by `sqrt(visible items)`.
     *
     * Defaults to `300`.
     */
    stepDuration?: number;
    /**
     * Stop autoplay on first interaction.
     *
     * Defaults to `false`.
     */
    stopOnInteraction?: boolean;
    /**
     * Allow autoplay to works when slider is offscreen.
     *
     * Defaults to `false`.
     */
    playOffscreen?: boolean;
    /**
     * Free flow mode.
     *
     * Defaults to `false`.
     */
    freeFlow?: boolean;
    /**
     * Container class name, including grid and gap rules.
     *
     * Defaults to `grid-cols-1`.
     */
    className?: string;
    /**
     * Container children.
     */
    children?: ReactNode;
    /**
     * Arrows icon.
     *
     * Defaults to `faAngleLeft`.
     */
    arrowsIcon?: IconType;
    /**
     * Arrows advance mode.
     *
     * Defaults to same as `step`.
     */
    arrowsSteps?: number | "page";
    /**
     * Arrows class name applied to each arrow.
     */
    arrowsClassName?: string;
    /**
     * Arrows placement.
     *
     * - `disabled` - Arrows are disabled.
     * - `external` - Arrows are placed outside the container.
     * - `internal` - Arrows are placed inside the container.
     * - `overlay` - Arrows are placed on top of the container, overlaying items.
     *
     * Defaults to `overlay`.
     */
    arrowsPlacement?: ComponentProps<typeof SliderArrow>["placement"];
    /**
     * Arrows placement fallback.
     *
     * It occurs when `arrowsPlacement` is `external` and there is not enough space to place the arrows on window.
     *
     * - `disabled` - Arrows are disabled.
     * - `internal` - Arrows are placed inside the container.
     * - `overlay` - Arrows are placed on top of the container, overlaying items.
     *
     * Defaults to `overlay`.
     */
    arrowsPlacementFallback?: Exclude<ComponentProps<typeof SliderArrow>["placement"], "external">;
    /**
     * Callback fired when the slider navigates.
     */
    onNavigate?(this: void): void;
}
export declare function Slider({ duration, infinity, wrapMode, justify, centered, steps, stepDuration, stopOnInteraction, playOffscreen, freeFlow, className, children, arrowsIcon, arrowsSteps, arrowsClassName, arrowsPlacement, arrowsPlacementFallback, onNavigate, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
