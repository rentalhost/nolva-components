import type { ReactNode } from "react";
interface Props {
    /**
     * The direction-to of the flip.
     *
     * Defaults to `right`.
     */
    flipTo?: "left" | "right";
    /**
     * The axis of the flip.
     *
     * Defaults to `horizontal`.
     */
    axis?: "horizontal" | "vertical";
    /**
     * The content of the front of the flip card.
     */
    contentFront: ReactNode;
    /**
     * The content of the back of the flip card.
     */
    contentBack: ReactNode;
    /**
     * The class name of the touch icon.
     */
    touchIconClassName?: string;
}
export declare function FlipCard({ flipTo, axis, contentFront, contentBack, touchIconClassName, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
