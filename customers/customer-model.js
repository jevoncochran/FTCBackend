const db = require("../data/dbConfig");

module.exports = {
  addNewCustomer,
  findCustomerById,
  findCustomerBy,
  getCustomerSubscription,
};

function addNewCustomer(customer) {
  return db("customers")
    .insert(customer, "id")
    .then((ids) => {
      const [id] = ids;
      return findCustomerById(id);
    });
}

function findCustomerById(id) {
  return db("customers").where({ id }).first();
}

function findCustomerBy(filter) {
  return db("customers").where(filter).first();
}

function getCustomerSubscription(id) {
  return db("customers as c")
    .select(
      "c.first_name",
      "c.last_name",
      "c.email",
      "p.item",
      "p.summary",
      "p.main_image",
      "p.price",
      "p.description1",
      "p.description2",
      "o.quantity",
      "c.address",
      "c.city",
      "c.state",
      "c.zip",
      "c.subscription_id"
    )
    .join("orders as o", "c.id", "o.customer_id")
    .join("products as p", "o.product_id", "p.id")
    .where("c.id", id)
    .first();
}
