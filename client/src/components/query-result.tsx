import React, { PropsWithChildren} from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';
import { ApolloError } from '@apollo/client'


interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  data?: unknown,
}

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({ loading, error, data, children }): React.ReactElement<any, any> | null => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }
  if (data) {
    return <>{children}</>;
  }

    return <p>Nothing to show...</p>;
  
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
