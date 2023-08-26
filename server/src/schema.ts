import { gql } from 'graphql-tag';

export const typeDefs = gql`#graphql
    type Query {
        trackForHome: [Track!]!
        track(id: ID!): Track
        modules(id: ID!): [Module]
    }

    type Mutation {
        incrementTrackVews(id: ID!): IncrementTrackVewsResponce!
    }

    type IncrementTrackVewsResponce {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        descriptions: String
        numberOfViews: Int
        modules: [Module!]!
    }

    type Module {
        id: ID!
        title: String!
        length: Int
    }

    type Author {
        id: ID!
        name: ID!
        photo: String
    }
`;

