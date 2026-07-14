import type { ComponentProps } from "react";
interface Properties extends ComponentProps<"select"> {
    /**
     * The placeholder of the select.
     */
    placeholder?: string;
    /**
     * The options of the select.
     *
     * A `null` entry forces an empty separator (`<optgroup>`) between the
     * surrounding options, even when the adjacent groups are the same.
     */
    options: Array<OptionItem | null>;
    /**
     * The className of the option.
     */
    className?: string;
    /**
     * The className of the arrow.
     */
    arrowClassName?: string;
}
interface OptionItem {
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
    /**
     * The group this option belongs to. Options sharing the same group are
     * rendered together inside a single `<optgroup>`, respecting the order of
     * their first appearance. When omitted, the option is rendered at the root
     * of the `<select>`.
     */
    group?: string;
}
export declare function Select({ placeholder, options, className, arrowClassName, ...properties }: Properties): import("react").JSX.Element;
export {};
