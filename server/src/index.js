const { ApolloServer } = require("@apollo/server");
const { startStandalonServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs });
    const { url} = await startStandalonServer(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
    `);
}