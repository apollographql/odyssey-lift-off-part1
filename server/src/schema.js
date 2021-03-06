const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    "Get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's author"
    author: Author!
    "the track's main illustration"
    thumbnail: String
    "the track's approximate length to complete in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "the author's name"
    name: String!
    "the author's photo"
    photo: String
  }
`

module.exports = typeDefs
