import type { ComponentProps } from "react";
import type { JSX } from "react/jsx-runtime";
interface Props extends ComponentProps<"button"> {
    /**
     * The type of the button.
     *
     * Defaults to "button".
     */
    type?: ComponentProps<"button">["type"];
    /**
     * Specifies the fill style of the button.
     * Can be "outline", "solid", or "transparent".
     *
     * Defaults to "solid".
     */
    fill?: "outline" | "solid" | "transparent";
    /**
     * If true, the button will render as a child element.
     */
    asChild?: boolean;
}
export declare function Button({ type, disabled, fill, className, asChild, children, ...props }: Props): JSX.Element;
export {};
