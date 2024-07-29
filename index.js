const { ApolloServer, gql } = require("apollo-server");
// const { typeDefs } = require("./schema");
// const { Query } = require("./resolvers/Query");
// const { Mutation } = require("./resolvers/Mutation");
// const { Category } = require("./resolvers/Category");
// const { Product } = require("./resolvers/Product");
// const { db } = require("./db");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "World!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// {
//   typeDefs,
//   resolvers: {
//     Query,
//     Mutation,
//     Category,
//     Product,
//   },
//   context: {
//     db,
//   },
// }
server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
