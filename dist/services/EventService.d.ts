type UnloadCallback = () => void;
export declare function listenWindowEvent(eventName: keyof WindowEventMap, callback: () => void, immediate?: boolean): () => void;
export declare function listenScroll(callback: (unload: UnloadCallback) => void): {
    unload: () => void;
};
export {};
