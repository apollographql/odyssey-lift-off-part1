import {ApolloServer} from 'apollo-server';
import typeDefs from './schema.js';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)]
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6
  })
};

const server = new ApolloServer({
  typeDefs,
  mocks
});

try {
  await server.listen();
  console.log(`
      🚀  Server is running!
      🔉  Listening on port ${PORT}
      📭  Query at http://localhost:${PORT}
    `);
} catch (error) {
  console.log('Something wrong!')
}