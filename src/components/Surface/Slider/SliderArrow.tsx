import { twMerge } from "@rentalhost/nolva-core";

import type { ReactNode } from "react";

export type ArrowAdvance = "batch" | "sequential";

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

export function SliderArrow({
  ref,
  icon,
  className,
  rotate = false,
  placement,
  isDisabled,
  onClick,
}: Props) {
  return (
    <div
      ref={ref}
      data-component="SliderArrow"
      data-disabled={isDisabled === true ? true : undefined}
      className={twMerge(
        "flex items-center -translate-x-full transition starting:opacity-0 transform-3d",
        "data-disabled:pointer-events-none data-disabled:opacity-25",
        rotate ? "right-0 translate-x-full" : "left-0",
        placement === "external"
          ? "h-full w-fit absolute z-10"
          : "translate-x-0",
        (placement === "overlay" || placement === "disabled") &&
          "absolute z-10 h-fit top-1/2 -translate-y-1/2",
        placement === "disabled" && "opacity-0 data-disabled:opacity-0",
      )}
    >
      <div
        className={twMerge(
          "bg-theme-400 hover:bg-theme-500 cursor-pointer rounded-full p-2 transition active:brightness-90 text-white",
          rotate && "rotate-y-180",
          className,
        )}
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  );
}
