import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  /**
   * The content of the container.
   */
  children: ReactNode;
}

/**
 * This component renders a container with some default styles for printing.
 *
 * It should be used as the outermost component when printing.
 */
export function PrintContainer({ children }: Props) {
  return (
    <div className="not-print:flex justify-center-safe items-center-safe not-print:min-h-screen not-print:bg-slate-200 not-print:p-8 not-print:w-fit not-print:min-w-full flex-col gap-y-8">
      {children}
    </div>
  );
}
