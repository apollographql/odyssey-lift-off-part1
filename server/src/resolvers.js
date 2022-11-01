const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackApi.getTracksForHome();
        },
        track: (_, {id}, {dataSources}) => {
            return dataSources.trackApi.getTrack(id);
        },
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackApi.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackApi.getTrackModules(id);
        },
    }
};

export default resolvers;