import type { PropsWithChildren } from "react";
interface ContextProperties {
    sendEvent?(this: void, name: string, parameters?: Record<string, unknown>): void;
}
export declare const AnalyticsContext: import("react").Context<ContextProperties>;
interface Properties extends PropsWithChildren {
    gaId?: string;
}
export declare function AnalyticsProvider({ gaId, children, }: Properties): import("react").JSX.Element;
export {};
