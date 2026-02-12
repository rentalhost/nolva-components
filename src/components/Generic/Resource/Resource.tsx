"use client";

import { twMerge } from "@rentalhost/nolva-core";
import Link from "next/link";
import { useContext } from "react";

import type { ComponentProps } from "react";

import { ResourceContext } from "@/components/Generic/Resource/ResourceProvider";

interface Props extends Omit<ComponentProps<"div">, "id"> {
  /**
   * The type of the resource.
   *
   * Defaults to `media`.
   */
  type?: string;

  /**
   * The ID of the resource.
   */
  id: number;
}

export function Resource({
  type = "media",
  id,
  className,
  children,
  ...props
}: Props) {
  const { domain } = useContext(ResourceContext);

  return (
    <div
      data-component="Resource"
      className={twMerge("relative", className)}
      {...props}
    >
      {children}

      {domain !== undefined && (
        <Link
          href={`https://${domain}/admin/${type}/edit/${id}`}
          className="group-not-data-enabled/resource:opacity-0 group-not-data-enabled/resource:pointer-events-none absolute inset-0 rounded bg-red-500/25 outline-2 outline-offset-2 outline-red-500 transition hover:bg-red-500/50"
        />
      )}
    </div>
  );
}
