const { ApolloServer } = require("@apollo/server");
const { startStandalonServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

async function startApolloServer() {
    const server = new ApolloServer({ 
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs }),
            mocks, 
        }),
     });
    const { url} = await startStandalonServer(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
    `);
}