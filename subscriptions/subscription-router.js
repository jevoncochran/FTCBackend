const express = require("express");
const router = express.Router();

const customers = require("../customers/customer-model");

// router.get("/:id", (req, res) => {
//   let { id } = req.params;

//   customers
//     .getCustomerSubscription(id)
//     .then((cust) => {
//       res.status(200).json(cust);
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .json({ errMsg: "Unable to retrieve customer subscription" });
//     });
// });

module.exports = router;
