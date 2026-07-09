import type { PropsWithChildren, ReactNode } from "react";
interface Properties extends PropsWithChildren {
    /**
     * The id of the hero.
     */
    id?: string;
    /**
     * The class name of the hero.
     */
    className?: string;
    /**
     * The content of the background.
     */
    backgroundContent: ReactNode;
    /**
     * The content of the hero.
     */
    children?: ReactNode;
}
export declare function Hero({ id, className, backgroundContent, children }: Properties): import("react").JSX.Element;
export {};
