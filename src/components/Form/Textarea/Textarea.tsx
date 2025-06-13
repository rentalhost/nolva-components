import { inputClassName } from "@/components/Form/Input/Input";
import { twMerge } from "@/services/TailwindMergeService";

import type { ComponentProps } from "react";

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-component="Textarea"
      suppressHydrationWarning
      className={twMerge(inputClassName, className)}
      {...props}
    />
  );
}
