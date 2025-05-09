import { twMerge } from "tailwind-merge";

import { Container } from "@/components/Surface/Container/Container";

import type { ComponentProps } from "react";

export function HeaderContainer({
  className,
  ...props
}: ComponentProps<typeof Container>) {
  return (
    <Container
      className={twMerge(
        "flex items-center justify-between gap-x-4",
        className,
      )}
      {...props}
    />
  );
}
