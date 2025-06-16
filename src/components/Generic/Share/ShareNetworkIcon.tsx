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

export function ShareNetworkIcon({
  network,
  title,
  url,
  className,
  onClick,
}: Props) {
  const NetworkIcon = network.icon;

  return (
    <Link
      target="_blank"
      href={network.url({ title, url })}
      data-component="ShareNetworkIcon"
      data-network={network.name.toLowerCase()}
      className={twMerge(
        "rounded-sm p-2 transition hover:scale-105",
        network.className,
        className,
      )}
      onClick={onClick}
    >
      <NetworkIcon className="size-full" />
    </Link>
  );
}
