import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
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
export declare function PrintContainer({ children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
