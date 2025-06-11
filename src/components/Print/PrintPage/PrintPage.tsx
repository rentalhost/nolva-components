import { useId, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import type { CSSProperties, ReactNode } from "react";

interface Props {
  /**
   * Controls the page size.
   *
   * You can use one of the predefined sizes or define the size in a custom way.
   *
   * The default is `A4`.
   */
  size?: CustomSize | Size;

  /**
   * Controls the orientation of the page.
   *
   * The default is `portrait`.
   */
  orientation?: Orientation;

  /**
   * Controls the margin of the page.
   *
   * The default is `1cm` in all directions.
   */
  margin?: Margin;

  /**
   * Defines the header of the page.
   */
  header?: ReactNode;

  /**
   * Defines the footer of the page.
   */
  footer?: ReactNode;

  /**
   * Controls the overflow behavior of the page content.
   *
   * - "allowed": Content is allowed to overflow without any warning or visual indicator.
   * - "warning": Displays a visual warning when content overflows the vertical size limit, highlighting the overflowing area.
   *
   * The default is `warning`.
   */
  overflowMode?: "allowed" | "warning";

  /**
   * Shortens the page if its content doesn't occupy the full height.
   *
   * The default is `false`.
   */
  shorten?: boolean;

  /**
   * The content of the page.
   */
  children: ReactNode;
}

type Size = keyof typeof sizes;

interface CustomSize {
  width: NonNullable<CSSProperties["width"]>;
  height: NonNullable<CSSProperties["height"]>;
}

type Orientation = "landscape" | "portrait";

type Margin = NonNullable<CSSProperties["margin"]>;

const sizes = {
  A4: { width: "21.0cm", height: "29.7cm" },
  Letter: { width: "8.5in", height: "11in" },
  Legal: { width: "8.5in", height: "14in" },
} satisfies Readonly<Record<string, CustomSize>>;

function isSize(value: unknown): value is Size {
  return typeof value === "string";
}

/**
 * This component renders a page with customizable size, orientation, margin, and optional header/footer.
 *
 * It also provides an overflow warning if the content exceeds the page's size.
 */
export function PrintPage({
  size = "A4",
  orientation = "portrait",
  margin = "1cm",
  header,
  footer,
  overflowMode = "warning",
  shorten = false,
  children,
}: Props) {
  const id = useId();

  const dimensions = isSize(size) ? sizes[size] : size;

  const isLandscape = orientation === "landscape";

  const width = isLandscape ? dimensions.height : dimensions.width;
  const height = isLandscape ? dimensions.width : dimensions.height;

  const options = useMemo(
    () =>
      Object.entries({
        margin: 0,
        width,
        height,
        "page-orientation": isLandscape && "rotate-left",
      }),
    [width, height, isLandscape],
  );

  const style = useMemo(() => {
    const element = document.createElement("div");

    for (const [key, value] of options) {
      element.style.setProperty(key, String(value));
    }

    return { __html: `@page ${id} { ${element.style.cssText} }` };
  }, [id, options]);

  return (
    <div
      data-component="PrintPage"
      className={twMerge(
        "w-(--width) min-h-(--height) p-(--margin) not-print:rounded-sm not-print:shadow-md not-print:shadow-gray-600/10 not-print:bg-white not-print:outline not-print:outline-gray-600/25 not-print:overflow-hidden relative break-after-page box-decoration-clone [page:var(--id)] [zoom:var(--zoom)]",
        shorten && "min-h-auto",
      )}
      style={
        {
          "--id": id,
          "--width": width,
          "--height": height,
          "--margin": margin,
        } as CSSProperties
      }
    >
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={style}
      />

      {overflowMode === "warning" && (
        <div className="top-(--height) absolute inset-x-0 bottom-0 animate-pulse bg-red-200 bg-blend-overlay print:hidden" />
      )}

      <div className="absolute inset-x-0 top-0 empty:hidden print:fixed">
        {header}
      </div>

      <div className="relative">{children}</div>

      <div
        className={twMerge(
          "top-(--height) absolute inset-x-0 -translate-y-full empty:hidden print:fixed",
          overflowMode === "allowed" && "top-auto bottom-0 -translate-y-0",
        )}
      >
        {footer}
      </div>
    </div>
  );
}
