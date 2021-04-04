exports.up = function (knex) {
  return knex.schema.createTable("administrators", (tbl) => {
    tbl.increments();

    tbl.string("name", 255).notNullable();

    tbl.string("email", 255).notNullable().unique();

    tbl.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("administrators");
};
