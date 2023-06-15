import React from 'react';
import { ApolloError } from '@apollo/client';
import { render, cleanup } from '../../utils/test-utils';
import QueryResult from '../query-result';

describe('Query Result', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders loading state', async () => {
    const { getByTestId } = render(<QueryResult loading={true} />);
    getByTestId(/spinner/i);
  });

  it('renders No Data message', async () => {
    // passing no error and no data
    const { getByText } = render(<QueryResult loading={false} />);
    getByText(/nothing to show/i);
  });

  it('renders Error', async () => {
    const { getByText } = render(<QueryResult loading={false} error={new ApolloError({ errorMessage: 'you lose' })} />);
    getByText(/you lose/i);
  });
});
