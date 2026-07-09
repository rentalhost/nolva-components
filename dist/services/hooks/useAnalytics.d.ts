export declare function useAnalytics(): {
    sendEvent: ((this: void, name: string, parameters?: Record<string, unknown>) => void) | undefined;
};
