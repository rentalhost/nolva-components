import type { ReactNode } from "react";
type ArrowPlacement = "disabled" | "external" | "internal" | "overlay";
interface Props {
    ref?: React.RefObject<HTMLDivElement | null>;
    icon: ReactNode;
    className?: string;
    rotate?: boolean;
    placement: ArrowPlacement;
    isDisabled?: boolean;
    onClick(this: void): void;
}
export declare function SliderArrow({ ref, icon, className, rotate, placement, isDisabled, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
