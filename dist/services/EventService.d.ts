type UnloadCallback = () => void;
export declare function listenScroll(callback: (unload: UnloadCallback) => void): {
    unload: () => void;
};
export {};
