import { Resolvers } from "./types.js"
export const resolvers: Resolvers = {
    Query: {
        trackForHome: (_, __, { dataSources }) => {
            return dataSources.trackApi.getTracksForHome()
        },
        track: (parent, args, contextValue, info) => {
            return contextValue.dataSources.trackApi.getTrack(args.id)
        },
    },

    Mutation: {
        incrementTrackVews: async (_, { id }, { dataSources }) => {
            const track =  await dataSources.trackApi.incrementTrackVews(id)
            try {
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track
                }
            } catch(err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                  };
            }
        }
    },

    Track: {
        author: ({authorId}, _, contextValue, info) => {
            return contextValue.dataSources.trackApi.getAuthor(authorId)
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackApi.getTrackModules(id)
        }
    }
}