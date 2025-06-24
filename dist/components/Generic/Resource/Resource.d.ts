import type { ComponentProps } from "react";
interface Props extends ComponentProps<"div"> {
    /**
     * The type of the resource.
     */
    resourceType: string;
    /**
     * The ID of the resource.
     */
    resourceId: number;
}
export declare function Resource({ resourceType, resourceId, className, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
