import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Container id to be used as anchor.
     */
    id?: string;
    /**
     * Container vertical margin.
     *
     * Default to `16` (4rem).
     */
    marginY?: number;
    /**
     * Container class name.
     */
    className?: string;
    /**
     * Container children.
     */
    children?: ReactNode;
}
export declare function Section({ id, marginY, className, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
