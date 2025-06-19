import type { ComponentProps, ElementType, ReactNode } from "react";
type TextReplacerCallback = (text: string) => ReactNode;
type TagReplacerCallback<T extends ElementType> = (props: ComponentProps<T> & Record<string, unknown>) => ReactNode;
export declare class HTMLTransformer {
    private readonly attributes;
    private readonly tags;
    private readonly tagsReplacements;
    private textReplacement;
    static createDefault(): HTMLTransformer;
    allowTag(tagName: string, attributes?: string[]): void;
    allowTags(tagNames: string[]): void;
    allowAttributes(attributes: string[]): void;
    setTextReplacer(replacement: TextReplacerCallback): void;
    setTagReplacer<T extends ElementType & string>(tagName: T, replacement: TagReplacerCallback<T>): void;
    transform(html: string): import("react").FunctionComponentElement<import("react").FragmentProps>[];
    private processChild;
    private processChildren;
}
export {};
