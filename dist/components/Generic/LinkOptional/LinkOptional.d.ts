import Link from "next/link";
import type { ComponentProps } from "react";
interface Props extends Omit<ComponentProps<typeof Link>, "href"> {
    href?: string | null;
}
export declare function LinkOptional({ href, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
