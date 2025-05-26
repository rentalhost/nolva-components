import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * The content of the background.
     */
    backgroundContent: ReactNode;
    /**
     * The class name of the background.
     */
    backgroundClassName?: string;
    /**
     * The content of the hero.
     */
    children?: ReactNode;
}
export declare function Hero({ backgroundContent, backgroundClassName, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
