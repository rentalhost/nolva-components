"use client";

import { useEffect, useState } from "react";

export function useReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsReady(true);
  }, []);

  return isReady;
}
