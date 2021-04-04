const db = require("../data/dbConfig");

module.exports = { getAllProducts, getProductById };

function getAllProducts() {
  return db("products");
}

function getProductById(id) {
  return db("products").where({ id }).first();
}
