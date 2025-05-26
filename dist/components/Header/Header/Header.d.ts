import type { PropsWithChildren, ReactNode } from "react";
interface Props extends PropsWithChildren {
    /**
     * Sticky the header on top.
     *
     * When header is stuck, Tailwind variant `stuck:` will be available.
     *
     * Example: (header) `group` > (element) `group-stuck:text-blue-400`.
     *
     * Defaults to `false`.
     */
    sticky?: boolean;
    /**
     * Custom class name.
     */
    className?: string;
    /**
     * Content of the header.
     */
    children?: ReactNode;
}
export declare function Header({ sticky, className, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
