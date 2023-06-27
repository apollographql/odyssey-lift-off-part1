import React, { ComponentProps } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';

const renderApollo = (
  node: React.ReactElement,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options }: Pick<ComponentProps<typeof MockedProvider>, 'mocks' | 'addTypename' | 'defaultOptions' | 'cache' | 'resolvers'>
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options
  );
};

export * from '@testing-library/react';
export { renderApollo };
