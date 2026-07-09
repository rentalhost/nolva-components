import type { PropsWithChildren } from "react";
interface ContextProperties {
    domain?: string;
}
export declare const ResourceContext: import("react").Context<ContextProperties>;
export declare function ResourceProvider({ children }: PropsWithChildren): import("react").JSX.Element;
export {};
