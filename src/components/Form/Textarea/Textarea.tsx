"use client";

import { useContext } from "react";

import { FormContext } from "@/components/Form/Form/FormProvider";
import { inputClassName } from "@/components/Form/Input/Input";
import { LabelContext } from "@/components/Form/Label/LabelProvider";
import { twMerge } from "@/services/TailwindMergeService";

import type { ComponentProps } from "react";

export function Textarea({
  placeholder,
  className,
  ...props
}: ComponentProps<"textarea">) {
  const { focused } = useContext(FormContext);
  const { primaryPlaceholder } = useContext(LabelContext);

  return (
    <textarea
      data-component="Textarea"
      suppressHydrationWarning
      className={twMerge(inputClassName, className)}
      placeholder={
        primaryPlaceholder === undefined || focused === true
          ? placeholder
          : primaryPlaceholder
      }
      {...props}
    />
  );
}
