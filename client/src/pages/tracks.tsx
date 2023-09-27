import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout } from "../components";

const TRACKS=gql(`
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
`)

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading,error,data }=useQuery(TRACKS)

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  <Layout grid>{JSON.stringify(data)}</Layout>
  }

export default Tracks;
