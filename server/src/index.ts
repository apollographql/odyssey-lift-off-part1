const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs } = require("./schema");


const mocks = {
  Query: {
    TracksForHome: () => [...new Array(6)],
  },
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};
//create an instance of the appollo server class and pass the typeDefs

/*we're generating an executable schema from our typeDefs,and instructing Apollo Server to populate every queried schema
 field with a placeholder value 
 */
const startApolloServer=async()=>{
    const server =new ApolloServer({
      schema:addMocksToSchema({
        schema:makeExecutableSchema({typeDefs}),
        mocks,
      })
      })
    
    //The startStandaloneServer function returns a Promise, so we'll await the results of that call,
    //and pull out the url property from the result.
    const {url}= await startStandaloneServer(server)
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);

}

startApolloServer()
