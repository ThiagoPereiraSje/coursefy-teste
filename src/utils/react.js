import React from 'react';

export function withProviders(initialElement, providers = []) {
  return providers.reduce(
    (children, Provider) => <Provider>{children}</Provider>,
    initialElement,
  );
}
