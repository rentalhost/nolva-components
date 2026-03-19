import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * The duration of mosaic items visibility in ms.
     *
     * Defaults to 5000.
     */
    duration?: number;
    /**
     * Whether to shuffle the items.
     *
     * Defaults to false.
     */
    shuffle?: boolean;
    /**
     * The class name of the mosaic.
     */
    className?: string;
    /**
     * The content of the mosaic.
     */
    children?: ReactNode;
}
export declare function Mosaic({ duration, shuffle, className, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
