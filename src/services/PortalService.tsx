"use client";

import { cloneElement } from "react";
import { createRoot } from "react-dom/client";

import { deferPromise } from "@/services/PromiseService";

import type { ReactElement } from "react";
import type { RefAttributes } from "react";

export type Resolve<T> = (value: T) => void;
export type Resolver<T> = (resolve: Resolve<T>) => ReactElement;

export async function promisePortal<T>(resolver: Resolver<T>) {
  const { promise: elementPromise, resolve: elementResolve } =
    deferPromise<T>();

  const element = document.createElement("div");
  const elementRoot = createRoot(element);

  elementRoot.render(resolver(elementResolve));

  document.body.appendChild(element);

  return new Promise<T>((resolve) => {
    void elementPromise.then(resolve);
  }).finally(() => {
    queueMicrotask(() => {
      elementRoot.unmount();
      document.body.removeChild(element);
    });
  });
}

export async function promiseElement(node: ReactElement) {
  return promisePortal<HTMLElement>((resolve) =>
    cloneElement(node, {
      ref(element: HTMLElement | null) {
        if (element !== null) {
          requestAnimationFrame(() => {
            resolve(element);
          });
        }
      },
    } as RefAttributes<HTMLDivElement>),
  );
}
