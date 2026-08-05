import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest';
import { MockedProvider } from '@apollo/client/testing/react';

const renderApollo = (
  node,
  { mocks, addTypename, defaultOptions, cache, resolvers, removeTypename, ...options } = {}
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
    >
      {node}
    </MockedProvider>,
    options
  );
};

export const renderWithRouterGenerator = (renderer) => (node, options) => {
  return renderer(<BrowserRouter>{node}</BrowserRouter>, options)
}

export const renderWithRouter = renderWithRouterGenerator(render)

export const renderApolloWithRouter = renderWithRouterGenerator(renderApollo)

export * from '@testing-library/react';
export { renderApollo };
