interface Properties {
    /**
     * The name of the event to send.
     */
    eventName: string;
    /**
     * The parameters to send with the event.
     */
    eventParams?: Record<string, unknown>;
}
export declare function AnalyticsViewport({ eventName, eventParams }: Properties): import("react").JSX.Element;
export {};
