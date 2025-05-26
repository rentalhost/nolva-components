import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Determines if the container has no padding.
     *
     * By default, the container has a padding of 1rem.
     */
    noPadding?: boolean;
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
export declare function Container({ noPadding, fluid, className, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
