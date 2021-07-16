import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';

const renderApollo = (
  node,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options }
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
      removeTypename
    >
      {node}
    </MockedProvider>,
    options
  );
};

export * from '@testing-library/react';
export { renderApollo };
