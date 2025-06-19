"use client";

import { useEffect, useMemo, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";

import { networks as allNetworks } from "@/components/Generic/Share/ShareNetwork";
import { ShareNetworkIcon } from "@/components/Generic/Share/ShareNetworkIcon";
import { listenWindowEvent } from "@/services/EventService";
import { listenMutationObserver } from "@/services/MutationService";
import { twMerge } from "@/services/TailwindMergeService";
import { getSimplifiedUrl } from "@/services/UrlService";

import type { ShareNetworkName } from "@/components/Generic/Share/ShareNetwork";
import type { CSSProperties } from "react";

interface Props {
  /**
   * Determines the text of the share header title.
   *
   * Defaults to "Share".
   */
  text?: string;

  /**
   * Determines the title of the shared content.
   *
   * Defaults to the window title.
   */
  title?: string;

  /**
   * Determines the URL of the shared content.
   *
   * Defaults to the current URL.
   */
  url?: string;

  /**
   * Determines the networks to display.
   *
   * Defaults to all networks.
   */
  networks?: ShareNetworkName[];

  /**
   * Determines the class name of the network icon.
   */
  networkClassName?: string;

  /**
   * Determines the class name of the share container.
   */
  className?: string;

  /**
   * Determines the callback when a network is clicked.
   */
  onShare?(
    this: void,
    network: string,
    documentUrl: string,
    documentTitle: string,
  ): void;
}

export function Share({
  text = "Share",
  title,
  url,
  networks = Object.keys(allNetworks) as ShareNetworkName[],
  networkClassName,
  className,
  onShare,
}: Props) {
  const [documentTitle, setDocumentTitle] = useState<string>(title ?? "");
  const [documentUrl, setDocumentUrl] = useState<string>(url ?? "");

  const selectedNetworks = useMemo(
    () =>
      networks.includes("native") && !("share" in navigator)
        ? networks.filter((network) => network !== "native")
        : networks,
    [networks],
  );

  useEffect(() => {
    if (title !== undefined) {
      return;
    }

    return listenMutationObserver(
      document.querySelector("title"),
      { childList: true },
      () => {
        setDocumentTitle(document.title);
      },
    );
  }, [title]);

  useEffect(() => {
    if (url !== undefined) {
      return;
    }

    return listenWindowEvent("popstate", () => {
      setDocumentUrl(getSimplifiedUrl());
    });
  }, [url]);

  return (
    <div
      data-component="Share"
      className={twMerge(
        "bg-theme-100 text-theme-500 grid grid-cols-[1fr_auto] justify-between rounded p-2 shadow",
        className,
      )}
    >
      <div className="grid grid-cols-[auto_1fr] items-center">
        <FaShareFromSquare className="size-5 mx-2" />

        <p>{text}</p>
      </div>

      <div
        className="grid grid-cols-[repeat(var(--networks-count),1fr)] gap-2 text-white"
        style={{ "--networks-count": selectedNetworks.length } as CSSProperties}
        suppressHydrationWarning
      >
        {selectedNetworks.map((network) => (
          <ShareNetworkIcon
            key={network}
            network={allNetworks[network]}
            title={documentTitle}
            url={documentUrl}
            className={networkClassName}
            onClick={() => {
              onShare?.(network, documentUrl, documentTitle);
            }}
          />
        ))}
      </div>
    </div>
  );
}
