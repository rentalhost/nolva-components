"use client";

import { twMerge } from "@rentalhost/nolva-core";
import Link from "next/link";
import { useContext } from "react";

import type { ComponentProps } from "react";

import { ResourceContext } from "@/components/Generic/Resource/ResourceProvider";

interface Props extends ComponentProps<"div"> {
  /**
   * The type of the resource.
   */
  resourceType: string;

  /**
   * The ID of the resource.
   */
  resourceId: number;
}

export function Resource({
  resourceType,
  resourceId,
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
          href={`https://${domain}/admin/${resourceType}/edit/${resourceId}`}
          className="group-not-data-enabled/resource:opacity-0 group-not-data-enabled/resource:pointer-events-none absolute inset-0 rounded bg-red-500/25 outline-2 outline-offset-2 outline-red-500 transition hover:bg-red-500/50"
        />
      )}
    </div>
  );
}
