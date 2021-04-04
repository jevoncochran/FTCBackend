exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  // Inserts seed entries
  return knex("subscriptions").insert([
    {
      id: 1,
      customer_id: 1,
      product_id: 1,
      quantity: 1,
      subscribed_on: "March 17, 2021",
      total: 35,
      next_charge_date: "March 31, 2021",
    },
    {
      id: 2,
      customer_id: 2,
      product_id: 1,
      quantity: 2,
      subscribed_on: "March 20, 2021",
      total: 70,
      next_charge_date: "April 3, 2021",
    },
    {
      id: 3,
      customer_id: 3,
      product_id: 2,
      quantity: 1,
      subscribed_on: "March 21, 2021",
      total: 10,
      next_charge_date: "March 28, 2021",
    },
  ]);
  // });
};
