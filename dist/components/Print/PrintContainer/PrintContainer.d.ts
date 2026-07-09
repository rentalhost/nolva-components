import type { PropsWithChildren, ReactNode } from "react";
interface Properties extends PropsWithChildren {
    /**
     * The content of the container.
     */
    children: ReactNode;
}
/**
 * This component renders a container with some default styles for printing.
 *
 * It should be used as the outermost component when printing.
 */
export declare function PrintContainer({ children }: Properties): import("react").JSX.Element;
export {};
