declare const allBreakpoints: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];
type Breakpoint = (typeof allBreakpoints)[number];
export type Breakpoints = Partial<Record<Breakpoint, number>>;
export declare function normalizeBreakpoints(prefix: string, breakpoints: Breakpoints | number | undefined, defaultValue: number, maxValue?: number): {
    [k: string]: number;
};
export {};
