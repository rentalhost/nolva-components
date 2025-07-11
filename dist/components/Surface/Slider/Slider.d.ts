import { SliderArrow } from "./SliderArrow";
import type { ArrowAdvance } from "./SliderArrow";
import type { Breakpoints } from "../../../services/SwiperService";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Autoplay duration in milliseconds.
     *
     * Defaults to `5000`.
     */
    duration?: number;
    /**
     * Slide advance speed in milliseconds.
     * It multiplies to the visible items count.
     *
     * Defaults to `300`.
     */
    speed?: number;
    /**
     * Number of items per slide.
     * Supports breakpoints object.
     *
     * Defaults to `1`.
     */
    items?: Breakpoints | number;
    /**
     * Gap between items, based on `rem`.
     * Supports breakpoints object.
     *
     * Defaults to `0.5`.
     */
    gap?: Breakpoints | number;
    /**
     * Enable infinite loop.
     *
     * Defaults to `true`.
     */
    infinity?: boolean;
    /**
     * Enable free flow mode.
     *
     * Defaults to `false`.
     */
    freeFlow?: boolean;
    /**
     * Stretch items to fill the container when there is less items than needed.
     *
     * Defaults to `true`.
     */
    stretch?: boolean;
    /**
     * Center items when there is less items than needed.
     * Works only when `fill` is `false`.
     *
     * Defaults to `true`.
     */
    centered?: boolean;
    /**
     * Container class name.
     */
    className?: string;
    /**
     * Arrows icon.
     *
     * Defaults to `<FaAngleLeft />`.
     */
    arrowsIcon?: ReactNode;
    /**
     * Arrows advance mode.
     *
     * - `single` - Advance one item at a time.
     * - `visible` - Advance all visible items at a time.
     *
     * Defaults to `single`.
     */
    arrowsStepMode?: ArrowAdvance;
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
     * Pagination placement.
     *
     * - `after` - Pagination is placed after the container.
     * - `overlay` - Pagination is placed on bottom of the container, overlaying items.
     * - `false` - Pagination is disabled.
     *
     * Defaults to `after`.
     */
    pagination?: "after" | "overlay" | false;
    /**
     * Pagination class name.
     */
    paginationClassName?: string;
    /**
     * Pagination compressed mode.
     *
     * When enabled, each pagination item page represents the slider items based on visible items count.
     *
     * Defaults to `true`.
     */
    paginationCompressed?: boolean;
    /**
     * Pagination visible item pages count.
     */
    paginationLimit?: number;
    /**
     * Container children.
     */
    children?: ReactNode;
    /**
     * Callback fired when the slider navigates to a new slide.
     */
    onNavigate?(this: void): void;
}
export declare function Slider({ duration, speed, items, gap, infinity, freeFlow, stretch, centered, className, arrowsIcon, arrowsStepMode, arrowsClassName, arrowsPlacement, arrowsPlacementFallback, pagination, paginationClassName, paginationCompressed, paginationLimit, children: baseChildren, onNavigate, }: Props): false | import("react/jsx-runtime").JSX.Element;
export {};
