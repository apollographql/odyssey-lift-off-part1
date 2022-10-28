const { gql } = require('apollo-server');

const typeDefs = gql`
  "Queries are the enty points to the rest of the data"
  type Query{
    """Query to get tracks array for the homepage grid
    Returns a non null list of non null tracks"""
    tracksFromHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in the track card or track page detail"
    thumbnail: String
    "the approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs
