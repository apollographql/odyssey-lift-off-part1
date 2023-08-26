import React from "react";
import { useQuery, gql } from '@apollo/client';
//import { gql } from "../__generated__";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";


const TRACKS = gql`
  query GetTrcks {
      trackForHome {
        id
        modulesCount
        thumbnail
        title
        author {
          id
          name
          photo
        }
        length
      }
  }
`
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS);
  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.trackForHome.map((track: any) => <TrackCard key={track.id} track={track}/>)}
    </QueryResult>
     
     </Layout>;
};

export default Tracks;
