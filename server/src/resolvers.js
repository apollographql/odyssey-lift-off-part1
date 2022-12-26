const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    }
};

module.exports = resolvers;