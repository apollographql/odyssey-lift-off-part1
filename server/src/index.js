const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");


const mocks = {
    Query: () => ({
        quotesForHome: () => [...new Array(3)],
      }),
    Quote: () => ({
      id: () => "quote_01",
      quotetext: () => "“The Ultimate Answer to Life, The Universe and Everything is...42!”",
      source: () => "Hitchhiker\'s Guide to the Galaxy",
      author: () => {
        return {
          name: "Douglas Adams",
          photo:
            "https://www.telegraph.co.uk/content/dam/books/2016/05/25/adamscat_trans_NvBQzQNjv4BqyS02hinoGW_xcfEJDQ7ED0Oz222ZKgVAgL2atyHK4VQ.jpg",
        };
      },
    }),
    Quote: () => ({
        id: () => "quote_02",
        quotetext: () => "“We\'re all pretty bizarre. Some of us are just better at hiding it, that\'s all.”",
        source: () => "The Breakfast Club",
        author: () => {
          return {
            name: "John Hughes",
            photo:
              "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTypfCEpnH7cpg-YbPuc2yTB18OtDTHWjaAOE25eNtGtTxU-wOUHKUvZkNMxOZkMBhJM8dmblNegxXylD8",
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