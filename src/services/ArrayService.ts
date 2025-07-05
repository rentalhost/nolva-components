import { range } from "@rentalhost/nolva-core";

export function circularRange(
  start: number,
  end: number,
  from: number,
  spread: number,
): number[] {
  const size = end - start + 1;
  const idx = (((from - start) % size) + size) % size;
  const first = (idx + 1) % size;

  return Array.from({ length: spread }, (_, i) => start + ((first + i) % size));
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
