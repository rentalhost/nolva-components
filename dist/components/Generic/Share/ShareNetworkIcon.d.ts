import type { ShareNetwork } from "./ShareNetwork";
interface Props {
    network: ShareNetwork;
    title: string;
    url: string;
    className?: string;
    suppressHydrationWarning?: boolean;
    onClick(this: void): void;
}
export declare function ShareNetworkIcon({ network, title, url, className, suppressHydrationWarning, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
