import Link from "next/link";

import { twMerge } from "@/services/TailwindMergeService";

import type { ShareNetwork } from "@/components/Generic/Share/ShareNetwork";

interface Props {
  network: ShareNetwork;
  title: string;
  url: string;
  className?: string;
  onClick(this: void): void;
}

const shareNetworkIconClassName =
  "cursor-pointer rounded-sm p-2 transition hover:scale-105";

export function ShareNetworkIcon({
  network,
  title,
  url,
  className,
  onClick,
}: Props) {
  const NetworkIcon = network.icon;

  if (network.url === "native") {
    return (
      <div
        data-component="ShareNetworkIconNative"
        data-network={network.name.toLowerCase()}
        suppressHydrationWarning
        className={twMerge(
          shareNetworkIconClassName,
          network.className,
          className,
        )}
        onClick={() => {
          void navigator.share({ title, url });
          onClick();
        }}
      >
        <NetworkIcon className="size-full" />
      </div>
    );
  }

  return (
    <Link
      target="_blank"
      href={network.url({ title, url })}
      data-component="ShareNetworkIcon"
      data-network={network.name.toLowerCase()}
      className={twMerge(
        shareNetworkIconClassName,
        network.className,
        className,
      )}
      onClick={onClick}
    >
      <NetworkIcon className="size-full" />
    </Link>
  );
}
