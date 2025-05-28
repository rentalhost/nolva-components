type UnloadCallback = () => void;

export function listenScroll(callback: (unload: UnloadCallback) => void) {
  function callbackBound() {
    callback(unload);
  }

  function unload() {
    removeEventListener("scroll", callbackBound);
    removeEventListener("resize", callbackBound);
  }

  addEventListener("scroll", callbackBound);
  addEventListener("resize", callbackBound);

  callbackBound();

  return {
    unload: () => {
      removeEventListener("scroll", callbackBound);
      removeEventListener("resize", callbackBound);
    },
  };
}
