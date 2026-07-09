import type { ReactNode } from "react";
interface Properties {
    page: number;
    queryString?: string;
    isCurrent?: boolean;
    isSpread?: boolean;
    isDisabled?: boolean;
    className?: string;
    children: ReactNode;
    onClick(this: void, page: number): void;
}
export declare function PaginationPage({ page, queryString, isCurrent, isSpread, isDisabled, children, className, onClick, }: Properties): import("react").JSX.Element;
export {};
