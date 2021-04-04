const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('administrators').truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("administrators").insert([
    {
      name: "Jevon Cochran",
      email: "jevon.cochran@gmail.com",
      password: bcrypt.hashSync("cochran", 8),
    },
    {
      name: "Timothy Killings",
      email: "killings.timothy@gmail.com",
      password: bcrypt.hashSync("killings", 8),
    },
    {
      name: "Paloma Collier",
      email: "palomacollier@gmail.com",
      password: bcrypt.hashSync("benjamin", 8),
    },
  ]);
  // });
};
