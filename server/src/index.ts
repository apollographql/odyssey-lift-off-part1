import { ApolloServer } from '@apollo/server';

import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
import { TrackApi } from './datasourses/track-api.js';

import { startStandaloneServer } from '@apollo/server/standalone';

/* const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
      }),
    Track: () => ({
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 6,
    }),
  }; */

async function startApolloServer () {
    /* const server = new ApolloServer ({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({
                typeDefs
            }),
            mocks
        })
    }); */
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        const { cache } = server;
        return {
          dataSources: {
            trackApi: new TrackApi({cache})
          }
        }
      }
    });

    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
    `);
}

startApolloServer()