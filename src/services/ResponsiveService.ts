const allBreakpoints = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

type Breakpoint = (typeof allBreakpoints)[number];
export type Breakpoints = Partial<Record<Breakpoint, number>>;

function getBreakpoint(
  breakpoints: Breakpoints,
  breakpoint: Breakpoint,
  defaultValue: number,
  maxValue?: number,
) {
  for (let i = allBreakpoints.indexOf(breakpoint); i >= 0; i--) {
    const breakpointLoop = allBreakpoints[i]!;

    if (breakpointLoop in breakpoints) {
      const breakpointFound = breakpoints[breakpointLoop]!;

      return maxValue === undefined
        ? breakpointFound
        : Math.min(breakpointFound, maxValue);
    }
  }

  return defaultValue;
}

function getBreakpoints(
  prefix: string,
  breakpoints: Breakpoints,
  defaultValue: number,
  maxValue?: number,
) {
  return Object.fromEntries(
    allBreakpoints.map((breakpoint) => [
      prefix + breakpoint,
      getBreakpoint(breakpoints, breakpoint, defaultValue, maxValue),
    ]),
  );
}

export function normalizeBreakpoints(
  prefix: string,
  breakpoints: Breakpoints | number | undefined,
  defaultValue: number,
  maxValue?: number,
) {
  return getBreakpoints(
    prefix,
    breakpoints === undefined
      ? { xs: 0 }
      : typeof breakpoints === "number"
        ? { xs: breakpoints }
        : breakpoints,
    defaultValue,
    maxValue,
  );
}
