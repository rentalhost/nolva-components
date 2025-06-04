import { Timer } from "./classes/Timer";
type EasingFunction = (t: number) => number;
declare const easings: {
    linear: (input: number) => number;
    "ease-in": (input: number) => number;
    "ease-out": (input: number) => number;
    "ease-in-out": (input: number) => number;
    ease: (input: number) => number;
};
export type Easing = EasingFunction | keyof typeof easings;
export declare function animate(duration: number, onUpdate: (progress: number) => void, easing?: Easing, onComplete?: () => void): Timer;
export {};
