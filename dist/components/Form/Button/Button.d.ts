import type { ComponentProps, PropsWithChildren } from "react";
import type { JSX } from "react/jsx-runtime";
interface Props extends PropsWithChildren {
    type?: ComponentProps<"button">["type"];
    /**
     * Determines if the button is disabled.
     */
    disabled?: boolean;
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
    /**
     * Additional CSS classes to apply to the button.
     */
    className?: string;
}
export declare function Button({ type, disabled, fill, className, asChild, children, }: Props): JSX.Element;
export {};
