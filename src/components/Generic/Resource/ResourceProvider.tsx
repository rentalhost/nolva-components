"use client";

import { createContext, useEffect, useMemo, useState } from "react";

import type { PropsWithChildren } from "react";

import { listenWindowEvent } from "@/services/EventService";
import { useLocalStorage } from "@/services/hooks/useLocalStorage";

interface ContextProps {
  domain?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ResourceContext = createContext<ContextProps>({});

export function ResourceProvider({ children }: PropsWithChildren) {
  const [domain, setDomain] = useLocalStorage<string>("cms.domain");
  const [enabled, setEnabled] = useState(false);

  useEffect(
    () =>
      listenWindowEvent(["keydown", "keyup", "focusout"], (ev) => {
        setEnabled(ev instanceof KeyboardEvent && ev.ctrlKey && ev.shiftKey);
      }),
    [],
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlDomain = url.searchParams.get("cms.domain");

    if (urlDomain !== null) {
      setDomain(urlDomain);
    }
  }, [setDomain]);

  const value = useMemo(() => ({ domain }), [domain]);

  return (
    <ResourceContext.Provider value={value}>
      <div
        className="group/resource contents"
        data-enabled={enabled || undefined}
      >
        {children}
      </div>
    </ResourceContext.Provider>
  );
}
