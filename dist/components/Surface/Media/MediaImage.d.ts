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
     * The quality of the image.
     */
    quality?: number;
    /**
     * Use unoptimized image mode.
     */
    unoptimized?: boolean;
    /**
     * The class name of the image.
     */
    className?: string;
}
export declare const allowedExtensions: readonly ["jpg", "png", "webp"];
export declare function MediaImage({ src, alt, quality, unoptimized, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
