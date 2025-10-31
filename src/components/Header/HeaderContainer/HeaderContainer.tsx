import { twMerge } from "@rentalhost/nolva-core";

import type { ComponentProps } from "react";

import { Container } from "@/components/Primitive/Container/Container";

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
