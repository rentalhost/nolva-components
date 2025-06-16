"use client";

import { useContext } from "react";

import { FormContext, FormProvider } from "@/components/Form/Form/FormProvider";
import { contextWrapper } from "@/services/ContextService";
import { twMerge } from "@/services/TailwindMergeService";

import type { ComponentProps } from "react";

export const Form = contextWrapper(
  FormProvider,
  ({ onFocus, className, ...props }: ComponentProps<"form">) => {
    const { focused, setFocused } = useContext(FormContext);

    return (
      <form
        data-component="Form"
        data-focused={focused === true || undefined}
        suppressHydrationWarning
        className={twMerge(
          "grid max-mobile:[--grid-cols:1] not-max-mobile:grid-cols-12 gap-4",
          className,
        )}
        onFocus={(ev) => {
          setFocused?.(true);
          onFocus?.(ev);
        }}
        {...props}
      />
    );
  },
);
