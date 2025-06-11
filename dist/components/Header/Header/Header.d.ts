import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Defines the header positioning behavior.
     *
     * - `static`: positioned according to normal document flow, no special behavior.
     * - `relative`: follows normal flow, supports z-index, not sticky or fixed.
     * - `absolute`: removed from flow, positioned relative to nearest positioned ancestor.
     * - `fixed`: fixed to top of viewport, overlays content, removed from flow.
     * - `sticky`: sticks to top during scroll, retains space in layout, only works in scrollable containers.
     *
     * Elements with `relative` or `absolute` will never trigger `stuck:` state.
     *
     * Default is `relative`.
     */
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
    /**
     * Custom class name.
     */
    className?: string;
    /**
     * Content of the header.
     */
    children?: ReactNode;
}
export declare function Header({ position, className, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
