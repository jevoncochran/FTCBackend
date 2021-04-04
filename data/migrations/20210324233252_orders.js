exports.up = function (knex) {
  return knex.schema.createTable("orders", (tbl) => {
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

    tbl.date("date").notNullable();

    tbl.decimal("total", 4, 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orders");
};
