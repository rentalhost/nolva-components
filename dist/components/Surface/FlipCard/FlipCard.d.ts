import type { ReactNode } from "react";
interface Props {
    /**
     * The container class name.
     */
    className?: string;
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
    heightController?: "back" | "front";
    /**
     * The class name of the touch icon.
     */
    touchIconClassName?: string;
    /**
     * The callback when the user flips the card.
     */
    onFlip?(this: void, viewpoint: "back" | "front"): void;
}
export declare function FlipCard({ className, flipTo, axis, contentFront, contentBack, heightController, touchIconClassName, onFlip, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
