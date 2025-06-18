import type { JSX, PropsWithChildren, ReactNode } from "react";
type AttributeName = string;
type TransformerCallback = (props: PropsWithChildren, children: ReactNode) => JSX.Element;
type Replacer = [
    tagName: string,
    allowedAttributes?: AttributeName[],
    transformer?: TransformerCallback
];
export declare function transformHTML(input: string, replacers?: Replacer[]): string | JSX.Element | JSX.Element[];
export {};
