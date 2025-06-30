"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

import { Button } from "@/components/Form/Button/Button";

interface Props {
  /**
   * The title of the button.
   *
   * Defaults to "Back".
   */
  title?: string;

  /**
   * The route to go back to when location.back() is not the current site.
   */
  fallbackRoute?: string;

  /**
   * The class name of the button.
   */
  className?: string;
}

export function BackButton({
  title = "Back",
  fallbackRoute,
  className,
}: Props) {
  const [useFallback, setUseFallback] = useState(true);

  useEffect(() => {
    try {
      if (new URL(document.referrer).host === location.host) {
        setUseFallback(false);
      }
    } catch {
      // Empty.
    }
  }, []);

  const contents = useMemo(
    () => (
      <>
        <FaAngleLeft />

        <span>{title}</span>
      </>
    ),
    [title],
  );

  const linkContents = useMemo(
    () =>
      useFallback && fallbackRoute !== undefined ? (
        <Link href={fallbackRoute}>{contents}</Link>
      ) : (
        <div
          onClick={() => {
            history.back();
          }}
        >
          {contents}
        </div>
      ),
    [contents, fallbackRoute, useFallback],
  );

  return (
    <Button __internalComponentType="BackButton" asChild className={className}>
      {linkContents}
    </Button>
  );
}
