import gql from "graphql-tag";

export const typeDefs = gql`
    type Query {
        "Get Tracks array for Homepage grid "
        tracksForHome: [Track!]!
    }

    "type track for all "
    type Track {
        title: String!
        id: ID!
        author: Author!
        thumbnail: String
        length: Int
        moduleCount: Int
    }

    "Author is a complete track or module "
    type Author {
        "First and last name included"
        name: String!
        id: ID!
        image: String
    }
`;
