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
     * Determines if the image should be loaded as a priority.
     */
    priority?: boolean;
    /**
     * The class name of the image.
     */
    className?: string;
}
export declare const allowedExtensions: readonly ["svg"];
export declare function MediaSVG({ src, alt, priority, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
