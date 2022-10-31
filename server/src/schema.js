const { gql } = require('apollo-server');

const typeDefs = gql`
  type Track{
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    lenght: Int
    modulesCount: Int
  }
  type Author{
  id: ID!
  name: String!
  photo: String!
  }
`;
module.exports = typeDefs;