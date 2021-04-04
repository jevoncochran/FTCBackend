const db = require("../data/dbConfig");

module.exports = {
  findAdminBy,
  getAdmin
};

function findAdminBy(filter) {
  return db("administrators").where(filter).first();
}

function getAdmin() {
  return db("administrators");
}
