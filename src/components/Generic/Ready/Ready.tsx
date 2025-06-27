"use client";

import { useReady } from "@/services/hooks/useReady";

import type { PropsWithChildren, ReactNode } from "react";

export function Ready({ children }: PropsWithChildren) {
  const isReady = useReady();

  return isReady && (children as Awaited<ReactNode>);
}
