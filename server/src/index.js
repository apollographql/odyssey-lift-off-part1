const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const typeDefs = require("./schema");
const fs = require("fs");
const https = require("https");
var cors = require("cors");

const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

async function startApolloServer() {
  const app = express();
  app.use(
    cors({
      origin: ["https://studio.apollographql.com", "http://localhost:3000"],
    })
  );

  // Create the HTTPS server
  const httpServer = https.createServer(
    {
      key: fs.readFileSync(`./ssl/localhost-key.pem`),
      cert: fs.readFileSync(`./ssl/localhost.pem`),
    },
    app
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      trackAPI: new TrackAPI(),
    }),
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({
    app,
  });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);

  return { server, app };
}

startApolloServer();
