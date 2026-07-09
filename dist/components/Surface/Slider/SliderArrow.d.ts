import type { IconType } from "@rheactor/rheactor-font-awesome";
export type ArrowAdvance = "batch" | "sequential";
type ArrowPlacement = "disabled" | "external" | "internal" | "overlay";
interface Properties {
    ref?: React.RefObject<HTMLDivElement | null>;
    icon: IconType;
    className?: string;
    rotate?: boolean;
    placement: ArrowPlacement;
    isDisabled?: boolean;
    onClick(this: void): void;
}
export declare function SliderArrow({ ref, icon, className, rotate, placement, isDisabled, onClick, }: Properties): import("react").JSX.Element;
export {};
