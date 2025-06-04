export function listenMutation(
  element: Node | null | undefined,
  options: MutationObserverInit,
  callback: MutationCallback,
  immediate = true,
) {
  const observer = new MutationObserver(callback);

  if (immediate) {
    callback([], observer);
  }

  if (element instanceof Node) {
    observer.observe(element, options);
  }

  return () => {
    if (element instanceof Node) {
      observer.disconnect();
    }
  };
}
