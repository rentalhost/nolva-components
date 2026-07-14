import type { ComponentProps } from "react";
interface Properties extends ComponentProps<"option"> {
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
}
export declare function SelectOption({ title, value, ...properties }: Properties): import("react").JSX.Element;
export {};
