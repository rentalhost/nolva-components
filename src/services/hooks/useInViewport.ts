"use client";

import { useCallback, useRef, useState } from "react";

export type Threshold = number | `${number}px`;

export function useInViewport(
  /**
   * The threshold to consider the element visible.
   * Can be a number (percentual) or a pixel value.
   *
   * Defaults to `25px`.
   */
  threshold: Threshold = "25px",

  /**
   * Whether to consider the element visible after it leaves the viewport.
   *
   * Defaults to `false`.
   */
  considerVisibleAfterLeavingViewport = false,
) {
  const [visible, setVisible] = useState(false);

  const observer = useRef<IntersectionObserver>(null);

  const disconnect = useCallback(() => {
    observer.current?.disconnect();
    observer.current = null;
  }, []);

  const ref = useCallback(
    (element: Element | null | undefined) => {
      disconnect();

      if (element instanceof HTMLElement) {
        const observerNew = new IntersectionObserver(
          ([entry]) => {
            setVisible(
              entry!.isIntersecting ||
                (considerVisibleAfterLeavingViewport &&
                  entry!.boundingClientRect.top < 0),
            );
          },
          typeof threshold === "number"
            ? { threshold }
            : { threshold: 0, rootMargin: `0px 0px -${threshold} 0px` },
        );

        observerNew.observe(element);
        observer.current = observerNew;
      }
    },
    [considerVisibleAfterLeavingViewport, disconnect, threshold],
  );

  return { ref, visible, disconnect } as const;
}
