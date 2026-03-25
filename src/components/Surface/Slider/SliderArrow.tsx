import { twMerge } from "@rentalhost/rheactor-core";
import { Icon } from "@rheactor/rheactor-font-awesome";

import type { IconType } from "@rheactor/rheactor-font-awesome";

export type ArrowAdvance = "batch" | "sequential";

type ArrowPlacement = "disabled" | "external" | "internal" | "overlay";

interface Props {
  ref?: React.RefObject<HTMLDivElement | null>;
  icon: IconType;
  className?: string;
  rotate?: boolean;
  placement: ArrowPlacement;
  isDisabled: boolean;
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
    <div data-component="SliderArrow" className="flex items-center">
      <div
        ref={ref}
        data-disabled={isDisabled ? true : undefined}
        className={twMerge(
          "data-disabled:opacity-25 bg-theme-400 hover:bg-theme-500 cursor-pointer rounded-full p-2 active:brightness-90 text-white z-10",
          className,
          "hover:transition data-disabled:pointer-events-none flex items-center",
          rotate && "rotate-180 origin-center",
          placement === "disabled" && "hidden",
          placement === "overlay" && "absolute",
          placement === "overlay" && rotate && "-translate-x-full",
          placement === "external" && "absolute",
          placement === "external" && !rotate && "-translate-x-full",
        )}
        onClick={onClick}
      >
        <Icon type={icon} />
      </div>
    </div>
  );
}
