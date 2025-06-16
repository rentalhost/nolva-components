import type { PropsWithChildren } from "react";
interface ContextProps {
    sendEvent?(this: void, name: string, params?: Record<string, unknown>): void;
}
export declare const AnalyticsContext: import("react").Context<ContextProps>;
interface Props extends PropsWithChildren {
    gaId?: string;
}
export declare function AnalyticsProvider({ gaId, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
