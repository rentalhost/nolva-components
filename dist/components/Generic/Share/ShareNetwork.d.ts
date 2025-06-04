import type { IconType } from "react-icons/lib";
interface ShareNetworkUrlProps {
    title: string;
    url: string;
}
export declare class ShareNetwork {
    readonly name: string;
    readonly icon: IconType;
    readonly className: string;
    readonly url: ({ title, url }: ShareNetworkUrlProps) => string;
    constructor(name: string, icon: IconType, className: string, url: ({ title, url }: ShareNetworkUrlProps) => string);
}
export declare const networks: {
    x: ShareNetwork;
    facebook: ShareNetwork;
    linkedin: ShareNetwork;
    whatsapp: ShareNetwork;
};
export type ShareNetworkName = keyof typeof networks;
export {};
