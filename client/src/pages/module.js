import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult, ModuleDetail } from "../components";

export const GET_MODULE_AND_PARENT_TRACK = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { trackId, moduleId },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
