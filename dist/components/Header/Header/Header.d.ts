import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Defines the header positioning behavior.
     *
     * - `static`: the header is placed according to the normal document flow (not sticky or fixed).
     * - `absolute`: the header is positioned relative to its normal position and overlays the page content.
     * - `fixed`: the header is fixed to the top of the viewport and overlays the page content.
     * - `sticky`: the header remains at the top of the viewport as you scroll, but retains its space in the layout.
     *
     * When `static` or `absolute`, elements will never be considered as `stuck:`.
     *
     * Default is `static`.
     */
    position?: "absolute" | "fixed" | "static" | "sticky";
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
