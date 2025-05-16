export function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function paginate(
  current: number,
  total: number,
  visibleCount?: number,
): number[] {
  if (visibleCount === undefined) {
    return range(1, total);
  }

  if (total <= visibleCount) {
    return range(1, total);
  }

  const half = Math.floor(visibleCount / 2);

  let start = current - half;
  let end = start + visibleCount - 1;

  if (start < 1) {
    start = 1;
    end = visibleCount;
  }

  if (end > total) {
    end = total;
    start = total - visibleCount + 1;
  }

  return range(start, end);
}
