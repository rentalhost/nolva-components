"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { createContext, useCallback, useMemo } from "react";

import type { PropsWithChildren } from "react";

interface ContextProperties {
  sendEvent?(this: void, name: string, parameters?: Record<string, unknown>): void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AnalyticsContext = createContext<ContextProperties>({});

interface Properties extends PropsWithChildren {
  gaId?: string;
}

export function AnalyticsProvider({
  gaId = process.env["NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"],
  children,
}: Properties) {
  const sendEvent = useCallback((name: string, parameters?: Record<string, unknown>) => {
    sendGAEvent("event", name, parameters ?? {});
  }, []);

  const value = useMemo(() => ({ sendEvent }), [sendEvent]);

  return (
    <AnalyticsContext.Provider value={value}>
      {children}

      {gaId !== undefined && <GoogleAnalytics gaId={gaId} />}
    </AnalyticsContext.Provider>
  );
}
