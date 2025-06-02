import { Timer } from "./classes/Timer";
type EasingFunction = (t: number) => number;
declare const easings: {
    readonly linear: (input: number) => number;
    readonly "ease-in": (input: number) => number;
    readonly "ease-out": (input: number) => number;
    readonly "ease-in-out": (input: number) => number;
    readonly ease: (input: number) => number;
};
export type Easing = EasingFunction | keyof typeof easings;
export declare function animate(duration: number, onUpdate: (progress: number) => void, easing?: Easing, onComplete?: () => void): Timer;
export {};
