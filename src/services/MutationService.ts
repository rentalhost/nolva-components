export function listenMutationObserver(
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

export function listenResizeObserver(
  element: Element | null | undefined,
  options: ResizeObserverOptions,
  callback: ResizeObserverCallback,
  immediate = true,
) {
  const observer = new ResizeObserver(callback);

  if (immediate) {
    callback([], observer);
  }

  if (element instanceof Element) {
    observer.observe(element, options);
  }

  return () => {
    if (element instanceof Element) {
      observer.disconnect();
    }
  };
}
