import type { ComponentProps, ReactNode } from "react";
import type { PropsWithChildren } from "react";
interface Props extends PropsWithChildren, Pick<ComponentProps<"label">, "ref"> {
    /**
     * The title of the label.
     */
    title?: ReactNode;
    /**
     * The primary placeholder of the children input.
     *
     * - If `true`, the primary placeholder will be the title.
     * - If `string`, the primary placeholder will be the string.
     */
    primaryPlaceholder?: string | true;
    /**
     * Whether the label is required.
     */
    required?: boolean;
    /**
     * The size of the label.
     */
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
export declare function Label({ ref, title, primaryPlaceholder, required, size, titleClassName, className, children, childrenClassName, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
