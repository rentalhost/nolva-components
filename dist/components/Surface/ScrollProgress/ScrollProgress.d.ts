import type { PropsWithChildren } from "react";
interface Properties extends PropsWithChildren {
    /**
     * The className of the container.
     */
    className?: string;
    /**
     * The className of the progress bar.
     */
    progressClassName?: string;
    /**
     * The callback when the progress is updated.
     */
    onProgress?(this: void, progress: number): void;
    /**
     * The callback when the progress is completed.
     */
    onCompleted?(this: void): void;
}
export declare function ScrollProgress({ className, progressClassName, children, onProgress, onCompleted, }: Properties): false | import("react").JSX.Element;
export {};
