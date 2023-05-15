const gql = require('graphql-tag');

const typeDefs = gql`
type Query {
    "Query to get tracks for homepage"
    tracksForHome:[Track!] 
}
"A track is a group of modules that teaches about a specific topic"
type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's author"
    author: Author!
    "the track's main illustration to display in track card"
    thumbnail: String
    "the track's aprox. length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
}   

"Author of a complete track"
type Author {
    id:ID!
    "the name of author"
    name: String!
    "Image of author url"
    photo: String
}
`;

module.exports = typeDefs;