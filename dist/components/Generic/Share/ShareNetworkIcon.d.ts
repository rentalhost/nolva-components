import type { ShareNetwork } from "./ShareNetwork";
interface Props {
    network: ShareNetwork;
    title: string;
    url: string;
    className?: string;
    onClick(this: void): void;
}
export declare function ShareNetworkIcon({ network, title, url, className, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
