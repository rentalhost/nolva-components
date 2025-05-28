export function listenScroll(callback: () => void) {
  addEventListener("scroll", callback);
  addEventListener("resize", callback);

  callback();

  return {
    unload: () => {
      removeEventListener("scroll", callback);
      removeEventListener("resize", callback);
    },
  };
}
