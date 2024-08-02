// const { db } = require("../db.js");
// const { products, categories } = db;

exports.Query = {
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, { id }, { products }) => {
    // const { id } = args;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    // const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
