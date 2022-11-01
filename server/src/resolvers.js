const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackApi.getTracksForHome();
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackApi.getTrack(id);
        },
    },

    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            const track = await dataSources.trackApi.incrementTrackViews(id);
            return {
                code: 200,
                success: true,
                message: `Successfully incremented number of views for track ${id}`,
                track
            };
        }
    },

    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackApi.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackApi.getTrackModules(id);
        },
    }
};

export default resolvers;