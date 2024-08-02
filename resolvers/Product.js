const { db } = require("../db.js");
const { categories } = db;

exports.Product = {
  category: (parent, args, context) => {
    // console.log(parent);
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};
