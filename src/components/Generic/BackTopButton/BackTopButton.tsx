"use client";

import { FaAnglesUp } from "react-icons/fa6";

import { useAnalytics } from "@/services/hooks/useAnalytics";
import { twMerge } from "@/services/TailwindMergeService";

interface Props {
  /**
   * The title of the button.
   *
   * Defaults to "Back to Top".
   */
  title?: string;

  /**
   * The class name of the button.
   */
  className?: string;
}

export function BackTopButton({ title = "Back to Top", className }: Props) {
  const { sendEvent } = useAnalytics();

  return (
    <div
      data-component="BackTopButton"
      className={twMerge(
        "bg-theme-900/25 max-mobile:bg-theme-900 hover:bg-theme-800 active:duration-150 z-10 fixed bottom-4 right-4 flex cursor-pointer select-none items-center gap-x-1 rounded-md p-2.5 px-3 text-sm text-white transition active:scale-95 border border-white",
        className,
      )}
      onClick={() => {
        sendEvent?.("back_to_top");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaAnglesUp />

      <div className="max-mobile:hidden">{title}</div>
    </div>
  );
}
