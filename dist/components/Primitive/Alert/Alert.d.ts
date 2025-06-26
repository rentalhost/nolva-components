import type { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
    /**
     * Title of the alert.
     */
    title: string;
    /**
     * Variant of the alert.
     */
    variant: "advice" | "critical" | "debug" | "error" | "info" | "success" | "warning";
}
export declare function Alert({ title, variant, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
