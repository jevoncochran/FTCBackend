const db = require("../data/dbConfig");

module.exports = { addOrder, getOrderById };

function addOrder(order) {
  return db("orders")
    .insert(order, "id")
    .then((ids) => {
      const [id] = ids;
      return getOrderById(id);
    });
}

function getOrderById(id) {
  return db("orders").where({ id }).first();
}
