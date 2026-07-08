import type { FunctionComponent, JSX, PropsWithChildren } from "react";

export function contextWrapper<C extends FunctionComponent>(
  Provider: FunctionComponent<PropsWithChildren>,
  Component: C,
): C {
  return function ({ ...properties }: JSX.LibraryManagedAttributes<C, object>) {
    return (
      <Provider>
        <Component {...properties} />
      </Provider>
    );
  } as C;
}
