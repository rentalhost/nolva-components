"use client";

import type { PropsWithChildren, ReactNode } from "react";

import { useReady } from "@/services/hooks/useReady";

export function Ready({ children }: PropsWithChildren) {
  const isReady = useReady();

  return isReady && (children as Awaited<ReactNode>);
}
