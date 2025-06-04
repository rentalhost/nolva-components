import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import { generateQueryString } from "@/services/UrlService";

import type { IconType } from "react-icons/lib";

interface ShareNetworkUrlProps {
  title: string;
  url: string;
}

export class ShareNetwork {
  public constructor(
    public readonly name: string,
    public readonly icon: IconType,
    public readonly className: string,
    public readonly url: ({ title, url }: ShareNetworkUrlProps) => string,
  ) {}
}

export const networks = {
  x: new ShareNetwork(
    "X",
    FaXTwitter,
    "bg-neutral-950",
    ({ title, url }) =>
      `https://x.com/intent/tweet${generateQueryString({ text: title === "" ? undefined : `${title}\n\n`, url })}`,
  ),
  facebook: new ShareNetwork(
    "Facebook",
    FaFacebookF,
    "bg-[#1374C8]",
    ({ url }) =>
      `https://www.facebook.com/sharer/sharer.php${generateQueryString({
        // eslint-disable-next-line id-length
        u: url,
      })}`,
  ),
  linkedin: new ShareNetwork(
    "LinkedIn",
    FaLinkedinIn,
    "bg-[#3F95E0]",
    ({ url }) =>
      `https://www.linkedin.com/sharing/share-offsite${generateQueryString({ url })}`,
  ),
  whatsapp: new ShareNetwork(
    "WhatsApp",
    FaWhatsapp,
    "bg-[#00C04F]",
    ({ title, url }) =>
      `https://api.whatsapp.com/send${generateQueryString({
        text: title === "" ? url : `${title}\n\n${url}`,
      })}`,
  ),
} satisfies Readonly<Record<string, ShareNetwork>>;

export type ShareNetworkName = keyof typeof networks;
