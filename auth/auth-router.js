const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const admin = require("../administrators/administrator-model");
const customers = require("../customers/customer-model");

router.post("/login/admin", (req, res) => {
  let { email, password } = req.body;
  // console.log('this is running');

  if (!email || !password) {
    res.status(400).json({ errMsg: "Please enter email and password" });
  } else {
    admin
      .findAdminBy({ email })
      .then((administrator) => {
        if (
          administrator &&
          bcrypt.compareSync(password, administrator.password)
        ) {
          const token = generateToken(administrator);

          res.status(200).json({
            message: `Welcome ${administrator.name}`,
            account: {
              id: administrator.id,
              name: administrator.name,
              email: administrator.email,
              role: "admin",
            },
            token,
          });
        } else {
          res.status(401).json({ errMsg: "Invalid credentials" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "A server error has occurred" });
      });
  }
});

router.post("/login/customer", (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ errMsg: "Please enter email and password" });
  } else {
    customers
      .findCustomerBy({ email })
      .then((customer) => {
        if (customer && bcrypt.compareSync(password, customer.password)) {
          const token = generateToken(customer);

          res.status(200).json({
            message: `Welcome ${customer.first_name}`,
            account: {
              id: customer.id,
              name: `${customer.first_name} ${customer.last_name}`,
              email: customer.email,
              role: "customer",
              subscriptionId: customer.subscription_id,
            },
            token,
          });
        } else {
          res.status(401).json({ errMsg: "Invalid credentials" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "A server error has occurred" });
      });
  }
});

// token generation
function generateToken(user) {
  const payload = {
    id: user.id,
  };

  const secret = "top secret";

  const options = {
    expiresIn: "24h",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
