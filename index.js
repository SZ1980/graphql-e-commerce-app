const { ApolloServer, gql } = require("apollo-server");

const { db } = require("./db.js");
const { products, categories } = db;
// console.log(categories);
const { typeDefs } = require("./schema");
// const { Query } = require("./resolvers/Query");
// const { Mutation } = require("./resolvers/Mutation");
// const { Category } = require("./resolvers/Category");
// const { Product } = require("./resolvers/Product");

//  numberOfAnimals: Int
//     price: Float db
//     isCool: Boolean

//
// reviews: [Review!]!
// image: String!

const resolvers = {
  Query: {
    products: () => {
      return products;
    },
    product: (parent, args, context) => {
      const { id } = args;
      return products.find((product) => product.id === id);
    },
    categories: () => categories,
    category: (parent, args, context) => {
      const { id } = args;
      return categories.find((category) => category.id === id);
    },
  },
  Category: {
    products: (parent, args, context) => {
      // console.log(parent);
      const categoryId = parent.id;
      return products.filter((product) => product.categoryId === categoryId);
    },
  },
  Product: {
    category: (parent, args, context) => {
      // console.log(parent);
      const categoryId = parent.categoryId;
      return categories.find((category) => category.id === categoryId);
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
