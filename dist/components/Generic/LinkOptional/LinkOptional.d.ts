import Link from "next/link";
import type { ComponentProps } from "react";
interface Properties extends Omit<ComponentProps<typeof Link>, "href"> {
    href?: string | null;
}
export declare function LinkOptional({ href, ...properties }: Properties): import("react").JSX.Element;
export {};
