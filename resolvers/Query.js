// const { db } = require("../db.js");
// const { products, categories } = db;

exports.Query = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;
    if (filter) {
      // const { onSale, avgRating } = filter;
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
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
