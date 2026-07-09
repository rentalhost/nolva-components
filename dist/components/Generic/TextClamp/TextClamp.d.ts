import type { PropsWithChildren, ReactNode } from "react";
interface Properties extends PropsWithChildren {
    /**
     * Number of lines.
     */
    lines: number;
    /**
     * Class name.
     */
    className?: string;
    /**
     * Children.
     */
    children?: ReactNode;
}
export declare function TextClamp({ lines, children, className }: Properties): import("react").JSX.Element;
export {};
