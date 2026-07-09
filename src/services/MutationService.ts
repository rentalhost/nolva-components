export function listenMutationObserver(
  element: Element | null | undefined,
  options: MutationObserverInit,
  callback: MutationCallback,
  shouldImmediate = true,
) {
  const observer = new MutationObserver(callback);

  if (shouldImmediate) {
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

export function listenResizeObserver(
  element: Element | null | undefined,
  options: ResizeObserverOptions,
  callback: ResizeObserverCallback,
  shouldImmediate = true,
) {
  const observer = new ResizeObserver(callback);

  if (shouldImmediate) {
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
