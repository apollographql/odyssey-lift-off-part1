const { gql } = require('apollo-server');

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track{
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    lenght: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author{
  id: ID!
  name: String!
  photo: String!
  }
`;

module.exports = typeDefs;