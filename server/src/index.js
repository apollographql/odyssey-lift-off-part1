import { ApolloServer } from "apollo-server";
// import typeDefs from "./schema.js";
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });
