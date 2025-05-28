import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Defines the header positioning behavior.
     *
     * - `static`: the header is placed according to the normal document flow (not sticky or fixed).
     * - `fixed`: the header is fixed to the top of the viewport and overlays the page content.
     * - `sticky`: the header remains at the top of the viewport as you scroll, but retains its space in the layout.
     *
     * When not-`static`, elements will never be `stuck:`.
     *
     * Default is `static`.
     */
    position?: "fixed" | "static" | "sticky";
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
