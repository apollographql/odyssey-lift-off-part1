import React from "react";
import { Layout, QueryResult } from "../components";
import { gql } from "../__generated__";
import { DocumentNode, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";

const TRACKS = gql(`
  query GetQuery {
  tracksForHome {
    title
    id
    thumbnail
    length
    moduleCount
  }
}
`);

const Tracks = () => {
    const { loading, error, data } = useQuery(TRACKS);

    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.tracksForHome?.map((track) => (
                    <TrackCard key={track.id} track={track} />
                ))}
            </QueryResult>
        </Layout>
    );
};

export default Tracks;
