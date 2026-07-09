import type { ComponentProps } from "react";
interface Properties extends ComponentProps<"select"> {
    /**
     * The placeholder of the select.
     */
    placeholder?: string;
    /**
     * The options of the select.
     */
    options: SelectOption[];
    /**
     * The className of the option.
     */
    className?: string;
    /**
     * The className of the arrow.
     */
    arrowClassName?: string;
}
interface SelectOption {
    /**
     * The title of the option.
     */
    title?: string;
    /**
     * The value of the option.
     *
     * Defaults to same as `title`.
     */
    value?: string;
    /**
     * The className of the option.
     */
    className?: string;
}
export declare function Select({ placeholder, options, className, arrowClassName, ...properties }: Properties): import("react").JSX.Element;
export {};
