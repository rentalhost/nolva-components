"use client";

import { createContext } from "react";

interface ContextProps {
  primaryPlaceholder?: string;
}

export const LabelContext = createContext<ContextProps>({
  primaryPlaceholder: undefined,
});
