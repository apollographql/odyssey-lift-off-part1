const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");


const mocks = {
    Query: () => ({
        quotesForHome: () => [...new Array(6)],
      }),
    Quote: () => ({
      id: () => "quote_01",
      quote: () => "42",
      source: () => "Hitchhiker\'s Guide to the Galaxy",
      author: () => {
        return {
          name: "Douglas Adams",
          photo:
            "https://www.telegraph.co.uk/content/dam/books/2016/05/25/adamscat_trans_NvBQzQNjv4BqyS02hinoGW_xcfEJDQ7ED0Oz222ZKgVAgL2atyHK4VQ.jpg",
        };
      },
    }),
  };

async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
          schema: makeExecutableSchema({ typeDefs }),
          mocks
        }),
      });
    const { url } = await startStandaloneServer(server);
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
  }

  startApolloServer();