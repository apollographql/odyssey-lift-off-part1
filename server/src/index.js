import {ApolloServer} from 'apollo-server';
import typeDefs from './schema.js';
import resolvers from './resolvers.js'
import TrackApi from './datasources/track-api.js'
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackApi: new TrackApi()
    }
  }
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