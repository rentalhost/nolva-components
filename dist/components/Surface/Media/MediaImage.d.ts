interface Properties {
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
     * Determines if the image should be loaded as a priority.
     */
    priority?: boolean;
    /**
     * Use unoptimized image mode.
     */
    unoptimized?: boolean;
    /**
     * The spot of the image.
     */
    spot?: {
        x: number;
        y: number;
    };
    /**
     * The class name of the image.
     */
    className?: string;
}
export declare const allowedExtensions: readonly ["jpg", "jpeg", "png", "webp", "gif"];
export declare function MediaImage({ src: sourceBase, alt, quality, priority, spot, className, }: Properties): import("react").JSX.Element;
export {};
