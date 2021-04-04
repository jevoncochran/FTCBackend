exports.up = function (knex) {
  return knex.schema.createTable("subscriptions", (tbl) => {
    tbl.increments();

    tbl
      .integer("customer_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("customers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("product_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("products")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.integer("quantity");

    tbl.date("subscribed_on").notNullable();

    tbl.decimal("total", 4, 2).notNullable();

    tbl.date("next_charge_date");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("subscriptions");
};
