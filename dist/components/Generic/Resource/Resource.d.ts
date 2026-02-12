import type { ComponentProps } from "react";
interface Props extends Omit<ComponentProps<"div">, "id"> {
    /**
     * The type of the resource.
     *
     * Defaults to `media`.
     */
    type?: string;
    /**
     * The ID of the resource.
     */
    id: number;
}
export declare function Resource({ type, id, className, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
