const gql=require ("graphql-tag")
// gql is a tagged template literal, used for wrapping GraphQL strings like the schema definition
export const typeDefs = gql`
  # Schema definitions go here

  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
  }

`;
