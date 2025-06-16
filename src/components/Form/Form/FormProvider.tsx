"use client";

import { createContext, useMemo, useState } from "react";

import type { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface ContextProps {
  focused?: boolean;
  setFocused?: Dispatch<SetStateAction<boolean>>;
}

export const FormContext = createContext<ContextProps>({});

export function FormProvider({ children }: PropsWithChildren) {
  const [focused, setFocused] = useState(false);

  const value = useMemo(() => ({ focused, setFocused }), [focused]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
