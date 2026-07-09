interface Properties {
    /**
     * The source of the image.
     */
    src: string;
    /**
     * The source of the poster image.
     */
    posterSrc?: string | {
        src: string;
    };
    /**
     * Determine if this video will autoplay in background mode.
     *
     * Defaults to `false`.
     */
    background?: boolean;
    /**
     * Determine if this video will be protected from downloading.
     */
    protect?: boolean;
    /**
     * The class name of the image.
     */
    className?: string;
}
export declare const allowedExtensions: readonly ["mp4", "webm"];
export declare function MediaVideoLocal({ src, posterSrc, background, protect, className, }: Properties): import("react").JSX.Element;
export {};
