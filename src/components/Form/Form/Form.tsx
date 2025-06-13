import { twMerge } from "@/services/TailwindMergeService";

import type { ComponentProps } from "react";

export function Form({ className, ...props }: ComponentProps<"form">) {
  return (
    <form
      data-component="Form"
      suppressHydrationWarning
      className={twMerge(
        "grid max-mobile:[--grid-cols:1] not-max-mobile:grid-cols-12 gap-4",
        className,
      )}
      {...props}
    />
  );
}
