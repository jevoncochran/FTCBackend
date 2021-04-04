// endpoint for /api/customers

const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const customers = require("./customer-model");

router.post("/", (req, res) => {
  let customer = req.body;

  const hash = bcrypt.hashSync(customer.password, 8);
  customer.password = hash;

  customers
    .addNewCustomer(customer)
    .then((newCustomer) => {
      res.status(201).json(newCustomer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errMsg: "Unable to create customer" });
    });
});

router.get("/:id/subscription", (req, res) => {
  let { id } = req.params;

  customers
    .getCustomerSubscription(id)
    .then((cust) => {
      res.status(200).json(cust);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errMsg: "Unable to retrieve customer subscription" });
    });
});

module.exports = router;
