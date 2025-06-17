import type { SwiperOptions } from "swiper/types";
declare const allBreakpoints: {
    readonly xs: 0;
    readonly sm: 640;
    readonly md: 768;
    readonly lg: 1024;
    readonly xl: 1280;
    readonly "2xl": 1536;
};
type BreakpointName = keyof typeof allBreakpoints;
export type Breakpoints = Partial<Record<BreakpointName, number>>;
export declare function normalizeBreakpoints(itemsCount: number, items: Breakpoints | number, gap: Breakpoints | number, stretch: boolean): {
    [k: string]: SwiperOptions;
};
export {};
