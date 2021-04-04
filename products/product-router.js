const express = require("express");
const router = express.Router();

const products = require("./product-model");

router.get("/", (req, res) => {
  products
    .getAllProducts()
    .then((p) => {
      res.status(200).json(p);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errMsg: "Unable to retreive products" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  products
    .getProductById(id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errMsg: "Unable to retrieve specified product" });
    });
});

module.exports = router;
