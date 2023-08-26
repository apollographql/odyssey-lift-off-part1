import React from "react";
//import { gql } from "../__generated__";
import { useQuery, gql } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
    query Track($trackId: ID!) {
        track(id: $trackId) {
            id
            title
            author {
                name
                photo
                id
            }
            thumbnail
            length
            modulesCount
            modules {
                id
                title
                length
            }
            descriptions
            numberOfViews
        }
}
`

const Track = () => {
    const { trackId } = useParams();

    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: {
            trackId: trackId
        }
    })
    return <Layout>
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track} />
    </QueryResult>
  </Layout>
}

export default Track;