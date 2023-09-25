import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

//create an instance of the appollo server class and pass the typeDefs

const startApolloServer=async()=>{
    const server =new ApolloServer({typeDefs})
    //The startStandaloneServer function returns a Promise, so we'll await the results of that call,
    //and pull out the url property from the result.
    const {url}= await startStandaloneServer(server)
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);

}

startApolloServer()
