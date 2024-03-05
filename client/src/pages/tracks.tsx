import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__/";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

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
    return <Layout grid> </Layout>;
};

export default Tracks;
