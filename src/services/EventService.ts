type UnloadCallback = () => void;

export function listenWindowEvent(
  eventName: keyof WindowEventMap,
  callback: () => void,
  immediate = true,
) {
  addEventListener(eventName, callback);

  if (immediate) {
    callback();
  }

  return () => {
    removeEventListener(eventName, callback);
  };
}

export function listenScroll(callback: (unload: UnloadCallback) => void) {
  function callbackBound() {
    callback(unload);
  }

  const unloadScroll = listenWindowEvent("scroll", callbackBound);
  const unloadResize = listenWindowEvent("resize", callbackBound, false);

  function unload() {
    unloadScroll();
    unloadResize();
  }

  return { unload };
}
