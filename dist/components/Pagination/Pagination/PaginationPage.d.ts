import type { ReactNode } from "react";
interface Props {
    page: number;
    queryString?: string;
    isCurrent?: boolean;
    isSpread?: boolean;
    isDisabled?: boolean;
    className?: string;
    children: ReactNode;
    onClick(this: void, page: number): void;
}
export declare function PaginationPage({ page, queryString, isCurrent, isSpread, isDisabled, children, className, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
