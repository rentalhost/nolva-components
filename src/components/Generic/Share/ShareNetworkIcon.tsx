import Link from "next/link";
import { twMerge } from "tailwind-merge";

import type { ShareNetwork } from "@/components/Generic/Share/ShareNetwork";

interface Props {
  network: ShareNetwork;
  title: string;
  url: string;
  className?: string;
}

export function ShareIcon({ network, title, url, className }: Props) {
  const NetworkIcon = network.icon;

  return (
    <Link
      target="_blank"
      href={network.url({ title, url })}
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
