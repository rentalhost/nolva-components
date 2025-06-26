import {
  FaBomb,
  FaBug,
  FaBullhorn,
  FaCheck,
  FaCircleExclamation,
  FaCircleXmark,
} from "react-icons/fa6";

import { twMerge } from "@/services/TailwindMergeService";

import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons/lib";

interface Props extends PropsWithChildren {
  /**
   * Title of the alert.
   */
  title: string;

  /**
   * Variant of the alert.
   */
  variant:
    | "advice"
    | "critical"
    | "debug"
    | "error"
    | "info"
    | "success"
    | "warning";
}

class AlertVariant {
  public constructor(
    public icon: IconType,
    public bodyClassName: string,
    public titleClassName: string,
  ) {}
}

const variants = new Map<Props["variant"], AlertVariant>([
  [
    "advice",
    new AlertVariant(
      FaBullhorn,
      "text-sky-900 bg-sky-100 border border-sky-200",
      "bg-sky-300 text-sky-900",
    ),
  ],
  [
    "critical",
    new AlertVariant(
      FaBomb,
      "text-gray-50 bg-black/80 border border-gray-900",
      "bg-black text-white",
    ),
  ],
  [
    "debug",
    new AlertVariant(
      FaBug,
      "text-purple-900 bg-purple-100 border border-purple-200",
      "bg-purple-300 text-purple-900",
    ),
  ],
  [
    "error",
    new AlertVariant(
      FaCircleXmark,
      "text-red-900 bg-red-100 border border-red-200",
      "bg-red-300 text-red-900",
    ),
  ],
  [
    "info",
    new AlertVariant(
      FaBullhorn,
      "text-gray-900 bg-gray-100 border border-gray-300",
      "bg-gray-300 text-gray-900",
    ),
  ],
  [
    "success",
    new AlertVariant(
      FaCheck,
      "text-green-900 bg-green-100 border border-green-200",
      "bg-green-300 text-green-900",
    ),
  ],
  [
    "warning",
    new AlertVariant(
      FaCircleExclamation,
      "text-orange-900 bg-orange-100 border border-orange-200",
      "bg-orange-300 text-orange-900",
    ),
  ],
]);

export function Alert({ title, variant, children }: Props) {
  const {
    icon: AlertIcon,
    bodyClassName,
    titleClassName,
  } = variants.get(variant)!;

  return (
    <div data-component="Alert" className="starting:opacity-0 transition">
      <div
        className={twMerge(
          "w-fit rounded text-sm flex gap-x-2 items-center justify-center px-3 h-7 -mb-3.5 relative",
          titleClassName,
        )}
      >
        <AlertIcon className="size-3" />

        <strong className="font-semibold capitalize">{title}</strong>
      </div>

      <ul
        className={twMerge(
          "list-disc space-y-2 rounded p-3 pt-6 pl-8",
          bodyClassName,
        )}
      >
        {children}
      </ul>
    </div>
  );
}
