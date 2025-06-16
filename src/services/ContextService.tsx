import type { FunctionComponent, JSX, PropsWithChildren } from "react";

export function contextWrapper<C extends FunctionComponent>(
  Provider: FunctionComponent<PropsWithChildren>,
  Component: C,
): C {
  return function ({ ...props }: JSX.LibraryManagedAttributes<C, object>) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  } as C;
}
