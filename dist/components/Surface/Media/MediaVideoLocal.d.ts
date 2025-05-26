interface Props {
    /**
     * The source of the image.
     */
    src: string;
    /**
     * The source of the poster image.
     */
    posterSrc?: string;
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
export declare function MediaVideoLocal({ src, posterSrc, background, protect, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
