<<<<<<< HEAD
const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

=======
const gql = require("graphql-tag");



const typeDefs = gql`
type Query {
    "Query to get all tracks, paginated"
    tracksForHome: [Track!]!
}
"A track is a group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "The track's illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in seconds"
        length: Int # length in seconds
        "The number of modules this track contains"
        modulesCount: Int
        "The track's complete description, can be in Markdown format"
    }

"Author of a complete Track"
    type Author {
        id: ID!
        "Author's name"
        name: String!
        "Author's profile picture url"
        photo: String
}
    `;

    
>>>>>>> 1de30a3958c056c799701eaf420fb4022701930a
module.exports = typeDefs;
