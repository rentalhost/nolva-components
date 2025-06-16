import type { ShareNetworkName } from "./ShareNetwork";
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
    /**
     * Determines the callback when a network is clicked.
     */
    onShare?(this: void, network: string, documentUrl: string, documentTitle: string): void;
}
export declare function Share({ text, title, url, networks, networkClassName, className, onShare, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
