const bcrypt = require("bcryptjs");
(FlakeIdGen = require("flake-idgen")),
  (intformat = require("biguint-format")),
  (generator = new FlakeIdGen());

exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('administrators').truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("customers").insert([
    {
      first_name: "Lucas",
      last_name: "Solorzano",
      email: "lucas.solorzano@gmail.com",
      password: bcrypt.hashSync("solorzano", 8),
      stripe_id: intformat(generator.next(), "dec"),
      address: "5461 Cole St",
      city: "Oakland",
      state: "CA",
      zip: "94601",
      phone: "7329868704",
      currently_subscribed: true,
    },
    {
      first_name: "Gleyson",
      last_name: "Coelho",
      email: "gleyson.coelho@gmail.com",
      password: bcrypt.hashSync("coelho", 8),
      stripe_id: intformat(generator.next(), "dec"),
      address: "5542 Foothill Blvd",
      city: "Oakland",
      state: "CA",
      zip: "94605",
      phone: "3108040703",
      currently_subscribed: true,
    },
    {
      first_name: "Leroy",
      last_name: "Gatlin",
      email: "leroy.gatlin@gmail.com",
      password: bcrypt.hashSync("gatlin", 8),
      stripe_id: intformat(generator.next(), "dec"),
      address: "6232 Boulder Lane",
      city: "Oakland",
      state: "CA",
      zip: "94605",
      phone: "2515455171",
      currently_subscribed: true,
    },
  ]);
  // });
};
