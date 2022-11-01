const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackApi.getTracksForHome();
        },
        track: (_, {id}, {dataSources}) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackApi.getAuthor(authorId);
        }
    }
};

export default resolvers;