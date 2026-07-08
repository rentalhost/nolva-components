"use client";

import { createContext } from "react";

interface ContextProperties {
  primaryPlaceholder?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LabelContext = createContext<ContextProperties>({
  primaryPlaceholder: undefined,
});
