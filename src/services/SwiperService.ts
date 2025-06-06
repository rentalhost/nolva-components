import type { Breakpoints } from "@/services/ResponsiveService";
import type { SwiperOptions } from "swiper/types";

const allBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type BreakpointName = keyof typeof allBreakpoints;

function fillBreakpoints(rawBreakpoints: Breakpoints | number) {
  const breakpoints =
    typeof rawBreakpoints === "number"
      ? { xs: rawBreakpoints }
      : { ...rawBreakpoints };

  let previousBreakpoint = 1;

  for (const breakpointName of Object.keys(allBreakpoints)) {
    if (!(breakpointName in breakpoints)) {
      breakpoints[breakpointName as BreakpointName] = previousBreakpoint;
    }

    previousBreakpoint = breakpoints[breakpointName as BreakpointName]!;
  }

  return breakpoints as Record<BreakpointName, number>;
}

export function normalizeBreakpoints(
  itemsCount: number,
  items: Breakpoints | number,
  gap: Breakpoints | number,
  stretch: boolean,
) {
  const itemsBreakpoints = fillBreakpoints(items);
  const gapBreakpoints = fillBreakpoints(gap);

  return Object.fromEntries(
    Object.entries(allBreakpoints).map(([breakpointName, breakpointPixels]) => {
      const itemsBreakpoint =
        itemsBreakpoints[breakpointName as BreakpointName];

      return [
        breakpointPixels,
        {
          slidesPerView: stretch
            ? Math.min(itemsCount, itemsBreakpoint)
            : itemsBreakpoint,
          spaceBetween: gapBreakpoints[breakpointName as BreakpointName] * 4,
        } as SwiperOptions,
      ];
    }),
  );
}
