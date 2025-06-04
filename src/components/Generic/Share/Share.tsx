"use client";

import { useEffect, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import { networks as allNetworks } from "@/components/Generic/Share/ShareNetwork";
import { ShareIcon } from "@/components/Generic/Share/ShareNetworkIcon";
import { listenWindowEvent } from "@/services/EventService";
import { listenMutation } from "@/services/MutationObserverService";
import { getSimplifiedUrl } from "@/services/UrlService";

import type { ShareNetworkName } from "@/components/Generic/Share/ShareNetwork";

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
}

export function Share({
  text = "Share",
  title,
  url,
  networks = Object.keys(allNetworks) as ShareNetworkName[],
  networkClassName,
  className,
}: Props) {
  const [documentTitle, setDocumentTitle] = useState<string>(title ?? "");
  const [documentUrl, setDocumentUrl] = useState<string>(url ?? "");

  useEffect(() => {
    if (title !== undefined) {
      return;
    }

    return listenMutation(
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
      className={twMerge(
        "bg-theme-100 text-theme-500 flex h-12 justify-between rounded p-2 shadow",
        className,
      )}
    >
      <div className="flex items-center">
        <FaShareFromSquare className="max-mobile:hidden size-5 mx-2" />

        <p>{text}</p>
      </div>

      <div className="flex gap-2 text-white">
        {networks.map((network) => (
          <ShareIcon
            key={network}
            network={allNetworks[network]}
            title={documentTitle}
            url={documentUrl}
            className={networkClassName}
          />
        ))}
      </div>
    </div>
  );
}
