import type { ShareNetwork } from "./ShareNetwork";
interface Properties {
    network: ShareNetwork;
    title: string;
    url: string;
    className?: string;
    suppressHydrationWarning?: boolean;
    onClick(this: void): void;
}
export declare function ShareNetworkIcon({ network, title, url, className, onClick }: Properties): import("react").JSX.Element;
export {};
