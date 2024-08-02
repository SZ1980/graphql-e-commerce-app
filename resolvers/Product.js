// const { db } = require("../db.js");
// const { categories } = db;

exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    // console.log(context);
    // const { sayHello } = context;
    // sayHello();
    // const categories = context.categories;
    // const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};
