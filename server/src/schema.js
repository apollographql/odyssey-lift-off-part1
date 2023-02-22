import { gql } from 'graphql-tag';

export const typeDefs = gql`
  "A Track is a group of modules that teach a specific topic"
  type Track {
    id: ID!
    "The Track's Title"
    title: String!
    "The Track's Main Author"
    author: Author!
    "The Track's Illustration to display on the card"
    thumbnail: String
    "The time it would approximate to complete in minutes"
    length: Int
    "The number of modules in the track"
    modulesCount: Int
  }

  "An Author is a the maker of a Track"
  type Author {
    id: ID!
    "The name of the author"
    name: String!
    "The photo of the author"
    photo: String
  }

  "Query for GraphQL endpoints"
  type Query {
    "Query to get all the tracks"
    tracksForHome: [Track!]!
  }
`