import type { Arrayable } from "@rentalhost/rheactor-core";
type UnloadCallback = () => void;
type Callback = (event: Event, unload: UnloadCallback) => void;
export declare function listenEvent(element: EventTarget, eventName: Arrayable<keyof WindowEventMap>, callback: EventListener, immediate?: boolean): () => void;
export declare function listenScroll(element: EventTarget, callback: Callback): () => void;
export declare function listenWindowEvent(eventName: Arrayable<keyof WindowEventMap>, callback: EventListener, immediate?: boolean): () => void;
export declare function listenWindowScroll(callback: Callback): () => void;
export {};
