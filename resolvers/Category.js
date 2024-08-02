// const { db } = require("../db.js");
// const { products } = db;

exports.Category = {
  products: ({ id: categoryId }, args, { products }) => {
    // console.log(parent);
    // const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
