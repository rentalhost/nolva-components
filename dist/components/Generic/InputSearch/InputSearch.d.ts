import type { FormHTMLAttributes, ReactNode } from "react";
interface Props {
    /**
     * The class name that will be appended to the container element.
     */
    className?: string;
    /**
     * The URL that the form data will be submitted to.
     */
    formAction?: FormHTMLAttributes<HTMLFormElement>["action"];
    /**
     * The method in which the form data will be submitted.
     *
     * Defaults to `get`.
     */
    formMethod?: FormHTMLAttributes<HTMLFormElement>["method"];
    /**
     * The class name that will be appended to the search icon.
     */
    iconClassName?: string;
    /**
     * The name of the search input.
     */
    inputName?: string;
    /**
     * The default value of the search input.
     */
    inputDefaultValue?: string;
    /**
     * The class name that will be appended to the search input.
     */
    inputClassName?: string;
    /**
     * The placeholder text of the search input.
     */
    inputPlaceholder?: string;
    /**
     * The class name that will be appended to the search button.
     */
    buttonClassName?: string;
    /**
     * The text of the search button.
     */
    buttonText?: ReactNode;
}
export declare function InputSearch({ className, formAction, formMethod, iconClassName, inputName, inputDefaultValue, inputClassName, inputPlaceholder, buttonClassName, buttonText, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
