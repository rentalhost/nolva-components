function getVisibleDimension(
  offsetStart: number,
  offsetEnd: number,
  scrollStart: number,
  scrollEnd: number,
) {
  return Math.max(
    0,
    Math.min(offsetEnd, scrollEnd) - Math.max(offsetStart, scrollStart),
  );
}

function getOffset(
  element: Element | null,
  kind: "offsetLeft" | "offsetTop",
): number {
  return element instanceof HTMLElement
    ? element[kind] + getOffset(element.offsetParent, kind)
    : 0;
}

export function inViewport(element: HTMLElement, threshold: number): boolean {
  const offsetTop = getOffset(element, "offsetTop");
  const offsetLeft = getOffset(element, "offsetLeft");

  const { scrollY, scrollX } = window;

  if (offsetTop < scrollY || offsetLeft < scrollX) {
    return true;
  }

  const { offsetWidth, offsetHeight } = element;

  const offsetBottom = offsetTop + offsetHeight;
  const offsetRight = offsetLeft + offsetWidth;

  const viewBottom = scrollY + window.innerHeight;
  const viewRight = scrollX + window.innerWidth;

  const visibleHeight = getVisibleDimension(
    offsetTop,
    offsetBottom,
    scrollY,
    viewBottom,
  );

  const visibleWidth = getVisibleDimension(
    offsetLeft,
    offsetRight,
    scrollX,
    viewRight,
  );

  if (visibleHeight === 0 || visibleWidth === 0) {
    return false;
  }

  const elementArea = offsetWidth * offsetHeight;
  const visibleArea = visibleWidth * visibleHeight;

  const visibleRatio = visibleArea / elementArea;

  return visibleRatio >= threshold;
}
