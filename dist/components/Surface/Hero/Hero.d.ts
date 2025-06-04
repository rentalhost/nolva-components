import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
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
export declare function Hero({ id, className, backgroundContent, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
