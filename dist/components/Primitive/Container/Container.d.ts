import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Determines the horizontal padding of the container.
     *
     * Defaults to `4` (1rem).
     */
    paddingX?: number;
    /**
     * Determines if the container is fluid.
     *
     * It means that the container will take the full width of the screen.
     */
    fluid?: boolean;
    /**
     * Container class name.
     */
    className?: string;
    /**
     * Container children.
     */
    children?: ReactNode;
}
export declare function Container({ paddingX, fluid, className, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
