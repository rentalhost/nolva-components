import { twMerge } from "@rentalhost/nolva-core";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

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
export function WhatsappButton({
  contentClassName,
  title,
  titleClassName,
  phone,
  phonePrefix = "",
  phoneClassName,
  iconClassName,
  className,
}: Props) {
  const phoneNormalized = (phonePrefix + phone).replace(/\D/g, "");

  return (
    <Link
      href={`https://wa.me/${phoneNormalized}`}
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        "group/whatsapp fixed bottom-18 right-0 flex",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex translate-x-full flex-col justify-center rounded-l-md bg-neutral-200 px-4 opacity-0 transition group-hover/whatsapp:translate-x-0 group-hover/whatsapp:opacity-100",
          contentClassName,
        )}
      >
        <strong
          className={twMerge("font-semibold text-neutral-600", titleClassName)}
        >
          {title ?? "WhatsApp"}
        </strong>

        <span className={twMerge("text-theme-900", phoneClassName)}>
          {phone}
        </span>
      </div>

      <div
        className={twMerge(
          "size-18 relative flex items-center justify-center rounded-l-md bg-green-600 text-3xl text-white transition-all group-hover/whatsapp:rounded-l-none group-hover/whatsapp:bg-green-500",
          iconClassName,
        )}
      >
        <FaWhatsapp />
      </div>
    </Link>
  );
}
