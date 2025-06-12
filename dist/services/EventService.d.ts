import type { Arrayable } from "./ArrayService";
type UnloadCallback = () => void;
export declare function listenWindowEvent(eventName: Arrayable<keyof WindowEventMap>, callback: EventListener, immediate?: boolean): () => void;
export declare function listenScroll(callback: (unload: UnloadCallback) => void): () => void;
export {};
