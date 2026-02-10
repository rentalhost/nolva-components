"use client";

import { createContext } from "react";

interface ContextProps {
  primaryPlaceholder?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LabelContext = createContext<ContextProps>({
  primaryPlaceholder: undefined,
});
