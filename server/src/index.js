import {ApolloServer} from 'apollo-server';
import typeDefs from './schema.js';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({typeDefs});

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