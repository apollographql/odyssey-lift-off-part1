const {gql} = require('apollo-server');

const typeDefs = gql `

type Query{
    "Query to get tracks for homepage"
    tracksForHome: [Track!]!
}
"A track is a group of modules that define a particular track"
type Track{
    id: ID!
    "The track's title"
    title: String!
    "The track's author"
    author: Author!
    "the tracks main illustation"
    thumbnail: String
    "the tracks approximate length"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
}

type Author{
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profie picture"
    photo : String
}
`;

module.exports= typeDefs;

