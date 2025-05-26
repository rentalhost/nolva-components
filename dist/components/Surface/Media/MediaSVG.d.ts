interface Props {
    /**
     * The source of the image.
     */
    src: string;
    /**
     * The alt text of the image.
     */
    alt: string;
    /**
     * The class name of the image.
     */
    className?: string;
}
export declare const allowedExtensions: readonly ["svg"];
export declare function MediaSVG({ src, alt, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
