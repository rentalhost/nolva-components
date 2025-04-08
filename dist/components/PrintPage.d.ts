import type { CSSProperties, ReactNode } from "react";
interface Props {
    /**
     * Controls the page size.
     *
     * You can use one of the predefined sizes or define the size in a custom way.
     *
     * The default is `A4`.
     */
    size?: CustomSize | Size;
    /**
     * Controls the orientation of the page.
     *
     * The default is `portrait`.
     */
    orientation?: Orientation;
    /**
     * Controls the margin of the page.
     *
     * The default is `1cm` in all directions.
     */
    margin?: Margin;
    /**
     * Defines the header of the page.
     */
    header?: ReactNode;
    /**
     * Defines the footer of the page.
     */
    footer?: ReactNode;
    /**
     * Enables or disables the overflow warning.
     *
     * When page content overflows the vertical size limit, a visual identifier
     * shows which part of the content will be forcibly sent to the next page.
     *
     * The default is `true`.
     */
    overflowWarning?: boolean;
    /**
     * The content of the page.
     */
    children?: ReactNode;
}
type Size = keyof typeof sizes;
interface CustomSize {
    width: NonNullable<CSSProperties["width"]>;
    height: NonNullable<CSSProperties["height"]>;
}
type Orientation = "landscape" | "portrait";
type Margin = NonNullable<CSSProperties["margin"]>;
declare const sizes: {
    A4: {
        width: string;
        height: string;
    };
    Letter: {
        width: string;
        height: string;
    };
    Legal: {
        width: string;
        height: string;
    };
};
/**
 * This component renders a page with customizable size, orientation, margin, and optional header/footer.
 *
 * It also provides an overflow warning if the content exceeds the page's size.
 */
export declare function PrintPage({ size, orientation, margin, header, footer, overflowWarning, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
