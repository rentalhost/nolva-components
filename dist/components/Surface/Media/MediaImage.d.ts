interface Props {
    /**
     * The source of the image.
     */
    src: string;
    /**
     * The width of the image.
     */
    width: number;
    /**
     * The height of the image.
     */
    height: number;
    /**
     * The alt text of the image.
     */
    alt: string;
    /**
     * The quality of the image.
     */
    quality?: number;
    /**
     * The class name of the image.
     */
    className?: string;
}
export declare const allowedExtensions: readonly ["jpg", "png", "webp"];
export declare function MediaImage({ src, width, height, alt, quality, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
