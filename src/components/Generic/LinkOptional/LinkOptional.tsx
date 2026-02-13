import Link from "next/link";

import type { ComponentProps } from "react";

interface Props extends Omit<ComponentProps<typeof Link>, "href"> {
  href?: string | null;
}

export function LinkOptional({ href, ...props }: Props) {
  if (href === undefined || href === null) {
    return <a {...props} />;
  }

  return <Link href={href} {...props} />;
}
