interface Props {
    /**
     * The name of the event to send.
     */
    eventName: string;
    /**
     * The parameters to send with the event.
     */
    eventParams?: Record<string, unknown>;
}
export declare function AnalyticsViewport({ eventName, eventParams }: Props): import("react/jsx-runtime").JSX.Element;
export {};
