"use client";

import { useContext } from "react";

import { FormContext } from "@/components/Form/Form/FormProvider";
import { LabelContext } from "@/components/Form/Label/LabelProvider";
import { twMerge } from "@/services/TailwindMergeService";

import type { ComponentProps } from "react";

type InputCheckbox = "checkbox";
type InputColor = "color";
type InputDate = "date" | "datetime-local" | "month" | "time" | "week";
type InputFile = "file";
type InputHidden = "hidden";
type InputNumber = "number";
type InputRadio = "radio";
type InputRange = "range";
type InputText = "email" | "password" | "search" | "tel" | "text" | "url";

interface InputTextProps extends ComponentProps<"input"> {
  /**
   * Input type.
   */
  type?:
    | InputCheckbox
    | InputColor
    | InputDate
    | InputFile
    | InputHidden
    | InputNumber
    | InputRadio
    | InputRange
    | InputText;
}

type Props = InputTextProps;

export const inputClassName =
  "border-theme-400 disabled:bg-theme-50 disabled:text-theme-200 disabled:border-theme-50 not-disabled:shadow outline-theme-800/0 hover:border-theme-500 focus:outline-theme-800 placeholder:text-theme-400 block w-full rounded border bg-white p-2 px-4 text-neutral-600 transition-all focus:outline-1 disabled:pointer-events-none";

export function Input({
  type = "text",
  placeholder,
  className,
  ...props
}: Props) {
  const { focused } = useContext(FormContext);
  const { primaryPlaceholder } = useContext(LabelContext);

  return (
    <input
      type={type}
      data-component="Input"
      suppressHydrationWarning
      className={twMerge(inputClassName, className)}
      placeholder={focused === true ? placeholder : primaryPlaceholder}
      {...props}
    />
  );
}
