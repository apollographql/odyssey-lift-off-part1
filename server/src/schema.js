const { gql } = require('apollo-server')

const typeDefs = gql`

    type Query{
        tracksForHome:[Track!]! #   Queiry to get tracks array for the homepage grid
    }

    #   A track is a a group of Modules that teaches about a specific topic
    type Track {
        id: ID!
        title: String!  #   the tracks title
        author: Author! #   the trucks's main author
        thumbnail: String   # the autors main illustration to display in truck card or track page detail
        length: Int     #   the tracks's approximat length to complete, in minutes
        modulesCount: Int   #   the number of module sthis track contains
    }

    type Author {
        id: ID!
        name: String!   #   Author's first and last name
        photo: String   #   Authors's profile picture url
    }
`

module.exports = typeDefs