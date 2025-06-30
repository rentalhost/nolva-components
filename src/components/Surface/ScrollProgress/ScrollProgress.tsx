"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { listenWindowEvent } from "@/services/EventService";
import { useReady } from "@/services/hooks/useReady";
import { clamp } from "@/services/NumberService";
import { twMerge } from "@/services/TailwindMergeService";

import type { CSSProperties, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  /**
   * The className of the container.
   */
  className?: string;

  /**
   * The className of the progress bar.
   */
  progressClassName?: string;

  /**
   * The callback when the progress is updated.
   */
  onProgress?(this: void, progress: number): void;

  /**
   * The callback when the progress is completed.
   */
  onCompleted?(this: void): void;
}

export function ScrollProgress({
  className,
  progressClassName,
  children,
  onProgress,
  onCompleted,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const isReady = useReady();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    return listenWindowEvent(["scroll", "resize"], () => {
      const rect = ref.current?.getBoundingClientRect();

      if (rect !== undefined) {
        const currentProgress =
          (1 / rect.height) *
          clamp(window.innerHeight - rect.top, 0, rect.height);

        setProgress(currentProgress);
        onProgress?.(currentProgress);

        if (currentProgress === 1) {
          onCompleted?.();
        }
      }
    });
  }, [isReady, onCompleted, onProgress]);

  const scrollProgress = useMemo(
    () => (
      <div
        data-component="ScrollProgressBar"
        className={twMerge(
          "fixed top-0 left-0 h-1 w-(--progress) bg-theme-400",
          progressClassName,
        )}
        style={{ "--progress": `${progress * 100}%` } as CSSProperties}
      />
    ),
    [progress, progressClassName],
  );

  return (
    isReady && (
      <>
        {createPortal(scrollProgress, document.body)}

        <div
          ref={ref}
          data-completed={progress === 1 || undefined}
          data-component="ScrollProgress"
          className={className}
        >
          {children}
        </div>
      </>
    )
  );
}
