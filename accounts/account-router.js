// endpoints for /api/accounts

const express = require("express");
const router = express.Router();

const admin = require("../administrators/administrator-model");

router.get("/admin", (req, res) => {
  admin
    .getAdmin()
    .then((a) => {
      let adminEmailArr = [];
      a.map((obj) => {
        adminEmailArr.push(obj.email);
      });
      res.status(200).json(adminEmailArr);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errMsg: "Unable to retrieve admin data" });
    });
});

module.exports = router;
