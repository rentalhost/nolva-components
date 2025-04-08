import type { PropsWithChildren } from "react";

/**
 * This component renders a container with some default styles for printing.
 *
 * It should be used as the outermost component when printing.
 */
export function PrintContainer({ children }: PropsWithChildren) {
  return (
    <div className="not-print:flex justify-center-safe items-center-safe not-print:min-h-screen not-print:bg-slate-200 not-print:p-8 flex-col gap-y-8">
      {children}
    </div>
  );
}
