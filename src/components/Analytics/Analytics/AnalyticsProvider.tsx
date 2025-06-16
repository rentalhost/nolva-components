"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { sendGAEvent } from "@next/third-parties/google";
import { createContext, useCallback, useMemo } from "react";

import type { PropsWithChildren } from "react";

interface ContextProps {
  sendEvent?(this: void, name: string, params?: Record<string, unknown>): void;
}

export const AnalyticsContext = createContext<ContextProps>({});

interface Props extends PropsWithChildren {
  gaId?: string;
}

export function AnalyticsProvider({
  gaId = process.env["NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"],
  children,
}: Props) {
  const sendEvent = useCallback(
    (name: string, params?: Record<string, unknown>) => {
      sendGAEvent("event", name, params ?? {});
    },
    [],
  );

  const value = useMemo(() => ({ sendEvent }), [sendEvent]);

  return (
    <AnalyticsContext.Provider value={value}>
      {children}

      {gaId !== undefined && <GoogleAnalytics gaId={gaId} />}
    </AnalyticsContext.Provider>
  );
}
