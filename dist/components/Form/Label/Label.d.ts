import type { ComponentProps, ReactNode } from "react";
import type { PropsWithChildren } from "react";
interface Props extends PropsWithChildren, Pick<ComponentProps<"label">, "ref"> {
    /**
     * The title of the label.
     */
    title?: ReactNode;
    /**
     * Whether the label is required.
     */
    required?: boolean;
    /**
     * The size of the label.
     */
    size?: 3 | 4 | 6 | 8 | 9 | 12;
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
export declare function Label({ ref, title, required, size, titleClassName, className, children, childrenClassName, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
