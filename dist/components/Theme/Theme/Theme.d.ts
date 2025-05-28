import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * The variant of the theme.
     */
    variant: Variant | (string & {});
    /**
     * The content.
     */
    children: ReactNode;
}
export type Variant = VariantSemantic | "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "neutral" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "slate" | "stone" | "teal" | "violet" | "yellow" | "zinc";
type VariantSemantic = "danger" | "debug" | "error" | "info" | "success" | "warning";
export declare const variants: Readonly<Record<Variant, `theme-${string}`>>;
/**
 * A utility component to change the color of any element based on a variant as theme.
 */
export declare function Theme({ variant, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
