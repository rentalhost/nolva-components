import { toArray } from "@rentalhost/nolva-core";

import type { Arrayable } from "@rentalhost/nolva-core";

type UnloadCallback = () => void;

export function listenWindowEvent(
  eventName: Arrayable<keyof WindowEventMap>,
  callback: EventListener,
  immediate = true,
) {
  const eventNames = toArray(eventName);

  for (const name of eventNames) {
    addEventListener(name, callback);
  }

  if (immediate) {
    callback(new Event("immediate"));
  }

  return () => {
    for (const name of eventNames) {
      removeEventListener(name, callback);
    }
  };
}

export function listenScroll(callback: (unload: UnloadCallback) => void) {
  const unload = listenWindowEvent(["scroll", "resize"], () => {
    queueMicrotask(() => {
      callback(unload);
    });
  });

  return unload;
}
