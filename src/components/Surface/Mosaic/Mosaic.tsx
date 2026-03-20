"use client";

import { twMerge, shuffle as arrayShuffle } from "@rentalhost/rheactor-core";
import {
  Children,
  Fragment,
  isValidElement,
  useCallback,
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

import type { CSSProperties, JSX, PropsWithChildren, ReactNode } from "react";

import { Timer } from "@/services/classes/Timer";
import { useImmediateRef } from "@/services/hooks/useImmediateRef";
import { listenResizeObserver } from "@/services/MutationService";

interface Props extends PropsWithChildren {
  /**
   * The duration of mosaic items visibility in ms.
   *
   * Defaults to 5000.
   */
  duration?: number;

  /**
   * Whether to shuffle the items.
   *
   * Defaults to false.
   */
  shuffle?: boolean;

  /**
   * The class name of the mosaic.
   */
  className?: string;

  /**
   * The content of the mosaic.
   */
  children?: ReactNode;
}

enum AnimationState {
  SETUP,
  FADE_IN,
  VISIBLE,
  FADE_OUT,
  INVISIBLE,
}

export function Mosaic({ duration = 5000, shuffle = false, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState<JSX.Element[]>([]);
  const [columns, setColumns] = useState(0);

  const [animationState, setAnimationState] = useState(AnimationState.SETUP);
  const animationStateRef = useImmediateRef(animationState);

  const allItems = useMemo(() => {
    const childrenItems = Children.toArray(children).filter((child) => isValidElement(child));

    return shuffle ? arrayShuffle(childrenItems) : childrenItems;
  }, [children, shuffle]);

  const pastItems = useRef(new WeakMap<JSX.Element, number>());
  const pastItemsCounter = useRef(0);

  const pickItems = useCallback(
    (count = columns) =>
      allItems
        .toSorted(
          (itemA, itemB) =>
            (pastItems.current.get(itemA) ?? 0) - (pastItems.current.get(itemB) ?? 0),
        )
        .slice(0, count),
    [allItems, columns],
  );

  const refreshItems = useCallback(
    (markPastItems = false) => {
      if (markPastItems) {
        for (const item of items) {
          pastItems.current.set(item, ++pastItemsCounter.current);
        }
      }

      setItems(pickItems());
    },
    [items, pickItems],
  );

  const toInvisible = useCallback(() => {
    setAnimationState(AnimationState.FADE_OUT);
  }, []);

  const timer = useRef<Timer>(null);

  useEffect(() => {
    timer.current = new Timer(toInvisible, duration);

    return () => {
      timer.current?.stop();
    };
  }, [duration, toInvisible]);

  const readColumns = useCallback(
    () => (ref.current ? getComputedStyle(ref.current).gridTemplateColumns.split(" ").length : 0),
    [],
  );

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColumns(readColumns());
  }, [readColumns]);

  const onResize = useEffectEvent(() => {
    const columnsCount = readColumns();

    if (columnsCount === items.length) {
      return;
    }

    flushSync(() => {
      setColumns(columnsCount);
      setItems(pickItems(columnsCount));
    });

    timer.current?.start();
  });

  useEffect(
    () =>
      listenResizeObserver(ref.current, {}, () => {
        queueMicrotask(onResize);
      }),
    [],
  );

  useEffect(() => {
    if (columns > 0 && items.length === 0) {
      queueMicrotask(() => {
        refreshItems();
        setAnimationState(AnimationState.FADE_IN);
      });
    }
  }, [columns, items.length, refreshItems]);

  useEffect(() => {
    if (animationState === AnimationState.INVISIBLE) {
      queueMicrotask(() => {
        refreshItems(true);
        setAnimationState(AnimationState.FADE_IN);
      });
    }
  }, [animationState, refreshItems]);

  return (
    <div data-component="Mosaic">
      <div
        ref={ref}
        className={twMerge("grid-cols-1", className, "grid max-h-0 overflow-hidden")}
        aria-hidden
      />

      <div
        data-visible={
          animationState === AnimationState.FADE_IN ||
          animationState === AnimationState.VISIBLE ||
          undefined
        }
        className={twMerge(
          "transition starting:opacity-0 not-data-visible:opacity-0 grid grid-cols-[repeat(var(--columns),1fr)]!",
          className,
        )}
        style={{ "--columns": columns } as CSSProperties}
        onMouseEnter={() => {
          if (animationState === AnimationState.VISIBLE) {
            timer.current?.stop();
          }
        }}
        onMouseLeave={() => {
          if (animationState === AnimationState.VISIBLE) {
            timer.current?.start();
          }
        }}
        onTransitionEnd={() => {
          if (animationStateRef.current === AnimationState.FADE_IN) {
            setAnimationState(AnimationState.VISIBLE);

            timer.current?.start();
          } else if (animationStateRef.current === AnimationState.FADE_OUT) {
            setAnimationState(AnimationState.INVISIBLE);

            timer.current?.stop();
          }
        }}
      >
        {items.map((item, itemIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={itemIndex}>{item}</Fragment>
        ))}
      </div>
    </div>
  );
}
