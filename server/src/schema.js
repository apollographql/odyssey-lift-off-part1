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

    
module.exports = typeDefs;
