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

export function inViewport(element: HTMLElement, threshold: number): boolean {
  const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = element;
  const { scrollY, scrollX, innerHeight, innerWidth } = window;

  const offsetBottom = offsetTop + offsetHeight;
  const offsetRight = offsetLeft + offsetWidth;

  const viewBottom = scrollY + innerHeight;
  const viewRight = scrollX + innerWidth;

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
