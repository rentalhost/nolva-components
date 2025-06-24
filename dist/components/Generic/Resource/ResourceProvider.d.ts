import type { PropsWithChildren } from "react";
interface ContextProps {
    domain?: string;
}
export declare const ResourceContext: import("react").Context<ContextProps>;
export declare function ResourceProvider({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export {};
