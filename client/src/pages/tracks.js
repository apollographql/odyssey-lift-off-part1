import TrackCard from "..components/track-card";
import { gql } from '@apollo/client';
import React from 'react';
import { Layout } from '../components';

const TRACKS = gql`
query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <Layout grid>
      {data?.tracksForHome?.((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;
