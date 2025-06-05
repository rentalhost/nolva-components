import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
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
export declare function TextClamp({ lines, children, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
