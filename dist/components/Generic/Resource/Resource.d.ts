import type { ComponentProps } from "react";
interface Properties extends Omit<ComponentProps<"div">, "id"> {
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
export declare function Resource({ type, id, className, children, ...properties }: Properties): import("react").JSX.Element;
export {};
