exports.up = function (knex) {
  return knex.schema.createTable("customers", (tbl) => {
    tbl.increments();

    tbl.string("first_name", 255).notNullable();

    tbl.string("last_name", 255).notNullable();

    tbl.string("company", 255);

    tbl.string("email", 255).notNullable().unique();

    tbl.string("password", 255).notNullable();

    tbl.string("stripe_id", 255).notNullable().unique();

    tbl.string("phone", 11).notNullable();

    tbl.string("address", 255).notNullable();

    tbl.string("city", 255).notNullable();

    tbl.string("state", 2).notNullable();

    tbl.string("zip", 12).notNullable();

    tbl.string("order_notes", 255);

    tbl.string("subscription_id");

    tbl.boolean("currently_subscribed").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers");
};
