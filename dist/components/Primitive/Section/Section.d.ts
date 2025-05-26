import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Determines if the container has no margin.
     *
     * By default, the container has a margin of 4rem and mobile margin of 2rem.
     */
    noMargin?: boolean;
    /**
     * Container class name.
     */
    className?: string;
    /**
     * Container children.
     */
    children?: ReactNode;
}
export declare function Section({ noMargin, className, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
