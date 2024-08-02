const { ApolloServer, gql } = require("apollo-server");

const { db } = require("./db.js");
const { products, categories } = db;
// console.log(categories);
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
// const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

// reviews: [Review!]!
// image: String!

// const resolvers = {
//   Query,
// };

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

//   context: {
//     db,
//   },
// }Mutation,
server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
