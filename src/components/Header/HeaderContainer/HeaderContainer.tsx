import { twMerge } from "tailwind-merge";

import { Container } from "@/components/Primitive/Container/Container";

import type { ComponentProps } from "react";

export function HeaderContainer({
  className,
  ...props
}: ComponentProps<typeof Container>) {
  return (
    <Container
      className={twMerge("flex justify-between gap-x-4", className)}
      {...props}
      data-component="HeaderContainer"
    />
  );
}
