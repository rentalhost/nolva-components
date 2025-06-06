import type { Breakpoints } from "./ResponsiveService";
import type { SwiperOptions } from "swiper/types";
export declare function normalizeBreakpoints(itemsCount: number, items: Breakpoints | number, gap: Breakpoints | number, stretch: boolean): {
    [k: string]: SwiperOptions;
};
