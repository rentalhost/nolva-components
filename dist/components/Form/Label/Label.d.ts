import type { ReactNode } from "react";
import type { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
    /**
     * The title of the label.
     */
    title?: ReactNode;
    /**
     * Whether the label is required.
     */
    required?: boolean;
    /**
     * The class name of the title.
     */
    titleClassName?: string;
    /**
     * The class name of the label.
     */
    className?: string;
    /**
     * The content of the label.
     */
    children: ReactNode;
    /**
     * The class name of the children.
     */
    childrenClassName?: string;
}
export declare function Label({ title, required, titleClassName, className, children, childrenClassName, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
