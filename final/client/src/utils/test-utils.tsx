import React, { ComponentProps } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest';
import { MockedProvider } from '@apollo/client/testing/react';

type RenderApolloOptions = {
  mocks?: ComponentProps<typeof MockedProvider>['mocks'];
  addTypename?: boolean;
  defaultOptions?: ComponentProps<typeof MockedProvider>['defaultOptions'];
  cache?: ComponentProps<typeof MockedProvider>['cache'];
  resolvers?: any;
  removeTypename?: boolean;
} & Record<string, any>;

const renderApollo = (
  node: React.ReactElement,
  { mocks, addTypename, defaultOptions, cache, resolvers, removeTypename, ...options }: RenderApolloOptions = {}
) => {
  return render(
    <MockedProvider
      mocks={mocks}
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
