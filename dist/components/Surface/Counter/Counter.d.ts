import type { Easing } from "../../../services/AnimateService";
interface Props {
    /**
     * Initial value.
     *
     * Defaults to `0`.
     */
    from?: number;
    /**
     * Final value.
     */
    to: number;
    /**
     * Number of decimals.
     *
     * Defaults to `0`.
     */
    decimals?: number;
    /**
     * Animation duration.
     *
     * Defaults to `1000`.
     */
    duration?: number;
    /**
     * Easing function.
     *
     * Defaults to `"ease-in-out"`.
     */
    easing?: Easing;
    /**
     * Class name.
     */
    className?: string;
}
export declare function Counter({ from, to, decimals, duration, easing, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
