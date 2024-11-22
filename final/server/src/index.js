const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./schema');

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/catstrophysicist_bqfh9n_j0amow.jpg',
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg',
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
