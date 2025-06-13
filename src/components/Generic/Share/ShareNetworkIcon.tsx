import Link from "next/link";

import { twMerge } from "@/services/TailwindMergeService";

import type { ShareNetwork } from "@/components/Generic/Share/ShareNetwork";

interface Props {
  network: ShareNetwork;
  title: string;
  url: string;
  className?: string;
}

export function ShareNetworkIcon({ network, title, url, className }: Props) {
  const NetworkIcon = network.icon;

  return (
    <Link
      target="_blank"
      href={network.url({ title, url })}
      data-component="ShareNetworkIcon"
      data-network={network.name.toLowerCase()}
      className={twMerge(
        "rounded-sm p-1.5 transition hover:scale-105",
        network.className,
        className,
      )}
    >
      <NetworkIcon className="size-full" />
    </Link>
  );
}
