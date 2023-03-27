import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from "@apollo/client";
import QuoteCard from '../containers/quote-card';


const GET_QUOTES = gql`
query GetQuotes {
  quotesForHome {
    id
    quotetext
    source
    author {
      id
      name
      photo
    }
  }
}`


/**
 * Quotes Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Quotes = () => {
  const { loading, error, data } = useQuery(GET_QUOTES);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
  <Layout grid>
    {data?.quotesForHome?.map((quote) => (
      <QuoteCard key={quote.id} quote={quote} />
    ))}
  </Layout>
  );
};

export default Quotes;
