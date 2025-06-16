"use client";

import { useContext } from "react";

import { AnalyticsContext } from "@/components/Analytics/Analytics/AnalyticsProvider";

export function useAnalytics() {
  const { sendEvent } = useContext(AnalyticsContext);

  return { sendEvent };
}
