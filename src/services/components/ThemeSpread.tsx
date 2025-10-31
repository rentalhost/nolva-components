import type { ReactNode } from "react";

import { Theme, variants } from "@/components/Theme/Theme/Theme";

interface Props {
  children(this: void, variant: string): ReactNode;
}

export function ThemeSpread({ children }: Props) {
  return Object.keys(variants).map((variant) => (
    <Theme key={variant} variant={variant}>
      {children(variant)}
    </Theme>
  ));
}
