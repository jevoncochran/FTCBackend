const express = require("express");
const router = express.Router();

const orders = require("./order-model");

router.post("/", (req, res) => {
  let order = req.body;
  console.log("orderBody: ", order);
  orders
    .addOrder(order)
    .then((newOrder) => {
      res.status(201).json(newOrder);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errMsg: "Unable to create order" });
    });
});

module.exports = router;
