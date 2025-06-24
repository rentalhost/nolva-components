interface Props {
    /**
     * The content class name.
     */
    contentClassName?: string;
    /**
     * The title.
     *
     * Defaults to "WhatsApp".
     */
    title?: string;
    /**
     * The title class name.
     */
    titleClassName?: string;
    /**
     * The phone number.
     */
    phone: string;
    /**
     * The phone number omit prefix.
     */
    phonePrefix?: string;
    /**
     * The phone number class name.
     */
    phoneClassName?: string;
    /**
     * The icon class name.
     */
    iconClassName?: string;
    /**
     * The button class name.
     */
    className?: string;
}
export declare function WhatsappButton({ contentClassName, title, titleClassName, phone, phonePrefix, phoneClassName, iconClassName, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
