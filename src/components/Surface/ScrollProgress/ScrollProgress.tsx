import { twMerge } from "@/services/TailwindMergeService";

interface Props {
  /**
   * Progress class name.
   */
  className?: string;
}

export function ScrollProgress({ className }: Props) {
  return (
    <div
      className={twMerge(
        "animate-scroll-progress bg-neutral-400 top-0 h-1 not-supports-scroll-timeline:hidden fixed inset-x-0  origin-left [animation-timeline:--scroll-progress]",
        className,
      )}
    />
  );
}
