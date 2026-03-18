import { toArray } from "@rentalhost/rheactor-core";

import type { Arrayable } from "@rentalhost/rheactor-core";

type UnloadCallback = () => void;
type Callback = (event: Event, unload: UnloadCallback) => void;

export function listenEvent(
  element: EventTarget,
  eventName: Arrayable<keyof WindowEventMap>,
  callback: EventListener,
  immediate = true,
) {
  const eventNames = toArray(eventName);

  for (const name of eventNames) {
    element.addEventListener(name, callback);
  }

  if (immediate) {
    callback(new Event("immediate"));
  }

  return () => {
    for (const name of eventNames) {
      element.removeEventListener(name, callback);
    }
  };
}

export function listenScroll(element: EventTarget, callback: Callback) {
  const unload = listenEvent(element, ["scroll", "resize"], (event) => {
    queueMicrotask(() => {
      callback(event, unload);
    });
  });

  return unload;
}

export function listenWindowEvent(
  eventName: Arrayable<keyof WindowEventMap>,
  callback: EventListener,
  immediate = true,
) {
  return listenEvent(window, eventName, callback, immediate);
}

export function listenWindowScroll(callback: Callback) {
  return listenScroll(window, callback);
}
