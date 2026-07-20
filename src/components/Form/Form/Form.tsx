"use client";

import { twMerge } from "@rheactor/rheactor-core";
import { useContext } from "react";

import type { ComponentProps } from "react";

import { FormContext, FormProvider } from "#/components/Form/Form/FormProvider";
import { contextWrapper } from "#/services/ContextService";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Form = contextWrapper(
  FormProvider,
  ({ onFocus, className, ...properties }: ComponentProps<"form">) => {
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
        onFocus={(focusEvent) => {
          setFocused?.(true);
          onFocus?.(focusEvent);
        }}
        {...properties}
      />
    );
  },
);
