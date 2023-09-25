import gql from "graphql-tag";
// gql is a tagged template literal, used for wrapping GraphQL strings like the schema definition
export const typeDefs = gql`
  # Schema definitions go here

  type Track {
    id:ID!
    Title:String!
    "a URL to the image for the track's card"
    Thumbnail:String
    Length:Int
    ModulesCount:Int
    Author:Author!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;