"use client";

import { useContext } from "react";

import { inputClassName } from "@/components/Form/fixtures";
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
      placeholder={
        primaryPlaceholder === undefined || focused === true
          ? placeholder
          : primaryPlaceholder
      }
      {...props}
    />
  );
}
