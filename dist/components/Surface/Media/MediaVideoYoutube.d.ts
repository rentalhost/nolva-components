interface Props {
    /**
     * The source of the image.
     */
    id: string;
    /**
     * The class name of the image.
     */
    className?: string;
    /**
     * The class name of the iframe.
     */
    iframeClassName?: string;
    /**
     * The class name of the thumbnail.
     */
    thumbnailClassName?: string;
    /**
     * The class name of the overlay.
     */
    overlayClassName?: string;
    /**
     * The class name of the play button.
     */
    playClassName?: string;
    /**
     * The callback when the play button is clicked.
     */
    onPlay?(this: void, id: string): void;
}
export declare function MediaVideoYoutube({ id, className, iframeClassName, thumbnailClassName, overlayClassName, playClassName, onPlay, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
