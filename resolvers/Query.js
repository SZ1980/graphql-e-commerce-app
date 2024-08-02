const { db } = require("../db.js");
const { products, categories } = db;

exports.Query = {
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
};
