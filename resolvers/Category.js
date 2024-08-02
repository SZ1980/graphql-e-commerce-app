// const { db } = require("../db.js");
// const { products } = db;

exports.Category = {
  products: ({ id: categoryId }, { filter }, { products }) => {
    // console.log(parent);
    // const categoryId = parent.id;
    // return products.filter((product) => product.categoryId === categoryId);
    const categoryProducts = products.filter(
      (product) => product.categoryId === categoryId
    );
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }
    }

    return filteredCategoryProducts;
  },
};
